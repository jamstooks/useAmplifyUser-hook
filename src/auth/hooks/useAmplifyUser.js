import { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { parse } from 'query-string'

export default function useAmplifyUser() {
  const [user, setUser] = useState(Auth.user)
  const signOut = () => Auth.signOut()

  useEffect(() => {
    // Escape hatch to prevent the state from updating after unmounting
    let isMounted = true

    // Check for existing auth during initial load
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (isMounted) {
          setUser(user)
        }
      })
      .catch((e) => console.debug(e)) // eslint-disable-line no-console

    // Listens for any changes to the user's authentication state
    Hub.listen('auth', (data) => {
      const { payload } = data

      if (payload.event === 'signIn') {
        // Redirect to the originally requested route, if necessary
        // Not sure if this applies to all auth backends
        const params = parse(window.location.search)
        if ('state' in params && params.state !== window.location) {
          window.location.assign(params['state'])
        }
        // If we aren't redirecting, then update the state
        if (isMounted) setUser(payload.data)
      }

      if (payload.event === 'signOut') {
        if (isMounted) setUser(null)
      }
    })
    return () => (isMounted = false)
  }, [])

  return [user, signOut]
}
