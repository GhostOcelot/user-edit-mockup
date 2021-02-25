export const deleteUser = user => dispatch => {
	dispatch({
		type: "DELETE_USER",
		userId: user.id,
	})
}

export const toggleImportant = user => dispatch => {
	dispatch({
		type: "TOGGLE_IMPORTANT",
		user: user,
	})
}

export const addUser = newUser => dispatch => {
	dispatch({
		type: "ADD_USER",
		newUser: newUser,
	})
}

export const editUser = user => dispatch => {
	dispatch({
		type: "EDIT_USER",
		user: user,
	})
}
