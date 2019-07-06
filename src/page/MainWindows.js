import React from 'react'

import {StateContext} from '../StateProvider/StateProvider'

import Login from '../components/Login'
import SideNav from '../components/SideNav'
import LeaderBoard from '../components/LeaderBoard'
const MainWindows = props => {
	let { state, dispatch } = React.useContext(StateContext)
	state.isLogin=true
	return (
		<div>
			{state.isLogin ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'row'
					}}>
					{' '}
					<SideNav />
					<LeaderBoard></LeaderBoard>
				</div>
			) : (
				<Login />
			)}
		</div>
	)
}
export default MainWindows
