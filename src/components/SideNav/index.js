import React from 'react'

import styled, {ThemeProvider} from 'styled-components'
import {themes, WindowContent} from 'react95'

import {StateContext} from '../../StateProvider/StateProvider'
import {LOGOUT} from '../../StateProvider/actions_constant'
export default () => {
	let {state, dispatch} = React.useContext(StateContext)

	const handalLogOut = e => {
		dispatch({type: LOGOUT})
	}

	return (
		<div>
			<button onClick={handalLogOut}>Log Out</button>
			in side dev
		</div>
	)
}
