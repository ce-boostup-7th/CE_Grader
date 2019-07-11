import React from 'react'

import {StateContext} from '../StateProvider/StateProvider'
import {Switch, Redirect, Route, withRouter} from 'react-router-dom'

import Login from '../components/Login'
import {LOGIN, LOGOUT} from '../StateProvider/actions_constant'
import SideNav from '../components/SideNav'
import QuizPage from './QuizPage'
import Dashboard from '../components/Dashboard'
import LeaderBoard from '../components/LeaderBoard'
import ProblemPage from './ProblemPage'
import WorkingPage from './WorkingPage'

import {SideNavData, UserOnline, DummyPic} from '../DummyData'
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

const routes = ['/leaderboard', '/dashboard', '/problem', '/quiz']

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
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'row'
			}}>
			{routes.includes(location.pathname) && (
				<SideNav data={SideNavData} userOnline={UserOnline} img={DummyPic} />
			)}
			<Switch>
				<Route exact path="/" component={() => <Redirect to="/dashboard" />} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/leaderboard" component={LeaderBoard} />
				<Route path="/problem" component={ProblemPage} />
				<Route path="/quiz" component={QuizPage} />
				<Route path="/workbench" component={WorkingPage} />
				<Route component={NoRoute} />
			</Switch>
		</div>
	)
}
export default MainWindows
