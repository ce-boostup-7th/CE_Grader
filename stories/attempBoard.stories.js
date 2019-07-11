import React from 'react'

import {storiesOf} from '@storybook/react'

import AttempBoard from '../src/MyComponents/AttempBoard'
import {withKnobs, number} from '@storybook/addon-knobs'

const stories = storiesOf('Attemp Board', module).addDecorator(story => (
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
		<AttempBoard />
	</div>
))
