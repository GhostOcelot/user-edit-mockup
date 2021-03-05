import { createStore, combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"

const rootReducer = combineReducers({
	firestore: firestoreReducer,
})

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
