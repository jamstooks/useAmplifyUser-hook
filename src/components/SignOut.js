import React from 'react';

export default function SignOut({ signOut }) {
	const doSignOut = () => signOut();
	return <button onClick={doSignOut}>Sign Out</button>;
}
