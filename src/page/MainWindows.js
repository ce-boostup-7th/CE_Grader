import React from 'react'

import {StateContext} from '../StateProvider/StateProvider'
import {LEADER_BOARD, DASH_BOARD} from '../StateProvider/actions_constant'
import Login from '../components/Login'
import SideNav from '../components/SideNav'
import LeaderBoard from '../components/LeaderBoard'
const MainWindows = props => {
	let {state, dispatch} = React.useContext(StateContext)
	state.isLogin = true
	state.pages = LEADER_BOARD
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
					{(() => {
						switch (state.pages) {
							case LEADER_BOARD:
								return <LeaderBoard />

							//wait for dashboard
							default:
								return null
						}
					})()}
				</div>
			) : (
				<Login />
			)}
		</div>
	)
}
export default MainWindows
