import { deleteUser, toggleImportant, setTempUser } from "../actions/usersActions"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

const UserList = ({ users, deleteUser, toggleImportant, setTempUser }) => {
	const history = useHistory()
	return (
		<ul className="user-list">
			{users.map(item => {
				return (
					<li className={item.important ? "important user-card" : "user-card"} key={item.id}>
						<h3>{item.name}</h3>
						<p>{item.email}</p>
						<p>{item.phone}</p>
						<p>
							{item.street} {item.suite}
						</p>
						<p>
							{item.zipcode} {item.city}
						</p>
						<div className="buttons-container">
							<button
								onClick={() => {
									setTempUser(item)
									history.push("edit-user")
								}}
							>
								Edit
							</button>
							<button onClick={() => deleteUser(item)}>Delete</button>
							<button onClick={() => toggleImportant(item)}>Important</button>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

const mapStateToProps = state => {
	return { users: state.users.allUsers }
}

const mapDispatchToProps = dispatch => {
	return {
		deleteUser: user => dispatch(deleteUser(user)),
		toggleImportant: user => dispatch(toggleImportant(user)),
		setTempUser: tempUser => dispatch(setTempUser(tempUser)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
