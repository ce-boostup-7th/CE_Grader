import React, {useState, useContext} from 'react'

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {themes, WindowContent, Window, reset, Divider, Button} from 'react95'
import testImg from '../../resource/img/IMG_6413.jpg'
import {StateContext} from '../../StateProvider/StateProvider'
import {LOGOUT} from '../../StateProvider/actions_constant'
import TreeFiles from '../TreeFiles'
import Icon from '@react95/core/Icon'
const ResetStyles = createGlobalStyle`
  ${reset}
`
const Circle = styled.span`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background: green;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-box-shadow: 1.5px 1.5px 0px 0px #000000;
	box-shadow: 1.5px 1.5px 0px 0px #000000;
`

export default (props) => {
	let {state, dispatch} = useContext(StateContext)
	let [name, setName] = useState('Unknown')
	let [tabs, setTabs] = useState(0)
	const [rank, setRank] = useState(0)
	const [pass, setPass] = useState(0)
	const [quiz, setQuiz] = useState(0)
	const [users, setUsers] = useState(1)

	const handalLogOut = e => {
		dispatch({type: LOGOUT})
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
			<ResetStyles />

			<ThemeProvider theme={themes.default}>
				<Window style={{width: '350px', height: '100vh'}}>
					<WindowContent
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'center'
						}}>
						<div style={{marginLeft: '45%'}}>{name} </div>
						<Button style={{marginLeft: '25%'}} onClick={handalLogOut} square>
							<Icon name={'reader_eject'} />
						</Button>
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
								borderRadius: '50%',
								WebkitBoxShadow: '1.5px 1.5px 0px 0px #000000',
								boxShadow: '1.5px 1.5px 0px 0px #000000'
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
							<Button
								style={{display: 'flex', justifyContent: 'space-between'}}>
								<Circle />
								<span style={{paddingLeft: '5px'}}>
									{users} user{users > 1 ? 's' : null} online
								</span>
							</Button>
						</div>
					</WindowContent>
					<Divider />
					<WindowContent>
						<TreeFiles />
					</WindowContent>
				</Window>
			</ThemeProvider>
		</div>
	)
}
