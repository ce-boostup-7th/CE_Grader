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
const Attemp = () => {
	const datas = [
		{name: 'velit', level: 2, topic: 'aliquet.'},
		{name: 'ridiculus', level: 2, topic: 'lobortis'},
		{name: 'ultrices', level: 2, topic: 'quis'},
		{name: 'a', level: 2, topic: 'ultrices.'},
		{name: 'libero', level: 2, topic: 'auctor'},
		{name: 'convallis', level: 3, topic: 'luctus'},
		{name: 'suscipit,', level: 2, topic: 'non,'},
		{name: 'vulputate,', level: 1, topic: 'tincidunt'},
		{name: 'pede.', level: 3, topic: 'odio.'},
		{name: 'hendrerit.', level: 1, topic: 'Cras'},
		{name: 'tristique', level: 3, topic: 'ipsum'},
		{name: 'tincidunt,', level: 1, topic: 'Cum'},
		{name: 'urna.', level: 3, topic: 'Donec'},
		{name: 'et', level: 2, topic: 'in'},
		{name: 'tellus.', level: 2, topic: 'tristique'},
		{name: 'Ut', level: 2, topic: 'Morbi'},
		{name: 'quam', level: 3, topic: 'est'},
		{name: 'dolor.', level: 2, topic: 'Phasellus'},
		{name: 'Sed', level: 2, topic: 'pellentesque.'},
		{name: 'non', level: 1, topic: 'mattis'},
		{name: 'Aenean', level: 2, topic: 'eleifend'}
	]
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
						{datas.map((data, index) => {
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
