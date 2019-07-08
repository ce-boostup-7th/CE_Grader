import {
	TEST_ACTION,
	LOGIN,
	LOGOUT,
	DASH_BOARD,
	LEADER_BOARD,
	CLOSE_WIN
} from './actions_constant'
import {initialState} from './StateProvider'
import LeaderBoard from '../components/LeaderBoard'

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
		case DASH_BOARD: {
			return {
				...state,
				pages: DASH_BOARD
			}
		}
		case LEADER_BOARD: {
			return {
				...state,
				pages: LEADER_BOARD
			}
		}
		case CLOSE_WIN: { 
			return {
				...state,
				pages:''
			}
		}
		default:
			console.warn('invalid action')
			return state
	}
}
export default reducer
