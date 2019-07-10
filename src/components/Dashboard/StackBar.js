import React from 'react'
import Plot from 'react-plotly.js'

import styled from 'styled-components'
import {red} from 'ansi-colors'
const Stackbar = styled(Plot)`
	width: 100%;
	height: 100%;
`
const StackBar = () => {
	const data1 = {
		x: ['giraffes', 'orangutans', 'monkeys'],
		y: [20, 14, 23],
		name: 'SF Zoo',
		type: 'bar'
	}

	const data2 = {
		x: ['giraffes', 'orangutans', 'monkeys'],
		y: [12, 18, 29],
		name: 'LA Zoo',
		type: 'bar'
	}
	return (
		<Stackbar
			data={[data1, data2]}
			layout={{barmode: 'group'}}
			config={{scrollZoom: true, responsive: true, autosizable: true}}
		/>
	)
}

export default StackBar
