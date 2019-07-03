import { TEST_ACTION } from './actions_constant'
import { initialState } from './StateProvider'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                text: action.payload
            }
        //add action from usage
        default:
            console.warn("invalid action")
            return state;
    }
}
export default reducer 