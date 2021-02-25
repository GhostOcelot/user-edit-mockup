const initialState = [
	{
		id: 1,
		name: "Eddy Gordo",
		email: "eddy.gordo@gmail.com",
		street: "Ipanema 16",
		suite: "556",
		city: "Recife",
		zipcode: "345-34",
		phone: "515 445 44 87",
	},
	{
		id: 2,
		name: "Paul Phoenix",
		email: "therealphoenix@yahoo.com",
		street: "Saint Jones 295",
		suite: "89",
		city: "San Diego",
		zipcode: "465-71",
		phone: "587 345 56 65",
	},
	{
		id: 3,
		name: "Ling Xiaoyu",
		email: "lingling91@gmail.com",
		street: "Wuxia 23",
		suite: "8",
		city: "Chongqing",
		zipcode: "76-4582",
		phone: "03 465 777 9354 45",
	},
	{
		id: 4,
		name: "Sergei Dragunov",
		email: "sergei.dragunov@yahoo.com",
		street: "Patriarszye Prudy 375",
		suite: "Apt. 80",
		city: "Moscow",
		zipcode: "8654-55",
		phone: "13 4648 345 222 23",
	},
	{
		id: 5,
		name: "Kazuya Mishima",
		email: "thekingofironfist@gmail.com",
		street: "Ginza 1",
		suite: "90",
		city: "Tokyo",
		zipcode: "3332-944",
		phone: "90 4675 7948 33 29",
	},
	{
		id: 6,
		name: "Marshall Law",
		email: "bruceleewannabe@gmail.com",
		street: "Palm Avenue",
		suite: "16",
		city: "Santa Barbara",
		zipcode: "37-5678",
		phone: "01 345 45 4567 456",
	},
]

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "DELETE_USER":
			return [
				...state.filter(item => {
					return item.id !== action.userId
				}),
			]

		case "TOGGLE_IMPORTANT":
			return [
				...state.map(item => {
					if (action.user.id === item.id) {
						return !item.important ? { ...item, important: true } : { ...item, important: false }
					} else return item
				}),
			]

		case "ADD_USER":
			return [action.newUser, ...state]

		case "EDIT_USER":
			let id
			const filteredUsers = state.filter(item => {
				if (item.id === action.user.id) id = state.indexOf(item)
				return item.id !== action.user.id
			})

			const newUsers = [
				...filteredUsers.slice(0, id),
				action.user,
				...filteredUsers.slice(id, filteredUsers.length),
			]
			return [...newUsers]

		default:
			return state
	}
}
