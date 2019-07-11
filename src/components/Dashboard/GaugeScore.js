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
						'⭐',
						'⭐⭐',
						'⭐⭐⭐',
						'If,Else',
						'⭐',
						'⭐⭐',
						'⭐⭐⭐',
						'For Loop',
						'⭐',
						'⭐⭐',
						'⭐⭐⭐',
						'While Loop',
						'⭐',
						'⭐⭐',
						'⭐⭐⭐',
						'Advance'
					],
					parents: [
						'',
						'Score',
						'Basic',
						'Basic',
						'Basic',
						'Score',
						'If,Else',
						'If,Else',
						'If,Else',
						'Score',
						'For Loop',
						'For Loop',
						'For Loop',
						'Score',
						'While Loop',
						'While Loop',
						'While Loop',
						'Score'
					],
					values: [65, 14, 9, 3, 2, 12, 7, 2, 3, 6, 3, 2, 1, 20, 11, 5, 4, 13],
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
