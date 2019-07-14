import React from 'react'

import { Switch, Redirect, Route, withRouter } from 'react-router-dom'

import Login from '../components/Login'
import SideNav from '../components/SideNav';
import QuizPage from './QuizPage';
import Dashboard from '../components/Dashboard';
import LeaderBoard from '../components/LeaderBoard';
import ProblemPage from './ProblemPage';
import WorkingPage from './WorkingPage';
import useLoginCheck from '../hooks/LoginHooks';

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
	let isLogin = useLoginCheck()
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
				<Route exact path="/" component={() => isLogin ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/leaderboard" component={LeaderBoard} />
				<Route path="/problem" component={ProblemPage} />
				<Route path="/quiz" component={QuizPage} />
				<Route path="/workbench/:type/:id" component={WorkingPage} />
				<Route component={NoRoute} />
			</Switch>
		</div>
	)
}
export default withRouter(MainWindows)
