import { TEST_ACTION, LOGIN, LOGOUT } from './actions_constant'
import { initialState } from './StateProvider'

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST_ACTION:
			return {
				...state,
				text: action.payload
			}
		case LOGIN:
			localStorage.setItem('Login', "true")
			return {
				...state,
				isLogin: true
			}
		case LOGOUT:
			localStorage.setItem('Login', "false")
			return {
				...state,
				isLogin: false
			}
		//add action from usage
		default:
			console.warn('invalid action')
			return state
	}
}
export default reducer
