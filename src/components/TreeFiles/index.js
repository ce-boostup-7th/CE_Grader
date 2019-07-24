import React from 'react'
import { withRouter } from 'react-router-dom'
import Tree from '@react95/core/Tree'

import { StateContext } from '../../StateProvider/StateProvider'
import { LEADER_BOARD, DASH_BOARD } from '../../StateProvider/actions_constant'

const Treefiles = ({ history, match, location }) => {
	let { state, dispatch } = React.useContext(StateContext)
	const { icons } = Tree
	let [dataN, setDataN] = React.useState([
		{
			id: 0,
			label: 'LeaderBoard',
			onClick: () => {
				history.push('/leaderboard')
			},
			children: [
				{
					id: 1,
					label: 'LeaderBoard.exe',
					iconName: icons.FILE_EXECUTABLE,
					onClick: () => {
						history.push('/leaderboard')
					}
				}
			]
		},
		{
			id: 1,
			label: 'DashBoard',
			onClick: () => {
				history.push('/dashboard')
			},
			children: [
				{
					id: 1,
					label: 'DashBoard.exe',
					iconName: icons.FILE_EXECUTABLE,
					onClick: () => {
						history.push('/dashboard')
					}
				}
			]
		},
		{
			id: 2,
			label: 'Problems',
			onClick: () => {
				history.push('/problem')
			},
			children: [
				{
					id: 1,
					label: 'Problems.exe',
					iconName: icons.FILE_EXECUTABLE,
					onClick: () => {
						history.push('/problem')
					}
				}
			]
		}
	])

	return <Tree data={dataN} />
}

export default withRouter(Treefiles)