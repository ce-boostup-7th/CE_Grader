import React from 'react'

import Tree from '@react95/core/Tree'

import {StateContext} from '../../StateProvider/StateProvider'
import { LEADER_BOARD, DASH_BOARD } from '../../StateProvider/actions_constant'


export default () => {
	let {state, dispatch} = React.useContext(StateContext)
	const {icons} = Tree
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
						dispatch({type: LEADER_BOARD})
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
						dispatch({type: DASH_BOARD})
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
						console.log('nice')
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
						console.log('nice')
					}
				}
			]
		}
	])

	return <Tree data={dataN} />
}
