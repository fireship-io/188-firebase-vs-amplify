import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyBns4UUCKIfb_3xOesTSezA9GbEyuIU7XA",
	authDomain: "fireship-app.firebaseapp.com",
	databaseURL: "https://fireship-app.firebaseio.com",
	projectId: "fireship-app",
	storageBucket: "fireship-app.appspot.com",
	messagingSenderId: "176605045081",
	appId: "1:176605045081:web:31d6cc4fcd3b8325"
}

firebase.initializeApp(config);

export const Auth = firebase.auth();
export const Firestore = firebase.firestore();