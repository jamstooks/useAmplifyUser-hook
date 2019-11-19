import React from 'react'
import Amplify from 'aws-amplify'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import _ from 'lodash'

import useAmplifyUser from './auth/hooks/useAmplifyUser'
import ProtectedRoute from './auth/components/ProtectedRoute'

import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Private from './components/Private'

import { amplifyConfig } from './config/amplify.js'

Amplify.configure(amplifyConfig)

export default function App() {
  const [user, signOut] = useAmplifyUser()

  const username = _.get(user, 'username', 'No User')
  return (
    <div>
      <div style={{ backgroundColor: 'lightGray', padding: '1em' }}>
        User: <i>{username}</i>
        {user ? <SignOut signOut={signOut} /> : <SignIn />}
      </div>

      <BrowserRouter>
        <div style={{ backgroundColor: '#eee', padding: '1em' }}>
          Menu:
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/private">
            Private
          </Link>
          <Link className="link" to="/public">
            Public
          </Link>
        </div>

        <div
          style={{ border: '1px dotted gray', padding: '3em', margin: '1em' }}
        >
          <Switch>
            <ProtectedRoute path="/private" component={Private} />
            <Route
              exact
              path="/public"
              component={() => <h2>Public Route</h2>}
            />
            <Route exact path="/" component={() => <h2>Home</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
