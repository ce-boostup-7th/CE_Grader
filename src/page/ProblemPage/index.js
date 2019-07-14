import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import DataTable from '../../components/DataTable'
import {StateContext} from '../../StateProvider/StateProvider'

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
let processingData = (state, mode) => {
	let temp = state.data
	if (mode === 1) {
		return temp.sort((a, b) =>
			a.level > b.level ? 1 : b.level > a.level ? -1 : 0
		)
	}
	if (mode === -1) {
		return temp.sort((a, b) =>
			a.level > b.level ? -1 : b.level > a.level ? 1 : 0
		)
	}
	if (mode === 0) {
		return temp
	}
}

const ProblemPage = (props) => {
	let {state, dispatch} = React.useContext(StateContext)
	let [mode, setMode] = React.useState(0)
	const handleClick = (index)=>{
		props.history.push(`/workbench/problem/${index}`)
	}
	return (
		<Container>
			<Div>
				<DataTable
					data={processingData(state, mode)}
					sort={() => {
						if (mode === 0) {
							setMode(1)
						} else if (mode === 1) {
							setMode(-1)
						} else if (mode === -1) {
							setMode(1)
						}
					}}
					handleClick={handleClick}
				/>
			</Div>
		</Container>
	)
}

export default withRouter(ProblemPage)