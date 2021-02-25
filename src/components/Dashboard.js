import UserList from "./UserList"
import AddUserButton from "./AddUserButton"

const Dashboard = ({ setTempUser }) => {
	return (
		<>
			<AddUserButton />
			<UserList setTempUser={setTempUser} />
		</>
	)
}

export default Dashboard
