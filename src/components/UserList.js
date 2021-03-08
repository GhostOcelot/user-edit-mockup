import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useFirestore } from "react-redux-firebase"
import Button from "@material-ui/core/Button"

const UserList = () => {
	const firestore = useFirestore()
	const history = useHistory()
	const allUsers = useSelector(state => state.firestore.ordered.allUsers)

	return (
		<ul className="user-list">
			{allUsers ? (
				[...allUsers]
					.sort((a, b) => b.timeCreated.seconds - a.timeCreated.seconds)
					.map(item => {
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
									<Button
										variant="contained"
										color="primary"
										className="btn"
										onClick={() => {
											history.push(`edit-user/${item.id}`)
										}}
									>
										Edit
									</Button>
									<Button
										variant="contained"
										color="primary"
										className="btn"
										onClick={() => firestore.collection("allUsers").doc(item.id).delete()}
									>
										Delete
									</Button>
									<Button
										variant="contained"
										color="primary"
										className="btn"
										onClick={() =>
											firestore
												.collection("allUsers")
												.doc(item.id)
												.update({ important: !item.important })
										}
									>
										Important
									</Button>
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
