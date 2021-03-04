import { initialState } from "../store/initialState"

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "DELETE_USER":
			return {
				...state,
				allUsers: state.allUsers.filter(item => {
					return item.id !== action.userId
				}),
			}

		case "TOGGLE_IMPORTANT":
			return {
				...state,
				allUsers: state.allUsers.map(item => {
					if (action.user.id === item.id) return { ...item, important: !item.important }
					else return item
				}),
			}

		case "ADD_USER":
			return { ...state, allUsers: [action.newUser, ...state.allUsers] }

		case "EDIT_USER":
			let id
			const filteredUsers = state.allUsers.filter(item => {
				if (item.id === action.user.id) id = state.allUsers.indexOf(item)
				return item.id !== action.user.id
			})
			const newUsers = [
				...filteredUsers.slice(0, id),
				action.user,
				...filteredUsers.slice(id, filteredUsers.length),
			]
			return { ...state, allUsers: [...newUsers] }

		default:
			return state
	}
}
