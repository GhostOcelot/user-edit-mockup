import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory, useParams } from "react-router-dom"
import { useFirestore } from "react-redux-firebase"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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
					<TextField
						id="name"
						label="name"
						autoComplete="none"
						value={tempUser.name}
						onChange={e => handleChange(e)}
					/>
					<TextField
						id="email"
						label="email"
						autoComplete="none"
						value={tempUser.email}
						onChange={e => handleChange(e)}
					/>
					<TextField
						id="phone"
						label="phone"
						autoComplete="none"
						value={tempUser.phone}
						onChange={e => handleChange(e)}
					/>
					<TextField
						id="street"
						label="street"
						autoComplete="none"
						value={tempUser.street}
						onChange={e => handleChange(e)}
					/>
					<TextField
						id="suite"
						label="suite"
						autoComplete="none"
						value={tempUser.suite}
						onChange={e => handleChange(e)}
					/>
					<TextField
						id="zipcode"
						label="zip code"
						autoComplete="none"
						value={tempUser.zipcode}
						onChange={e => handleChange(e)}
					/>
					<TextField id="city" label="city" value={tempUser.city} onChange={e => handleChange(e)} />
					<Button variant="contained" color="primary" type="submit" className="btn">
						Update user
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

export default EditUserForm
