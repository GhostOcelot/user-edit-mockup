import React from "react"
import AddUserForm from "./components/AddUserForm"
import EditUserForm from "./components/EditUserForm"
import Dashboard from "./components/Dashboard"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useFirestoreConnect } from "react-redux-firebase"

const App = () => {
	useFirestoreConnect({
		collection: `allUsers`,
	})

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/add-user" component={AddUserForm} />
					<Route path="/edit-user/:userId" component={EditUserForm} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
