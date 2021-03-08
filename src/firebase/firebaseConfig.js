import firebase from "firebase/app"
import "firebase/firestore"
import { createFirestoreInstance } from "redux-firestore"
import { store } from "../redux/store"

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: "sandbox-bfdd2",
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREABSE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
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
