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
				console.log('nice')
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
				console.log('nice')
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
				console.log('nice')
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
		},
		{
			id: 3,
			label: 'Quizs',
			onClick: () => {
				console.log('nice')
			},
			children: [
				{
					id: 1,
					label: 'Quizs.exe',
					iconName: icons.FILE_EXECUTABLE,
					onClick: () => {
						history.push('/quiz')
					}
				}
			]
		}
	])

	return <Tree data={dataN} />
}

export default withRouter(Treefiles)