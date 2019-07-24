import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react95'

const renderStar = (number, serialize) => {
	let temp = []
	for (let i = 0; i < number; i++) {
		temp.push(serialize)
	}
	return temp
}

const renderCategory = category_id => {
	switch (category_id) {
		case 1:
			return 'Basic'
		case 2:
			return 'Condition'
		case 3:
			return 'Loop'
		case 4:
			return 'Function'
		default:
			break;
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 90vh;
	min-height: 90vh;
	border: solid 10px #e2e2e2;
	background-color: #e2e2e2;
	overflow-x:hidden;
`
const Box = styled.div`
	display: flex;
	flex-direction: row;
	height: 50px;
	background-color: #9d9d9d;
	align-items: center;
	justify-content: center;
	font-family: sans-serif;
`
const Item = styled.div`
	width: ${props => props.width}%;
	text-align: center;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
    border-style: solid;
    border-width: 2px;
    border-left-color: #ffffff;
    border-top-color: #ffffff;
    border-right-color: #050608;
    border-bottom-color: #050608;
    box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
    padding: 0 0.5rem;
    background: #ced0cf;
	
	${props => props.sorting && `:active{
	border-right-color: #ffffff;
    border-bottom-color: #ffffff;
    border-top-color: #050608;
	border-left-color: #050608;
	}
	:hover{
		cursor:pointer;
	}`};
`

const DataBox = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 50px;
	background-color: white;
	align-items: center;
	justify-content: center;
	font-family: sans-serif;
	padding: 2px;
	margin:2px;
	:hover{
		color:white;
		background-color:#000080;
	}
`
const DataItem = styled.div`
	text-align: ${props => props.align};
	width: ${props => props.width}%;
`
const Data = styled.div`
	height: 100vh;
	width:102%;
	overflow-y: auto;
	overflow-x:hidden;
	border-style: solid;
    border-width: 2px;
    border-left-color: #ffffff;
    border-top-color: #ffffff;
    border-right-color: #050608;
    border-bottom-color: #050608;
	box-sizing:border-box;
	box-shadow:1px 1px 0px 1px #dfe0e3,-1px -1px 0 1px #888c8f;
	background-color:white;
`
const StyledTooltip = styled(Tooltip)`
position:absolute;
background:white;
;
`

export default ({ data, sortDifficulty, sortTopic, sortPass, handleClick }) => {
	const renderStatus = value => {
		if (value > 99) {
			return <div style={{ color: 'green' }}>&#x2714;</div>
		}
		else if (value === -1) {
			return <div style={{ color: 'black' }}>&#x3f;</div>
		} else {
			return <div style={{ color: 'red' }}>&#x2715;</div>
		}
	}
	return (
		<Container>
			<Box>
				<Item width={12.5} sorting onClick={e => sortPass()}>
					<StyledTooltip delay={300} text="Sort by Status ⌛">Status</StyledTooltip>
				</Item>
				<Item width={12.5}>Order</Item>
				<Item width={37.5}>Name</Item>
				<Item width={12.5} sorting onClick={e => sortDifficulty()}>
					<StyledTooltip delay={300} text="Sort by level ⌛">Level</StyledTooltip>
				</Item>
				<Item width={12.5} sorting onClick={e => sortTopic()} >
					<StyledTooltip delay={300} text="Sort by Topic ⌛">Topic</StyledTooltip>
				</Item>
				<Item width={12.5} sorting onClick={e => sortPass()}>
					<StyledTooltip delay={300} text="Sort by  %Pass ⌛">Pass</StyledTooltip>
				</Item>
			</Box>
			<Data>
				{data.map((value, index) => {
					return (
						<DataBox key={index} onClick={e => handleClick(value.id)}>
							<DataItem align="center" width={12.5}>
								{renderStatus(value.percent)}
							</DataItem>
							<DataItem align="center" width={12.5}>
								{index + 1}
							</DataItem>
							<DataItem align="left" width={37.5}>
								{value.title}
							</DataItem>
							<DataItem style={{ color: '#ffb43b', fontSize: 24 }} align="left" width={12.5}>
								{renderStar(value.difficulty, '★')}
							</DataItem>
							<DataItem align="center" width={12.5}>
								{renderCategory(value.category_id)}
							</DataItem>
							<DataItem align="center" width={12.5}>
								{`${value.percent !== -1 ? `${value.percent}%` : 'ยังไม่ทันแตะเลยจ้า'}`}
							</DataItem>
						</DataBox>
					)
				})}
			</Data>
		</Container>
	)
}
