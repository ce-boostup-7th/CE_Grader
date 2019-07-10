import React from 'react'
import Plot from 'react-plotly.js'

import styled from 'styled-components'
import {red} from 'ansi-colors'
const Stackbar = styled(Plot)`
	width: 100%;
	height: 100%;
`
const StackBar = (props) => {
	const sent = {
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [20, 14, 23, 34, 24],
		name: 'Sent',
		type: 'bar'
	}

	const correct = {
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [12, 10, 20, 30, 20],
		name: 'Correct',
		type: 'bar'
	}
	const inCorrect = {
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [8, 4, 3, 4, 4],
		name: 'inCorrect',
		type: 'bar'
	}

	return (
		<Stackbar
			data={props.data}
			layout={{barmode: 'group'}}
			config={{scrollZoom: true, responsive: true, autosizable: true}}
		/>
	)
}

export default StackBar
