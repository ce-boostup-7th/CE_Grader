import React from 'react'
import styled from 'styled-components'

import SideNav from '../../components/SideNav'
import LeaderBoard from '../../components/LeaderBoard'

const Container = styled.div`
	display: flex;
	flex-direction: row;
`
export default (props) => {
	return (
		<Container>
			<LeaderBoard />
		</Container>
	)
}
