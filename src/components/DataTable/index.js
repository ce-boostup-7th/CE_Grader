import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react95'
import Slide from 'react-reveal/slide'


const renderStar = (number, serialize) => {
	let temp = []
	for (let i = 0; i < number; i++) {
		temp.push(serialize)
	}
	return temp
}

const renderStatus = status => {
	switch (status) {
		case 'PASS':
			return '✔'
		case 'FAIL':
			return '❌'
		case 'UNKNOW':
			return '❔'
		default:
			break
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 90vh;
	min-height: 90vh;
	border: solid 10px #e2e2e2;
	background-color: #e2e2e2;
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
	overflow-y: auto;
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
background:white;
;
`

export default ({ data, sort,handleClick }) => {
	return (
		<Container>
			<Box>
				<Item width={12.5}>Status</Item>
				<Item width={12.5}>Order</Item>
				<Item width={37.5}>Name</Item>
				<Item width={12.5} sorting onClick={e => sort('Level')}>
					<StyledTooltip delay={300} text="Click to sort by level ⌛">Level</StyledTooltip>
				</Item>
				<Item width={12.5}>Topic</Item>
				<Item width={12.5}>Pass</Item>
			</Box>
			<Data>
				{data.map((value, index) => {
					return (
						<DataBox key={index} onClick={e=>handleClick(value.order)}>
							<DataItem align="center" width={12.5}>
								{renderStatus(value.status)}
							</DataItem>
							<DataItem align="center" width={12.5}>
								{value.order}
							</DataItem>
							<DataItem align="left" width={37.5}>
								{value.name}
							</DataItem>
							<DataItem align="left" width={12.5}>
								{renderStar(value.level, '⭐')}
							</DataItem>
							<DataItem align="center" width={12.5}>
								{value.topic}
							</DataItem>
							<DataItem align="center" width={12.5}>
								{value.pass}
							</DataItem>
						</DataBox>
					)
				})}
			</Data>
		</Container>
	)
}
