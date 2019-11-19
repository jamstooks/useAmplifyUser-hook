# AWS Amplify Authentication Hooks & Routes

A demonstration of using hooks with [AWS Amplify authentication](https://aws-amplify.github.io/docs/js/authentication) and route-level permissions.

## Configure Amplify

Configure your Amplify configuration in [`config/amplify`](src/config/amplify.js) and `.env`.

This example is configured for [Cognito auth](https://aws.amazon.com/cognito/), but with a few tweaks you should be able to get this working with just about any auth backend.

## Demo

This is a basic [CRA](https://github.com/facebook/create-react-app), so just:

```
yarn start
```

## The Hook

[`useAmplifyUser`](src/auth/hooks/useAmplifyUser.js) can be applied to any component that needs access to the user.

## Route Protection

[`ProtectedRoute`](src/auth/components/ProtectedRoute.js) is just an example of how you can protect a specific route. This is a basic example, but one could add role checks or add an escape hatch for custom share tokens...
