const CLIENT_ID = process.env.REACT_APP_AWS_COGNITO_CLIENT_ID
const IDENTITY_PROVIDER = process.env.REACT_APP_AWS_COGNITO_PROVIDER
const AUTH_DOMAIN = process.env.REACT_APP_AWS_COGNITO_AUTH_DOMAIN
const USER_POOL_ID = process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID
const REDIRECT_URL = process.env.REACT_APP_AWS_COGNITO_REDIRECT_URL
const RESPONSE_TYPE = 'code'

export const oauth = {
  // Domain name
  domain: AUTH_DOMAIN,

  // Authorized scopes
  scope: [
    'phone',
    'email',
    'profile',
    'openid',
    'aws.cognito.signin.user.admin'
  ],

  // Callback URL
  redirectSignIn: REDIRECT_URL,

  // Sign out URL
  redirectSignOut: REDIRECT_URL,

  // 'code' for Authorization code grant,
  // 'token' for Implicit grant
  responseType: RESPONSE_TYPE,

  // optional, for Cognito hosted ui specified options
  options: {
    // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
    AdvancedSecurityDataCollectionFlag: true
  }
}

export const amplifyConfig = {
  Auth: {
    userPoolWebClientId: CLIENT_ID,
    domain: AUTH_DOMAIN,
    userPoolId: USER_POOL_ID,
    oauth: oauth
  }
}

const params = {
  redirect_uri: REDIRECT_URL,
  response_type: RESPONSE_TYPE,
  client_id: CLIENT_ID,
  identity_provider: IDENTITY_PROVIDER ? IDENTITY_PROVIDER : null
}

const queryString = Object.keys(params)
  .map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  })
  .join('&')

export const LoginURL = `https://${AUTH_DOMAIN}/authorize?${queryString}`
