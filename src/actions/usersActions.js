export const deleteUser = user => {
	return {
		type: "DELETE_USER",
		userId: user.id,
	}
}

export const toggleImportant = user => {
	return {
		type: "TOGGLE_IMPORTANT",
		user: user,
	}
}

export const addUser = newUser => {
	return {
		type: "ADD_USER",
		newUser: newUser,
	}
}

export const editUser = user => {
	return {
		type: "EDIT_USER",
		user: user,
	}
}
