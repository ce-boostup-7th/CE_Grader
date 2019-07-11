import React from 'react'

import {storiesOf} from '@storybook/react'

import {HeatMap} from '../src/MyComponents/Graph'
import {withKnobs, number} from '@storybook/addon-knobs'

const stories = storiesOf('Heat Map', module).addDecorator(story => (
	<div
		style={{
			padding: '5rem',

			background: 'teal'
		}}>
		{story()}
	</div>
))
stories.addDecorator(withKnobs)

const Datas = [
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

stories.add('normal', () => (
	<div>
		<HeatMap data={Datas} />
	</div>
))
