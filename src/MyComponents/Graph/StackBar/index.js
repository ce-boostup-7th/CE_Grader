import React from 'react'
import Plot from 'react-plotly.js'

export default props => {
	return (
		<Plot
			data={props.data}
			layout={{barmode: 'group'}}
			config={{scrollZoom: true, responsive: true, autosizable: true}}
		/>
	)
}
