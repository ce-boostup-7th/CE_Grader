import React, {useState} from 'react'

import {
	Window,
	WindowContent,
	WindowHeader,
	Tab,
	Tabs,
	Button,
	themes,
	TabBody,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableDataCell,
	TableHeadCell
} from 'react95'
import {ThemeProvider} from 'styled-components'
import {StateContext} from '../../StateProvider/StateProvider'
import {CLOSE_WIN} from '../../StateProvider/actions_constant'
// Start  Code Here
export default ({data=[{
	name:'asd',
	score:12314,
	time:12312
}]}) => {
	let {state, dispatch} = React.useContext(StateContext)
	const [users] = useState(data)
	const [tabs, settabs] = useState(1)
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginLeft: '2%',
				marginTop: '0.5%'
			}}>
			<ThemeProvider theme={themes.default}>
				<Window style={{display: 'inline', width: '72vw', height: '98vh'}}>
					<WindowHeader
						style={{display: 'flex', justifyContent: 'space-between'}}>
						<span>Header .exe</span>
						<Button
							style={{
								marginRight: '-6px',
								marginTop: '3px'
							}}
							size={'sm'}
							square
							onClick={() => {
								dispatch({type: CLOSE_WIN})
							}}>
							<span
								style={{fontWeight: ' bold', transform: 'translateY(-1px)'}}>
								x
							</span>
						</Button>
					</WindowHeader>
					<WindowContent>
						<Tabs
							value={tabs}
							onChange={value => {
								settabs(value)
							}}>
							<Tab value={1}>Today Ranking 🏆</Tab>
						</Tabs>
						<div style={{height: '85vh'}}>
							<TabBody>
								<Table style={{display: 'block'}}>
									<TableHead style={{display: 'block'}}>
										<TableRow head style={{display: 'block'}}>
											<TableHeadCell style={{width: '8vw'}}>Rank</TableHeadCell>
											<TableHeadCell style={{width: '35vw'}}>
												Name
											</TableHeadCell>
											<TableHeadCell style={{width: '12vw'}}>
												Score
											</TableHeadCell>
											<TableHeadCell style={{width: '12vw'}}>
												Time
											</TableHeadCell>
										</TableRow>
									</TableHead>
									<TableBody
										style={{
											display: 'block',
											height: '75vh',
											overflow: 'auto'
										}}>
										{tabs === 1 &&
											users.map((user, index) => {
												return (
													<TableRow style={{width:'100%'}} key={index}>
														<TableDataCell
															style={{width: '8vw', textAlign: 'center'}}>
															{(() => {
																switch (index + 1) {
																	case 1:
																		return '1st'
																	case 2:
																		return '2nd'
																	case 3:
																		return '3rd'
																	default:
																		return index + 1
																}
															})()}
														</TableDataCell>
														<TableDataCell style={{width: '35vw'}}>
															{(() => {
																switch (index + 1) {
																	case 1:
																		return user.name + `🥇`
																	case 2:
																		return user.name + '🥈'
																	case 3:
																		return user.name + '🥉'
																	default:
																		return user.name
																}
															})()}
														</TableDataCell>
														<TableDataCell
															style={{
																textAlign: 'center',
																width: '12vw'
															}}>
															{user.score}
														</TableDataCell>
														<TableDataCell
															style={{
																textAlign: 'center',
																width: '12vw'
															}}>
															{user.time} {' hrs '}
														</TableDataCell>
													</TableRow>
												)
											})}
									</TableBody>
								</Table>
							</TabBody>
						</div>
					</WindowContent>
				</Window>
			</ThemeProvider>
		</div>
	)
}
