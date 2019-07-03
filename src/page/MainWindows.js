import React from 'react'

import { StateContext } from '../StateProvider/StateProvider'
import { LOGOUT } from '../StateProvider/actions_constant'

import Login from '../components/Login'

const MainWindows = (props) => {
    let { state, dispatch } = React.useContext(StateContext)
    return (
        <div>
            {
                state.isLogin ? <button onClick={
                    e => dispatch({
                        type: LOGOUT
                    })
                }>Log out</button> : <Login />
            }
        </div>
    )
}
export default MainWindows