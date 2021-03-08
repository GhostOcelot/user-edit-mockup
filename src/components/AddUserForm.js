import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import { useFirestore } from "react-redux-firebase"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const AddUserForm = () => {
	const history = useHistory()
	const [warning, setWarning] = useState(false)
	const firestore = useFirestore()

	const handleSubmit = async e => {
		e.preventDefault()

		if (e.target.name.value && e.target.email.value) {
			const user = {
				name: e.target.name.value,
				email: e.target.email.value,
				phone: e.target.phone.value,
				city: e.target.city.value,
				zipcode: e.target.zipcode.value,
				street: e.target.street.value,
				suite: e.target.suite.value,
				important: false,
				timeCreated: new Date(),
			}
			firestore
				.collection("allUsers")
				.add(user)
				.then(() => history.push("/"))
		} else {
			setWarning(true)
		}
	}

	return (
		<div className="modal-container">
			<div className="form-container">
				<h2>Add new user:</h2>
				<form className="user-form" onSubmit={e => handleSubmit(e)}>
					<TextField id="name" label="name" autoComplete="none" />
					<TextField id="email" label="email" autoComplete="none" />
					<TextField id="phone" label="phone" autoComplete="none" />
					<TextField id="street" label="street" autoComplete="none" />
					<TextField id="suite" label="suite" autoComplete="none" />
					<TextField id="zipcode" label="zip code" autoComplete="none" />
					<TextField id="city" label="city" />
					<Button variant="contained" color="primary" type="submit" className="btn">
						Add user
					</Button>
					<small style={warning ? null : { display: "none" }} className="warning">
						NAME AND EMAIL REQUIRED
					</small>
				</form>
			</div>
			<Link to="/">
				<h1 className="close-modal">X</h1>
			</Link>
		</div>
	)
}

export default AddUserForm
