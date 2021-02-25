import { connect } from "react-redux"
import { addUser } from "../actions/usersActions"
import { Link, useHistory } from "react-router-dom"

const AddUserForm = ({ addUser }) => {
	const history = useHistory()

	const handleSubmit = async e => {
		e.preventDefault()

		if (e.target.name.value && e.target.email.value) {
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
			history.push("/")
		} else {
			document.querySelector(".warning").innerText = "NAME AND EMAIL MANDATORY"
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
					<small className="warning"></small>
				</form>
			</div>
			<Link to="/">
				<h1 className="close-modal">X</h1>
			</Link>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		addUser: newUser => dispatch(addUser(newUser)),
	}
}
export default connect(null, mapDispatchToProps)(AddUserForm)
