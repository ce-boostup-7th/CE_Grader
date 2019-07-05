import React, {useState, useContext} from 'react'

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {themes, WindowContent, Window, reset, Divider, Button} from 'react95'
import testImg from '../../resource/img/IMG_6413.jpg'

import {StateContext} from '../../StateProvider/StateProvider'
import {LOGOUT} from '../../StateProvider/actions_constant'

const ResetStyles = createGlobalStyle`
  ${reset}
`

export default () => {
	let {state, dispatch} = useContext(StateContext)
	let [name, setName] = useState('Unknown')
	let [tabs, setTabs] = useState(0)
	const [rank, setRank] = useState(0)
	const [pass, setPass] = useState(0)
	const [quiz, setQuiz] = useState(0)

	const handalLogOut = e => {
		dispatch({type: LOGOUT})
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
			<ResetStyles />
			<button onClick={handalLogOut}>Log Out</button>
			<ThemeProvider theme={themes.default}>
				<Window style={{width: '350px', height: '100vh'}}>
					<WindowContent style={{display: 'flex', justifyContent: 'center'}}>
						{name}
					</WindowContent>
					<Divider />
					<WindowContent
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}>
						<div
							style={{
								width: '100px',
								height: '100px',
								position: 'relative',
								overflow: 'hidden',
								borderRadius: '50%'
							}}>
							<img
								src={testImg}
								alt="test img "
								style={{
									display: 'inline',
									margin: '0 auto',
									marginLeft: '-25%',
									height: '100%',
									width: 'auto'
								}}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignContent: 'center',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									paddingBottom: '15px'
								}}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginRight: '40px'
									}}>
									<span>{rank}</span>
									<span>rank</span>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginRight: '40px'
									}}>
									<span>{pass}</span>
									<span>Pass</span>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginRight: '10px'
									}}>
									<span>{quiz}</span>
									<span>quiz</span>
								</div>
							</div>
							<Button>user online </Button>
						</div>
					</WindowContent>
					<Divider />
					<WindowContent>This is Tree bar</WindowContent>
				</Window>
			</ThemeProvider>
		</div>
	)
}
