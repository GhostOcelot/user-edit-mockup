import React from "react"
import AddUserForm from "./components/AddUserForm"
import EditUserForm from "./components/EditUserForm"
import Dashboard from "./components/Dashboard"
import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {
	const [tempUser, setTempUser] = useState({})

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => <Dashboard setTempUser={setTempUser} />} />
					<Route path="/add-user" render={() => <AddUserForm />} />
					<Route
						path="/edit-user"
						render={() => <EditUserForm tempUser={tempUser} setTempUser={setTempUser} />}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
