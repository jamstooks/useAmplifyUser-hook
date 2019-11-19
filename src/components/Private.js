import React from 'react'
import _ from 'lodash'

import useAmplifyUser from '../auth/hooks/useAmplifyUser'

export default function Private() {
  const [user] = useAmplifyUser()

  const username = _.get(user, 'username')
  return (
    <div>
      <h2>This is private!</h2>
      <p>
        But you have access :)
        <pre>{username}</pre>
      </p>
    </div>
  )
}
