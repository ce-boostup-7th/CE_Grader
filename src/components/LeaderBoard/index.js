import React from 'react'

import {
	Window,
	WindowContent,
	WindowHeader,
	Tab,
	Tabs,
	Button,
	themes
} from 'react95'
import {ThemeProvider} from 'styled-components'

import {StateContext} from '../../StateProvider/StateProvider'
import {CLOSE_WIN} from '../../StateProvider/actions_constant'
// Start  Code Here
export default () => {
	let {state, dispatch} = React.useContext(StateContext)
	return (
		<ThemeProvider theme={themes.default}>
			<Window style={{display: 'inline', width: '100%', height: '100vh'}}>
				<WindowHeader
					style={{display: 'flex', justifyContent: 'space-between'}}>
					<span>Header .exe</span>
					<Button
						style={{
							marginRight: '-6px',
							marginTop: '3px'
						}}
						size={'sm'}
						square
						onClick={() => {
							dispatch({type: CLOSE_WIN})
						}}>
						<span style={{fontWeight: ' bold', transform: 'translateY(-1px)'}}>
							x
						</span>
					</Button>
				</WindowHeader>
				<WindowContent>{' This is content Zone'}</WindowContent>
			</Window>
		</ThemeProvider>
	)
}
