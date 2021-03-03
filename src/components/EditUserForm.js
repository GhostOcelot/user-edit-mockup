import React from 'react'
import { connect } from "react-redux"
import { editUser } from "../actions/usersActions"
import { Link, useHistory, useParams } from "react-router-dom"

const EditUserForm = ({ editUser, allUsers }) => {
	const history = useHistory()
  const { userId } = useParams()

  const user = allUsers.find((user) => user.id === Number(userId))

  const [tempUser, setTempUser] = React.useState(user)

  
	const handleSubmit = async e => {
		e.preventDefault()
		if (e.target.name.value && e.target.email.value) {
			editUser(tempUser)
			history.push("/")
		} else {
			document.querySelector(".warning").innerText = "NAME AND EMAIL MANDATORY"
		}
	}

	const handleChange = e => {
		setTempUser({
			...tempUser,
			[e.target.id]: e.target.value,
		})
	}

	return (
		<div className="modal-container">
			<div className="form-container">
				<h2>Edit user:</h2>
				<form className="user-form" onSubmit={e => handleSubmit(e)}>
					<input
						type="text"
						id="name"
						placeholder="name"
						value={tempUser.name}
						onChange={e => handleChange(e)}
					/>
					<input
						type="text"
						id="email"
						placeholder="email"
						value={tempUser.email}
						onChange={e => handleChange(e)}
					/>
					<input
						type="text"
						id="phone"
						placeholder="phone"
						value={tempUser.phone}
						onChange={e => handleChange(e)}
					/>
					<input
						type="text"
						id="street"
						placeholder="street"
						value={tempUser.street}
						onChange={e => handleChange(e)}
					/>
					<input
						type="text"
						id="suite"
						placeholder="suite"
						value={tempUser.suite}
						onChange={e => handleChange(e)}
					/>
					<input
						type="text"
						id="zipcode"
						placeholder="zip code"
						value={tempUser.zipcode}
						onChange={e => handleChange(e)}
					/>
					<input
						type="text"
						id="city"
						placeholder="city"
						value={tempUser.city}
						onChange={e => handleChange(e)}
					/>
					<input type="submit" value="Update user info" />
					<small className="warning"></small>
				</form>
			</div>
			<Link to="/">
				<h1 className="close-modal">X</h1>
			</Link>
		</div>
	)
}

const mapStateToProps = state => {
	return { allUsers: state.users.allUsers }
}

const mapDispatchToProps = dispatch => {
	return {
		editUser: user => dispatch(editUser(user)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)
