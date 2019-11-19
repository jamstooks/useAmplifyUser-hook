import React from 'react';
import { LoginURL } from '../config/amplify.js';

export default function SignIn() {
	const doSignIn = () => {
		window.location.assign(LoginURL + `&state=${window.location}`);
	};
	return <button onClick={doSignIn}>Sign In</button>;
}
