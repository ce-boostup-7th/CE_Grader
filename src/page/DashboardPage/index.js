import React from 'react'
import styled from 'styled-components'

import Dashboard from '../../components/Dashboard'
import { StateContext } from '../../StateProvider/StateProvider';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: flex-start;
`
const Div = styled.div`
	flex-grow: 3;
	margin: 20px;
`

export default (props) => {
	let {state} = React.useContext(StateContext)
	return (
		<Dashboard data={state.statistics} />
	)
}
