# AWS Amplify Authentication Hooks & Routes

A demonstration of using hooks with [AWS Amplify authentication](https://aws-amplify.github.io/docs/js/authentication) and route-level permissions.

## Getting Started

### Configure Amplify

There are lots of Amplify auth providers available, so I won't detail them here. This example is configured for [Cognito auth](https://aws.amazon.com/cognito/), but with a few tweaks you should be able to get this working with just about any auth backend.

Configure your Amplify configuration in [`config/amplify`](config/amplify.js). You might also like to set up an `.env` file as I have in this example.

### Run it

This is a basic [CRA](https://github.com/facebook/create-react-app), so:

```
yarn start
```

## What's what?

In this example, the [`auth`](auth/) directory has just one hook and one component:

The hook, [`useAmplifyUser`](auth/hooks/useAmplifyUser.js) can be applied to any component that needs access to the user.

The component, [`ProtectedRoute`](auth/components/ProtectedRoute.js), is just an example of how you can protect a specific route. This is a basic example, but you could add role checks or add an escape hatch for custom share tokens...
