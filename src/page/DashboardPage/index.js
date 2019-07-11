import React from 'react'
import styled from 'styled-components'

import Dashboard from '../../components/Dashboard'
import {
	StackData,
	Attemp,
	Heatmaps,
	GaugeCompleteData,
	ScoreData
} from '../../DummyData'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: flex-start;
`
const Div = styled.div`
	flex-grow: 3;
	margin: 20px;
`

export default props => {
	return (
		<Container>
			<Div>
				<Dashboard
					dataBar={StackData}
					dataHeatMap={Heatmaps}
					dataAttemp={Attemp}
					completeData={GaugeCompleteData}
					scoreData={ScoreData}
				/>
			</Div>
		</Container>
	)
}
