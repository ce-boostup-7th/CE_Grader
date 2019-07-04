import React from 'react'

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {
	themes,
	WindowContent,
	Window,
	WindowHeader,
	Tab,
	Tabs,
	TabBody,
	reset
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
				<Window style={{width: 350}}>
					<WindowHeader>👗 store.exe</WindowHeader>
					<WindowContent>
						<Tabs
							value={tabs}
							onChange={value => {
								setTabs(value)
							}}>
							<Tab value={0}>Shoes</Tab>
							<Tab value={1}>Accesories</Tab>
						</Tabs>
						<div style={{height: '100vh'}}>
							{tabs === 0 && <TabBody>This is nav Tab</TabBody>}
						</div>
					</WindowContent>
				</Window>
			</ThemeProvider>
		</div>
	)
}
