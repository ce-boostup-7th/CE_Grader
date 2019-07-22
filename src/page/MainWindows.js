import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'

import Login from '../components/Login'
import SideNav from '../components/SideNav'
import DashboardPage from '../page/DashboardPage'
import LeaderBoardPage from '../page/LeaderPage'
import ProblemPage from './ProblemPage'
import WorkingPage from './WorkingPage'
import { StateContext } from '../StateProvider/StateProvider';
import { FETCH_PROBLEM, FETCH_SUBMISSION, FETCH_STATISTIC, FETCH_USERS } from '../StateProvider/actions_constant';

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

const HasNavSideroutes = ['/leaderboard', '/dashboard', '/problem', '/quiz']

const MainWindows = props => {
	let { state, dispatch } = React.useContext(StateContext)
	React.useEffect(() => {
		if (state.isLogin) {
			fetch('http://161.246.34.96/api/problems')
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: FETCH_PROBLEM,
						payload: data
					})
				})
			fetch('http://161.246.34.96/api/users/submissions', {
				credentials: 'include'
			})
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: FETCH_SUBMISSION,
						payload: data
					})
				})
			fetch('http://161.246.34.96/api/users/stats', {
				credentials: 'include'
			})
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: FETCH_STATISTIC,
						payload: data
					})
				})
				fetch('http://161.246.34.96/api/users', {
					credentials: 'include'
				})
					.then(res => res.json())
					.then(data => {
						dispatch({
							type: FETCH_USERS,
							payload: data
						})
					})
		}
	}, [state.isLogin])
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'row'
			}}
		>

			{
				HasNavSideroutes.includes(props.location.pathname) && <SideNav />
			}
			<Switch>
				<Route exact path="/" component={() => state.isLogin ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={() => state.isLogin ? <DashboardPage /> : <Redirect to="/login" />} />
				<Route path="/leaderboard" component={() => state.isLogin ? <LeaderBoardPage /> : <Redirect to="/login" />} />
				<Route path="/problem" component={() => state.isLogin ? <ProblemPage /> : <Redirect to="/login" />} />
				<Route path="/workbench/:type/:id" component={() => state.isLogin ? <WorkingPage /> : <Redirect to="/login" />} />
				<Route component={NoRoute} />
			</Switch>
		</div>
	)
}
export default withRouter(MainWindows)
