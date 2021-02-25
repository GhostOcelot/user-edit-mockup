import thunk from "redux-thunk"
import { applyMiddleware, createStore, compose, combineReducers } from "redux"
import { usersReducer } from "./reducers/usersReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ users: usersReducer })

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
