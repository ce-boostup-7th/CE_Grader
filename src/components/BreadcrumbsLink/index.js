import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import folder_open from '../../resource/icons/folder_open.png'
import file_set from '../../resource/icons/file_set.png'
import up_arrow from '../../resource/icons/up_arrow.png'
import logout from '../../resource/icons/logout.png'

const StyledUl = styled.ul`
	display: inline-block;
	width: inherit;
	padding: 4px;
	list-style: none;
	background-color: white;
	box-sizing: border-box;
	box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
`
const StyledLi = styled.li`
	display: inline;
	font-size: 18px;
	+ li::before {
		padding: 5px;
		color: black;
		content: '>';
	}
`
const Icon = styled.i`
	position: relative;
	top: 5px;
	padding-right: 10px;
	height: 16px;
	width: 24px;
	content: url(${props => props.icon});
`
const LeftIcon = styled(Icon)`
	left: 0px;
`
const RightIcon = styled(Icon)`
	float: right;
	padding:0px;
`
const Container = styled.div`
width:${({ size }) => size}%;
`

export default ({ size, location, destination }) => {
	return (
		<Container size={size}>
			<StyledUl>
				<LeftIcon icon={up_arrow} />
				<StyledLi>
					<Icon icon={folder_open} />
					<Link  to={`/dashboard`} >{location}</Link>
				</StyledLi>
				<StyledLi>
					<Icon icon={file_set} />
					<Link to={`/${location}`} >{location}.exe</Link>
				</StyledLi>
				<StyledLi>
					<Link onClick={e=>e.preventDefault()} to={'#'} >{destination}</Link>
				</StyledLi>
				<Link  to={`/${location}`} ><RightIcon icon={logout} /></Link>
			</StyledUl>
		</Container>
	)
}
