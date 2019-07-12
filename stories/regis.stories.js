import React from 'react'

import {storiesOf} from '@storybook/react'

import RegisBox from '../src/components/RegisBox'
import {withKnobs, number} from '@storybook/addon-knobs'

const stories = storiesOf('Regis', module).addDecorator(story => (
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
	<div
		style={{
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'flex-start'
		}}>
		<RegisBox />
		<div className="blank" style={{flex: '8 auto'}} />
	</div>
))
