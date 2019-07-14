import React, { useEffect } from 'react'
import { } from 'react-router-dom'

import { StateContext } from '../StateProvider/StateProvider'
import { LOGIN, LOGOUT } from '../StateProvider/actions_constant'

const useLoginCheck = (props) => {
    let { state, dispatch } = React.useContext(StateContext)
    React.useEffect(() => {
        dispatch({
            type: JSON.parse(localStorage.getItem('Login')) ? LOGIN : LOGOUT
        })
        //init state from cookie
        console.log(state.isLogin.toString())
    }, [state.isLogin])
    return state.isLogin
}

export default useLoginCheck
