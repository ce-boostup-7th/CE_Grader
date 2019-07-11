import React from 'react'
import Plot from 'react-plotly.js'

import styled from 'styled-components'

const GaugeScore = props => {
	return (
		<Plot
			data={[
				{
					type: 'sunburst',
					labels: [
						'Score',
						'Basic',
						'If,Else',
						'⭐',
						'⭐⭐',
						'⭐⭐⭐',
						'For Loop',
						'While Loop',
						'⭐',
						'⭐⭐',
						'⭐⭐⭐',
						'Azura'
					],
					parents: [
						'',
						'Score',
						'Score',
						'If,Else',
						'If,Else',
						'If,Else',
						'Score',
						'Score',
						'While Loop',
						'While Loop',
						'While Loop',
						'Score'
					],
					values: [65, 14, 12, 7, 2, 3, 6, 20, 11, 5, 4, 4],
					leaf: {opacity: 0.5},
					marker: {line: {width: 2}},
					branchvalues: 'total'
				}
			]}
			layout={{
				margin: {l: 0, r: 0, b: 0, t: 0}
			}}
			config={{
				scrollZoom: true,
				responsive: true,
				autosizable: true,
				showSendToCloud: true
			}}
		/>
	)
}

export default GaugeScore
