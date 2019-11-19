import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import useAmplifyUser from '../hooks/useAmplifyUser'

const ProtectedRoute = ({
  component: Component,
  loginRedirect = '/',
  ...rest
}) => {
  const [user] = useAmplifyUser()

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <div>
            <h3 style={{ color: 'orange' }}>Permission Denied</h3>
            <p style={{ color: 'red' }}>
              You must log in to access this route.
            </p>
          </div>
          // Or you could redirect to a login route...
          // <Redirect to={{ pathname: loginRedirect, state: { from: rest.location } }} />
        )
      }
    />
  )
}

export default withRouter(ProtectedRoute)
