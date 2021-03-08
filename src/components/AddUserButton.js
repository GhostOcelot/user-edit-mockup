import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

const AddUserButton = () => {
	return (
		<Link to="/add-user">
			<Button variant="contained" color="primary" className="btn">
				Add user
			</Button>
		</Link>
	)
}

export default AddUserButton
