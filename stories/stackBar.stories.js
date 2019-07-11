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

stories.add('normal', () => (
	<div>
		<StackBar />
	</div>
))
