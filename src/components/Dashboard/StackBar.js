import React from 'react'
import Plot from 'react-plotly.js'

import styled from 'styled-components'

const Stackbar = styled(Plot)`
	width: 100%;
	height: 100%;
`
const StackBar = props => {
	return (
		<Stackbar
			data={[props.data]}
			layout={{barmode: 'group'}}
			config={{scrollZoom: true, responsive: true, autosizable: true}}
		/>
	)
}

export default StackBar
