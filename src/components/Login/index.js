import React from 'react'
import qs from 'querystring'
import styled, { ThemeProvider } from 'styled-components'
import { themes, WindowContent } from 'react95'
import {
	Div,
	ResetStyles,
	WindowHeaderStyled,
	WindowStyled,
	ButtonStyled,
	Spanstyled
} from './LoginStyle'
import Keys from '../../resource/icons/keys.png'

import { withRouter } from 'react-router-dom'
import { StateContext } from '../../StateProvider/StateProvider';
import { FETCH_PROBLEM, FETCH_SUBMISSION, FETCH_STATISTIC, FETCH_USERS } from '../../StateProvider/actions_constant';
import Modal from './ModalProcess';

const WindowContentStyled = styled(WindowContent)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Form = styled.form`
	display: inline-flex;
	flex-direction: column;
`

const Login = props => {
	const { dispatch } = React.useContext(StateContext)
	const [form, setForm] = React.useState({ username: '', password: '' })
	const [inProcess, setProcess] = React.useState(false)
	const [progress,setProgress] = React.useState(0)
	const handleLoggin = () => {
		if (form.username.length >= 4 && form.password.length >= 4) {
			setProcess(true)
			setProgress(5)
			fetch('//ce.19991999.xyz/api/login', {
				method: 'POST',
				credentials: "include",
				headers: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				body: qs.stringify({
					username: form.username.trim(),
					password: form.password
				}),
			})
				.then(res => res.status)
				.then(status => {
					if (status === 404) {
						setProcess(false)
						if (confirm('user not found,create new user?')) {
							fetch('//ce.19991999.xyz/api/users', {
								method: 'POST',
								headers: {
									'content-type': 'application/x-www-form-urlencoded'
								},
								body: qs.stringify({
									username: form.username.trim(),
									password: form.password
								}),
								mode: 'no-cors'
							})
								.then(res => res.text())
								.then(text => {
									alert('success! login again.')
								})
						}
					} else if (status === 200) {
						Promise.all([
							fetch('//ce.19991999.xyz/api/users/problems', {
								credentials: 'include'
							})
								.then(res => res.json())
								.then(data => {
									dispatch({
										type: FETCH_PROBLEM,
										payload: data
									})
								}).then(()=>{setProgress(progress+30)}),
							fetch('//ce.19991999.xyz/api/users/submissions', {
								credentials: 'include'
							})
								.then(res => res.json())
								.then(data => {
									dispatch({
										type: FETCH_SUBMISSION,
										payload: data
									})
								}),
							fetch('//ce.19991999.xyz/api/users/stats', {
								credentials: 'include'
							})
								.then(res => res.json())
								.then(data => {
									dispatch({
										type: FETCH_STATISTIC,
										payload: data
									})
								}).then(()=>{setProgress(progress+30)}),
							fetch('//ce.19991999.xyz/api/users', {
								credentials: 'include'
							})
								.then(res => res.json())
								.then(data => {
									dispatch({
										type: FETCH_USERS,
										payload: data
									})
								})]).then(() => {
									setProgress(100)
									setProcess(false)
									props.onSuccess(true)
									props.history.push('/dashboard')
								})
					} else if (status === 401) {
						setProcess(false);
						alert('wrong password')
					}
				})
		}
		else {
			alert('username and password must have lenght 4 or more')
		}
	}
	React.useEffect(()=>{
		if(document.cookie.indexOf('JWT_Token')===0){
			Promise.all([
				fetch('//ce.19991999.xyz/api/users/problems', {
					credentials: 'include'
				})
					.then(res => res.json())
					.then(data => {
						dispatch({
							type: FETCH_PROBLEM,
							payload: data
						})
					}).then(()=>{setProgress(progress+30)}),
				fetch('//ce.19991999.xyz/api/users/submissions', {
					credentials: 'include'
				})
					.then(res => res.json())
					.then(data => {
						dispatch({
							type: FETCH_SUBMISSION,
							payload: data
						})
					}),
				fetch('//ce.19991999.xyz/api/users/stats', {
					credentials: 'include'
				})
					.then(res => res.json())
					.then(data => {
						dispatch({
							type: FETCH_STATISTIC,
							payload: data
						})
					}).then(()=>{setProgress(progress+30)}),
				fetch('//ce.19991999.xyz/api/users', {
					credentials: 'include'
				})
					.then(res => res.json())
					.then(data => {
						dispatch({
							type: FETCH_USERS,
							payload: data
						})
					})]).then(()=>{
						props.onSuccess(true)
			            props.history.push('/')
					})
		}
	},[])
	return (
		<Div className="App">
			{inProcess ? <Modal progress={progress}/> : null }
			<ResetStyles />
			<ThemeProvider theme={themes.default}>
				<WindowStyled>
					<WindowHeaderStyled>
						<span style={{ fontFamily: 'Press Start 2P, serif' }}>
							CE Boost Up by Veronica.exe
						</span>
						<ButtonStyled size={'sm'} square>
							<Spanstyled>x</Spanstyled>
						</ButtonStyled>
					</WindowHeaderStyled>
					<WindowContentStyled>
						<div>
							<img src={Keys} alt="key- icons" />
						</div>
						<Form>
							<Spanstyled style={{ marginBottom: '3px' }}>Login name </Spanstyled>
							<input
								type="text"
								placeholder="USER_NAME"
								style={{ marginBottom: '8px' }}
								value={form.username}
								onChange={e => { setForm({ ...form, username: e.target.value.trim() }) }}
							/>
							<Spanstyled style={{ marginBottom: '3px' }}>Password</Spanstyled>
							<input
								value={form.password}
								onChange={e => { setForm({ ...form, password: e.target.value }) }}
								type='password'
								placeholder="USER_PASSWORD"
								onKeyDown={e => {
									if (e.keyCode === 13) {
										handleLoggin()
									}
								}}
							/>
						</Form>
						<Form>
							<ButtonStyled
								onClick={() => handleLoggin()}
								style={{ marginBottom: '8px' }}>
								<Spanstyled>submit</Spanstyled>
							</ButtonStyled>
							<ButtonStyled>
								<Spanstyled>cancel</Spanstyled>
							</ButtonStyled>
						</Form>
					</WindowContentStyled>
				</WindowStyled>
			</ThemeProvider>
		</Div>
	)
}
export default withRouter(Login)