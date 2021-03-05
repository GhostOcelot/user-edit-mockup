import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory, useParams } from "react-router-dom"
import { useFirestore } from "react-redux-firebase"

const EditUserForm = () => {
	const allUsers = useSelector(state => state.firestore.ordered.allUsers)
	const { userId } = useParams()
	const userToEdit = allUsers.find(user => user.id === userId)
	const [tempUser, setTempUser] = useState(userToEdit)
	const [warning, setWarning] = useState(false)
	const history = useHistory()
	const firestore = useFirestore()

	const handleSubmit = async e => {
		e.preventDefault()
		if (e.target.name.value && e.target.email.value) {
			firestore.collection("allUsers").doc(userId).update(tempUser)
			history.push("/")
		} else {
			setWarning(true)
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

export default EditUserForm
