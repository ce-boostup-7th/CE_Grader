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
import {userRank} from './userDatas.js'
import {StateContext} from '../../StateProvider/StateProvider'
import {CLOSE_WIN} from '../../StateProvider/actions_constant'
// Start  Code Here
export default () => {
	let {state, dispatch} = React.useContext(StateContext)
	const [users, setUsers] = useState(userRank)
	const [tabs, settabs] = useState(0)
	return (
		<ThemeProvider theme={themes.default}>
			<Window style={{display: 'inline', width: '100vw', height: '100vh'}}>
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
						<span style={{fontWeight: ' bold', transform: 'translateY(-1px)'}}>
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
						<Tab value={0}>Page 1</Tab>
						<Tab value={1}>Page 2</Tab>
						<Tab value={2}>Page 3</Tab>
						<Tab value={3}>Page 4</Tab>
						<Tab value={4}>Page 5</Tab>
					</Tabs>
					<div style={{height: '87vh'}}>
						{tabs === 0 && (
							<TabBody>
								<Table>
									<TableHead>
										<TableRow head>
											<TableHeadCell>Rank</TableHeadCell>
											<TableHeadCell style={{width: '30vw'}}>
												Name
											</TableHeadCell>
											<TableHeadCell>Score</TableHeadCell>
											<TableHeadCell>Time</TableHeadCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{users.map(data => {
											return data.id < 23 ? (
												<TableRow key={data.id}>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.rank}
													</TableDataCell>
													<TableDataCell>{data.name}</TableDataCell>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.score}
													</TableDataCell>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.time} {' hrs '}
													</TableDataCell>
												</TableRow>
											) : null
										})}
									</TableBody>
								</Table>
							</TabBody>
						)}
						{tabs === 1 && (
							<TabBody>
								<Table>
									<TableHead>
										<TableRow head>
											<TableHeadCell>Rank</TableHeadCell>
											<TableHeadCell style={{width: '30vw'}}>
												Name
											</TableHeadCell>
											<TableHeadCell>Score</TableHeadCell>
											<TableHeadCell>Time</TableHeadCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{users.map(data => {
											return data.id > 22 && data.id < 45 ? (
												<TableRow key={data.id}>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.rank}
													</TableDataCell>
													<TableDataCell>{data.name}</TableDataCell>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.score}
													</TableDataCell>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.time} {' hrs '}
													</TableDataCell>
												</TableRow>
											) : null
										})}
									</TableBody>
								</Table>
							</TabBody>
						)}
						{tabs === 2 && (
							<TabBody>
								<Table>
									<TableHead>
										<TableRow head>
											<TableHeadCell>Rank</TableHeadCell>
											<TableHeadCell style={{width: '30vw'}}>
												Name
											</TableHeadCell>
											<TableHeadCell>Score</TableHeadCell>
											<TableHeadCell>Time</TableHeadCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{users.map(data => {
											return data.id > 44 && data.id < 67 ? (
												<TableRow key={data.id}>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.rank}
													</TableDataCell>
													<TableDataCell>{data.name}</TableDataCell>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.score}
													</TableDataCell>
													<TableDataCell style={{textAlign: 'center'}}>
														{data.time} {' hrs '}
													</TableDataCell>
												</TableRow>
											) : null
										})}
									</TableBody>
								</Table>
							</TabBody>
						)}
					</div>
				</WindowContent>
			</Window>
		</ThemeProvider>
	)
}
