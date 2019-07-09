import React from 'react'

import reducer from './reducer'

export const initialState = {
	isLogin: false,
	text: '',
	data: [
		{
			name: 'ex.1',
			order: '0001',
			status: 'PASS',
			level: 1,
			topic: 'ex1',
			pass: '123'
		}
	]
}
export const StateContext = React.createContext(initialState)

export default props => {
	let [state, dispatch] = React.useReducer(reducer, initialState)
	return (
		<StateContext.Provider value={{state, dispatch}}>
			{props.children}
		</StateContext.Provider>
	)
}
