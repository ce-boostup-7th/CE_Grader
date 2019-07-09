import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {Window, WindowHeader, WindowContent, themes, Button} from 'react95'
import HeatMap from './HeatMap'
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
	grid-template-columns: [first] 50% [line2] 50% [end];
	grid-template-rows: [row1] 50% [row2] 50% [last-line];
	height: 100%;
	gap: 10px;
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
						<HeatMap />
					</BoxContent>
				</WinBox>
			</ThemeProvider>
		</Container>
	)
}
