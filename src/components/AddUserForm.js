import { useDispatch } from "react-redux"
import { addUser } from "../actions/usersActions"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"

const AddUserForm = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [warning, setWarning] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()

		if (e.target.name.value && e.target.email.value) {
			dispatch(
				addUser({
					id: Math.random(),
					name: e.target.name.value,
					email: e.target.email.value,
					phone: e.target.phone.value,
					city: e.target.city.value,
					zipcode: e.target.zipcode.value,
					street: e.target.street.value,
					suite: e.target.suite.value,
				})
			)
			history.push("/")
		} else {
			setWarning(true)
		}
	}

	return (
		<div className="modal-container">
			<div className="form-container">
				<h2>Add new user:</h2>
				<form className="user-form" onSubmit={e => handleSubmit(e)}>
					<input type="text" id="name" placeholder="name" />
					<input type="text" id="email" placeholder="email" />
					<input type="text" id="phone" placeholder="phone" />
					<input type="text" id="street" placeholder="street" />
					<input type="text" id="suite" placeholder="suite" />
					<input type="text" id="zipcode" placeholder="zip code" />
					<input type="text" id="city" placeholder="city" />
					<input type="submit" value="Add user" />
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
