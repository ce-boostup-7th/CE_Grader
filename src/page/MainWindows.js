import React from 'react'

import {StateContext} from '../StateProvider/StateProvider'
import {Switch, Redirect, Route} from 'react-router-dom'

import Login from '../components/Login'
import SideNav from '../components/SideNav'
import Problem from '../page/ProblemPage'
import {LOGIN, LOGOUT} from '../StateProvider/actions_constant'

const NoRoute = () => {
	let [time, setTime] = React.useState(0)
	React.useEffect(() => {
		let timer = setInterval(() => setTime(time + 1), 1000)
		return () => clearInterval(timer)
	})
	if (time >= 3) {
		return <Redirect to="/" />
	}
	return <div>Page Not Found Redirect in {3 - time} sec</div>
}

const MainWindows = props => {
	let {state, dispatch} = React.useContext(StateContext)
	React.useEffect(() => {
		dispatch({
			type: JSON.parse(localStorage.getItem('Login')) ? LOGIN : LOGOUT
		})
		console.log(state.isLogin.toString())
	}, [state.isLogin])
	return (
		<div
			stlyed={{
				height: '100vh'
			}}>
			<Switch>
				<Route exact path="/" />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" />
				<Route path="/leaderboard" />
				<Route path="/problem" component={Problem} />
				<Route path="/quize>" />
				<Route component={NoRoute} />
			</Switch>
		</div>
	)
}
export default MainWindows
