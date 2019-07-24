import React from 'react'
import { withRouter } from 'react-router-dom'
import Tree from '@react95/core/Tree'

const Treefiles = ({ history, match, location }) => {
	const { icons } = Tree
	let [dataN, setDataN] = React.useState([
		{
			id: 0,
			label: 'CE BoostUp #7',
			onClick:()=>{},
			children: [
				{
					id: 0,
					label: 'LeaderBoard.exe',
					iconName: icons.FILE_EXECUTABLE,
					onClick: () => {
						history.push('/leaderboard')
					}
				},
				{
					id: 1,
					label: 'DashBoard.exe',
					iconName: icons.FILE_EXECUTABLE,
					onClick: () => {
						history.push('/dashboard')
					}
				},
				{
					id: 2,
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