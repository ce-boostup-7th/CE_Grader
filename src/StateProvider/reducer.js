import {
	TEST_ACTION,
	LOGIN,
	LOGOUT,
	DASH_BOARD,
	LEADER_BOARD,
	CLOSE_WIN,
	FETCH_PROBLEM,
	FETCH_STATISTIC,
	FETCH_SUBMISSION,
	FETCH_USERS
} from './actions_constant'
import { initialState } from './StateProvider'
import LeaderBoard from '../components/LeaderBoard'

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST_ACTION:
			return {
				...state,
				text: action.payload
			}
		case LOGIN:
			return {
				...state,
				isLogin: true
			}
		case LOGOUT:
			return {
				...state,
				isLogin: false
			}
		case FETCH_PROBLEM:
			return {
				...state,
				problems: action.payload
			}
		case FETCH_STATISTIC:
			return {
				...state,
				statistics: action.payload
			}
		case FETCH_SUBMISSION:
			return {
				...state,
				submissions: action.payload
			}
		case FETCH_USERS:
			return {
				...state,
				users: action.payload
			}
		default:
			return state
	}
}
export default reducer
