import firebase from "firebase/app"
import "firebase/firestore"
import { createFirestoreInstance } from "redux-firestore"
import { store } from "../redux/store"

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "sandbox-bfdd2.firebaseapp.com",
	databaseURL: "https://sandbox-bfdd2.firebaseio.com",
	projectId: "sandbox-bfdd2",
	storageBucket: "sandbox-bfdd2.appspot.com",
	messagingSenderId: "695415368032",
	appId: "1:695415368032:web:c292c7f5099aa683001605",
}

const rrfConfig = {
	userProfile: "allUsers",
	useFirestoreForProfile: true,
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
}
