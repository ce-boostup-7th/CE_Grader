import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import DataTable from '../../components/DataTable'
import { StateContext } from '../../StateProvider/StateProvider'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: flex-start;
	width:100%;
`
const Div = styled.div`
	flex-grow: 3;
	margin: 20px;
`
let processingData = (state, mode,extra) => {
	let temp = [...state]
	if(extra){
		return temp.filter((v)=>{
			return v.category_id > 4
		})
	}else {
		temp = temp.filter(v=>{
			return v.category_id <=4
		})
	}
	if (mode === 1) {
		return temp.sort((a, b) =>
			a.difficulty > b.difficulty ? 1 : b.difficulty > a.difficulty ? -1 : 0
		)
	}
	if (mode === -1) {
		return temp.sort((a, b) =>
			a.difficulty > b.difficulty ? -1 : b.difficulty > a.difficulty ? 1 : 0
		)
	}
	if (mode === 0) {
		return temp
	}
	if (mode === 2) {
		return temp.sort((a, b) =>
			a.category_id > b.category_id ? 1 : b.category_id > a.category_id ? -1 : 0
		)
	}
	if (mode === -2) {
		return temp.sort((a, b) =>
			a.category_id > b.category_id ? -1 : b.category_id > a.category_id ? 1 : 0
		)
	}
	if (mode === 3) {
		return temp.sort((a, b) =>
			a.percent > b.percent ? 1 : b.percent > a.percent ? -1 : 0
		)
	}
	if (mode === -3) {
		return temp.sort((a, b) =>
			a.percent > b.percent ? -1 : b.percent > a.percent ? 1 : 0
		)
	}
}

const ProblemPage = (props) => {
	let { state, dispatch } = React.useContext(StateContext)
	let [mode, setMode] = React.useState(0)
	const handleClick = (index) => {
		props.history.push(`/workbench/problem/${index}`)
	}
	return (
		<Container>
			<Div>
				<DataTable
					data={processingData(
						state.problems, mode,state.openTest)}
					sortDifficulty={() => {
						if (mode === 0) {
							setMode(1)
						} else if (mode === 1) {
							setMode(-1)
						} else if (mode === -1) {
							setMode(1)
						} else {
							setMode(0)
						}
					}}
					sortTopic={() => {
						if (mode === 2) {
							setMode(-2)
						} else if (mode === -2) {
							setMode(2)
						} else {
							setMode(2)
						}
					}
					}
					sortPass={
						() => {
							if (mode === 3) {
								setMode(-3)
							} else if (mode === -3) {
								setMode(3)
							} else {
								setMode(3)
							}

						}
					}
					handleClick={handleClick}
				/>
			</Div>
		</Container>
	)
}

export default withRouter(ProblemPage)