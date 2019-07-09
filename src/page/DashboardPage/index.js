import React from 'react'
import styled from 'styled-components'

import SideNav from '../../components/SideNav'
import Dashboard from '../../components/Dashboard'

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

export default () => {
	return (
		<Container>
			<SideNav />
			<Div>
					<Dashboard />
			</Div>
		
		</Container>
	)
}
