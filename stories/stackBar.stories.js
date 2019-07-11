import React from 'react'

import {storiesOf} from '@storybook/react'

import {StackBar} from '../src/MyComponents/Graph'
import {withKnobs, number} from '@storybook/addon-knobs'

const stories = storiesOf('Stack Bar', module).addDecorator(story => (
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

stories.add('normal', () => (
	<div>
		<StackBar data={Datas} />
	</div>
))
