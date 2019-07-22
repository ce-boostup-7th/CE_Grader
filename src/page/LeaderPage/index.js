import React from 'react'
import styled from 'styled-components'

import LeaderBoard from '../../components/LeaderBoard'
import { StateContext } from '../../StateProvider/StateProvider';

const Container = styled.div`
	display: flex;
	flex-direction: row;
`
export default (props) => {
	let {state, dispatch} = React.useContext(StateContext)
	return (
		<Container>
			<LeaderBoard data={state.users} />
		</Container>
	)
}
