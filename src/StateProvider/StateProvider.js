import React from 'react'

import reducer from './reducer'

export const initialState = {
    text:''
}
export const StateContext = React.createContext(initialState)

export default (props)=>{
    let [state,dispatch] = React.useReducer(reducer,initialState)
    return (
        <StateContext.Provider value={{state,dispatch}}>
            {
                props.children
            }
        </StateContext.Provider>
    )
}