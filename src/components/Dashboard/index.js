import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import {
	Window,
	WindowHeader,
	WindowContent,
	themes,
	Button
} from 'react95'
import ActivnessChart from './ActivnessChart';
import ChapterChart from './ChapterChart';
import AttempTable from './AttempTable';
import OverrallChart from './OverallChart';
import PositionChart from './PositionChart';

const Container = styled.div`
	display: flex;
	padding:20px;
	width:100%;
`
const FlexBox = styled.div`
	display:flex;
	${({ col }) => col && `
		flex-direction:column;
	`}
	${({ row }) => row && `
		flex-direction:row;
	`}
	${({ width }) => width && `
		width:${width};
	`}
	${({ height }) => height && `
		height:${height};
	`}
`

export default ({ data }) => {
	return data ? ((
		<Container>
			<ThemeProvider theme={themes.default}>
				<Window style={{
					width: 'inherit'
				}}>
					<WindowHeader
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<span>Virtual Machine:Running Mordern UI System</span>
						<Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
							<span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
						</Button>
					</WindowHeader>
					<WindowContent style={{
						background: '#282c34',
						width: '100%',
						height: '95%'
					}}>
						<FlexBox row height="inherit">
							<FlexBox col width='65%' height="100%">
								<div style={{ fontSize: 16, marginBottom: '20px', color: 'white' }}>
									Chapter Progress
								</div>
								<ChapterChart data={data.progress_array} />
								<AttempTable data={data.history}/>
							</FlexBox>
							<FlexBox col width='40%' height="100%" style={{
								marginLeft: 'auto'
							}}>
								<div style={{ paddingLeft: '20px', fontSize: 14, marginBottom: '20px', color: 'white' }}>
									Overral Progress
								</div>
								<OverrallChart data={data.overall} />
								<div style={{ paddingLeft: '20px', fontSize: 14, marginBottom: '20px', color: 'white' }}>
									Active Pulse
								</div>
								<FlexBox width="100%" height="25%" style={{ justifyContent: 'center' }}>
									<ActivnessChart data={data.active_pulse} />
								</FlexBox><br />
								<div style={{ paddingLeft: '20px', fontSize: 14, marginBottom: '20px', color: 'white' }}>
									Position
								</div>
								<FlexBox width="100%" height="25%" style={{ justifyContent: 'center' }}>
									<PositionChart data={data.histogram} />
								</FlexBox>
							</FlexBox>
						</FlexBox>
					</WindowContent>

				</Window>
			</ThemeProvider>
		</Container>
	)) : 'Loding'
}
