import React from 'react'

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {
	themes,
	WindowContent,
	Window,
	WindowHeader,
	reset,
	Divider
} from 'react95'

import {StateContext} from '../../StateProvider/StateProvider'
import {LOGOUT} from '../../StateProvider/actions_constant'

const ResetStyles = createGlobalStyle`
  ${reset}
`

export default () => {
	let {state, dispatch} = React.useContext(StateContext)
	let [tabs, setTabs] = React.useState(0)
	const handalLogOut = e => {
		dispatch({type: LOGOUT})
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
			<ResetStyles />
			<button onClick={handalLogOut}>Log Out</button>
			<ThemeProvider theme={themes.default}>
				<Window style={{width: 350, height: '100vh'}}>
					<WindowHeader>👗 Side_Nav.exe</WindowHeader>
					<WindowContent>This is profile</WindowContent>
					<Divider />
					<WindowContent>This is Tree bar</WindowContent>
				</Window>
			</ThemeProvider>
		</div>
	)
}
