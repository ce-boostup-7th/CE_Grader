import React from 'react'

import styled, {ThemeProvider} from 'styled-components'
import {Window, WindowContent, Cutout, themes} from 'react95'

const Content = styled(WindowContent)`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-content: stretch;
	flex: 1 auto;
	margin: 0 auto;
`

const Box = styled(Cutout)`
	display: flex;
	flex: 1 auto;
	text-align: center;
	justify-content: center;
	align-items: center;
`

const Container = styled(Window)`
	display: flex;
	justify-content: center;
	align-items: stretch;
	flex: 1 auto;
	max-width: 100px;
	max-height: 130px;
	height: 100%;
`
const Ranking = props => {
	return (
		<ThemeProvider theme={themes.default}>
			<Container>
				<Content>
					<Box>
						<span>{props.data.current}</span>
					</Box>
					<Box>
						<span>
							{props.status}
							{props.data.update}
						</span>
					</Box>
				</Content>
			</Container>
		</ThemeProvider>
	)
}

export default Ranking
