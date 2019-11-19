# AWS Amplify Authentication Hooks & Routes

A demonstration of using AWS Amplify authentication with hooks and route-level permissions.

## Getting Started

### Configure Amplify

There are lots of Amplify auth configurations available, so I won't detail them here. This example is configured for Cognito auth, but with a few tweaks you should be able to get this working with just about any auth backend.

Your Amplify configuration will need to be configured in [config/amplify](src/auth/config/amplify). You might also like to set up a `.env` file as I have in this example.

### Run it

This is a basic CRA (Create React App), so:

```
yarn start
```

## What's what?

The two keys here are `auth/components` and `auth/hooks`.

The hook, `useAmplifyUser` can be applied to any component that needs access to the user.

The component, `ProtectedRoute`, is just an example of how you can protect a specific route. This is a basic example, but you could add role checks or add an escape hatch for custom share tokens...
