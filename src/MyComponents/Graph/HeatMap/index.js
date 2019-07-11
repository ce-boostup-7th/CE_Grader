import React from 'react'

import Plot from 'react-plotly.js'

export default props => {
	return (
		<Plot
			var
			data={[
				{
					z: props.data,
					x: [
						'1AM',
						'2AM',
						'3AM',
						'4AM',
						'5AM',
						'6AM',
						'7AM',
						'8AM',
						'9AM',
						'10AM',
						'11AM',
						'12AM',
						'1PM',
						'2PM',
						'3PM',
						'4PM',
						'5PM',
						'6PM',
						'7PM',
						'8PM',
						'9PM',
						'10PM',
						'11PM',
						'12PM'
					],
					y: ['1st Day', '2nd Day', '3rd Day', '4th Day'],
					type: 'heatmap'
				}
			]}
			config={{responsive: true, scrollZoom: true, autosizable: true}}
		/>
	)
}
