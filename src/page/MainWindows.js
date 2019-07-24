import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'

import Login from '../components/Login'
import SideNav from '../components/SideNav'
import DashboardPage from '../page/DashboardPage'
import LeaderBoardPage from '../page/LeaderPage'
import ProblemPage from './ProblemPage'
import WorkingPage from './WorkingPage'


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
	let [isLogin, setLogin] = React.useState(false)
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'row'
			}}
		>

			{
				HasNavSideroutes.includes(props.location.pathname) && <SideNav  onLogout={e=>{setLogin(false)}}/>
			}
			<Switch>
				<Route exact path="/" component={() => isLogin ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} />
				<Route path="/login" component={() => <Login onSuccess={(value) => { setLogin(value) }} />} />
				<Route path="/dashboard" component={() => isLogin ? <DashboardPage /> : <Redirect to="/login" />} />
				<Route path="/leaderboard" component={() => isLogin ? <LeaderBoardPage /> : <Redirect to="/login" />} />
				<Route path="/problem" component={() => isLogin ? <ProblemPage /> : <Redirect to="/login" />} />
				<Route exact path="/workbench/:type/:id" component={() => isLogin ? <WorkingPage /> : <Redirect to="/login" />} />
				<Route path="/workbench/:type/:id/latest" component={() => isLogin ? <WorkingPage latest /> : <Redirect to="/login" />} />
				<Route component={NoRoute} />
			</Switch>
		</div>
	)
}
export default withRouter(MainWindows)
