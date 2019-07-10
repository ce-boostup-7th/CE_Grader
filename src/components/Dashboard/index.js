import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {
	Window,
	WindowHeader,
	WindowContent,
	themes,
	Button,
	Cutout
} from 'react95'
import HeatMap from './HeatMap'
import StackBar from './StackBar'
const Container = styled.div`
	background-color: #ccc;
	display: flex;
	max-height: 90vh;
	min-height: 90vh;
	max-width: 90vw;
	min-width: 80vw;
`

const WinBox = styled(Window)`
	width: 100%;
	margin: 0 auto;
`
const BoxHeader = styled(WindowHeader)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ExitButton = styled(Button)`
	margin-right: -6px;
`
const Exit = styled.span`
	font-weight: bold;
	transform: translateY(-1px);
`
const BoxContent = styled(WindowContent)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas:
		'heatMap circle'
		'stack attemp';
	gap: 10px;
	height: 90%;
`

const DashBox = styled.div`
	grid-area: ${props => {
		return props.area
	}};
`
const FieldBox = styled.div`
	display: flex;
	grid-area: ${props => {
		return props.area
	}};
	overflow: auto;
	position: relative;
	width: 100%;
	height: 100%;
`

const CutoutBox = styled(Cutout)`
	align-items: stretch;
	height: 100%;
	width: 100%;
	overflow: auto;
`

export default () => {
	return (
		<Container>
			<ThemeProvider theme={themes.default}>
				<WinBox>
					<BoxHeader>
						<span>Dashboard.exe</span>
						<ExitButton size={'sm'} square>
							<Exit>x</Exit>
						</ExitButton>
					</BoxHeader>
					<BoxContent>
						<FieldBox area="stack">
							<StackBar />
						</FieldBox>
						<FieldBox label="HeatMap" area="heatMap">
							<HeatMap />
						</FieldBox>
						<FieldBox label="last doing" area="attemp">
							{' attemp'}
						</FieldBox>
						<DashBox area="circle">{' circle'}</DashBox>
					</BoxContent>
				</WinBox>
			</ThemeProvider>
		</Container>
	)
}
