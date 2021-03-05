import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useFirestore } from "react-redux-firebase"

const UserList = () => {
	const firestore = useFirestore()
	const history = useHistory()
	const allUsers = useSelector(state => state.firestore.ordered.allUsers)

	return (
		<ul className="user-list">
			{allUsers ? (
				allUsers.map(item => {
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
								<button onClick={() => firestore.collection("allUsers").doc(item.id).delete()}>
									Delete
								</button>
								<button
									onClick={() =>
										firestore
											.collection("allUsers")
											.doc(item.id)
											.update({ important: !item.important })
									}
								>
									Important
								</button>
							</div>
						</li>
					)
				})
			) : (
				<h2>Loading...</h2>
			)}
		</ul>
	)
}

export default UserList
