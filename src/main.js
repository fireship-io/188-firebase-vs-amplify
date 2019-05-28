import App from './App.svelte';

import Amplify from '@aws-amplify/core';
import awsmobile from './aws-exports';
console.log(awsmobile)
Amplify.configure(awsmobile);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;
export default app;