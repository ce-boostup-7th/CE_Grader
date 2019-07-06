import Tree from '@react95/core/Tree'

const {icons} = Tree
const data = [
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
					console.log('nice')
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
					console.log('nice')
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
]

export default data
