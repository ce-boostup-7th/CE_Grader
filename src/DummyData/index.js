import DummyPic from '../resource/img/IMG_6413.jpg'
const SideNavData = {
	userName: 'Unknown',
	rank: 1,
	passCount: 10,
	quizCount: 2
}

const UserOnline = 10

const Attemps = [
	{name: 'velit', level: 2, topic: 'aliquet.'},
	{name: 'ridiculus', level: 2, topic: 'lobortis'},
	{name: 'ultrices', level: 2, topic: 'quis'},
	{name: 'a', level: 2, topic: 'ultrices.'},
	{name: 'libero', level: 2, topic: 'auctor'},
	{name: 'convallis', level: 3, topic: 'luctus'},
	{name: 'suscipit,', level: 2, topic: 'non,'},
	{name: 'vulputate,', level: 1, topic: 'tincidunt'},
	{name: 'pede.', level: 3, topic: 'odio.'},
	{name: 'hendrerit.', level: 1, topic: 'Cras'},
	{name: 'tristique', level: 3, topic: 'ipsum'},
	{name: 'tincidunt,', level: 1, topic: 'Cum'},
	{name: 'urna.', level: 3, topic: 'Donec'},
	{name: 'et', level: 2, topic: 'in'},
	{name: 'tellus.', level: 2, topic: 'tristique'},
	{name: 'Ut', level: 2, topic: 'Morbi'},
	{name: 'quam', level: 3, topic: 'est'},
	{name: 'dolor.', level: 2, topic: 'Phasellus'},
	{name: 'Sed', level: 2, topic: 'pellentesque.'},
	{name: 'non', level: 1, topic: 'mattis'},
	{name: 'Aenean', level: 2, topic: 'eleifend'}
]

const StackDatas = [
	{
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [20, 14, 23, 34, 24],
		name: 'Sent',
		type: 'bar'
	},

	{
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [12, 10, 20, 30, 20],
		name: 'Correct',
		type: 'bar'
	},
	{
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [8, 4, 3, 4, 4],
		name: 'inCorrect',
		type: 'bar'
	}
]

const Heatmaps = [
	[
		1,
		9,
		21,
		21,
		0,
		14,
		15,
		5,
		16,
		27,
		28,
		29,
		23,
		12,
		30,
		25,
		6,
		13,
		0,
		10,
		6,
		26,
		6,
		2
	],
	[
		26,
		27,
		14,
		16,
		3,
		7,
		11,
		7,
		12,
		16,
		8,
		23,
		18,
		1,
		9,
		16,
		4,
		6,
		28,
		13,
		16,
		16,
		1,
		22
	],
	[
		9,
		8,
		10,
		22,
		14,
		21,
		6,
		22,
		2,
		10,
		8,
		25,
		11,
		16,
		19,
		12,
		10,
		3,
		23,
		21,
		6,
		15,
		6,
		11
	],
	[
		20,
		18,
		15,
		15,
		9,
		4,
		30,
		14,
		17,
		16,
		2,
		17,
		19,
		28,
		14,
		17,
		3,
		13,
		20,
		27,
		30,
		16,
		5,
		2
	]
]

const GaugeCompleteData = {
	value: '50',
	startColor: '#6495ed', // cornflowerblue
	endColor: '#dc143c'
}

const ScoreData = [65, 14, 9, 3, 2, 12, 7, 2, 3, 6, 3, 2, 1, 20, 11, 5, 4, 13]
export {
	SideNavData,
	UserOnline,
	DummyPic,
	Attemps,
	Heatmaps,
	StackDatas,
	GaugeCompleteData,
	ScoreData
}
