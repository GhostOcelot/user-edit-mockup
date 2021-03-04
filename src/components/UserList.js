import { deleteUser, toggleImportant } from "../actions/usersActions"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const UserList = () => {
	const history = useHistory()
	const users = useSelector(state => state.users.allUsers)
	const dispatch = useDispatch()

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
									history.push(`edit-user/${item.id}`)
								}}
							>
								Edit
							</button>
							<button onClick={() => dispatch(deleteUser(item))}>Delete</button>
							<button onClick={() => dispatch(toggleImportant(item))}>Important</button>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default UserList
