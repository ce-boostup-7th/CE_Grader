import React from 'react'
import styled from 'styled-components'

import {
	Table,
	TableBody,
	TableDataCell,
	TableHead,
	TableHeadCell,
	TableRow,
	Fieldset
} from 'react95'

const Container = styled.div`
	flex-grow: 1;
	width: 100%;
	height: 100%;
`
const Attemp = props => {
	return (
		<Container>
			<Fieldset label="Attemp" style={{width: '100%'}}>
				<Table style={{height: '100%', display: 'block'}}>
					<TableHead style={{display: 'block'}}>
						<TableRow head style={{display: 'flex'}}>
							<TableHeadCell style={{flexGrow: '1'}}>Order</TableHeadCell>
							<TableHeadCell style={{flexGrow: '4'}}>Name</TableHeadCell>
							<TableHeadCell style={{flexGrow: '1'}}>Level</TableHeadCell>
							<TableHeadCell style={{flexGrow: '1'}}>Topic</TableHeadCell>
						</TableRow>
					</TableHead>
					<TableBody
						style={{
							display: 'block',
							height: '27vh',
							overflow: 'auto'
						}}>
						{props.data.map((data, index) => {
							return (
								<TableRow
									key={index}
									style={{display: 'flex', flexWrap: 'nowrap'}}>
									<TableDataCell style={{width: '6.5vw'}}>
										{index + 1}
									</TableDataCell>
									<TableDataCell style={{width: '19.5vw'}}>
										{data.name}
									</TableDataCell>
									<TableDataCell style={{width: '6.5vw'}}>
										{(() => {
											switch (data.level) {
												case 1:
													return '⭐'
												case 2:
													return '⭐⭐'
												case 3:
													return '⭐⭐⭐'
												default:
													return null
											}
										})()}
									</TableDataCell>
									<TableDataCell style={{width: '5vw'}}>
										{data.topic}
									</TableDataCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</Fieldset>
		</Container>
	)
}

export default Attemp
