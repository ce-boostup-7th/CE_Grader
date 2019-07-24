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
import {CLOSE_WIN} from '../../StateProvider/actions_constant'
import First from '../../resource/icons/first.png'
import Second from '../../resource/icons/second.png'
import Third from '../../resource/icons/third.png'
// Start  Code Here
export default ({data=[{
	username:'asd',
	score:12314
}]}) => {
	const [tabs, settabs] = useState(1)
	const sortByscore=()=>{
		let temp = [...data]
		temp.sort((a,b)=>b.score-a.score)
		return temp
	}
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
											<TableHeadCell style={{width: '14vw'}}>Rank</TableHeadCell>
											<TableHeadCell style={{width: '35vw'}}>
												Name
											</TableHeadCell>
											<TableHeadCell style={{width: '18vw'}}>
												Score
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
											sortByscore().map((user, index) => {
												return (
													<TableRow style={{width:'100%'}} key={index}>
														<TableDataCell
															style={{width: '14vw', textAlign: 'center'}}>
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
																		return <div>{user.username} <img width={18} height={18} src={First} /> </div>
																	case 2:
																		return <div>{user.username} <img width={18} height={18} src={Second} /> </div>
																	case 3:
																		return <div>{user.username} <img width={18} height={18} src={Third} /> </div>
																	default:
																		return user.username
																}
															})()}
														</TableDataCell>
														<TableDataCell
															style={{
																textAlign: 'center',
																width: '18vw'
															}}>
															{user.score}
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
