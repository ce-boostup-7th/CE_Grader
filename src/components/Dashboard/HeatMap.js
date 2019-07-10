import React from 'react'
import Plot from 'react-plotly.js'

import styled from 'styled-components'
const Stackbar = styled(Plot)`
	width: 100%;
	height: 100%;
`
const HeatMap = () => {
	return (
		<Stackbar
			var
			data={[
				{
					z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
					x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
					y: ['Morning', 'Afternoon', 'Evening'],
					type: 'heatmap'
				}
			]}
			config={{responsive: true, scrollZoom: true, autosizable: true}}
		/>
	)
}

export default HeatMap
