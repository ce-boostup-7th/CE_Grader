import React from 'react'
import styled from 'styled-components'

import folder_open from '../../resource/icons/folder_open.png'
import file_set from '../../resource/icons/file_set.png'
import up_arrow from '../../resource/icons/up_arrow.png'
import logout from '../../resource/icons/logout.png'

const StyledUl = styled.ul`
display: inline-block;
border:solid 2px black;
width:100%;
padding:4px;
list-style:none;
background-color:white;
`
const StyledLi = styled.li`

display:inline;
font-size:18px;
+li::before{
    padding:5px;
    color:black;
    content:">"
}
`
const Icon = styled.i`
position:relative;
top:5px;
padding-right:10px;
height:18px;
width:18px;
content:url(${props=>props.icon});
`
const LeftIcon = styled(Icon)`
left:0px;
`
const RightIcon = styled(Icon)`
float:right;
`
export default ({location,destination})=>{
    return (
        <StyledUl>
            <LeftIcon icon={up_arrow}/>
            <StyledLi><Icon icon={folder_open}/><a href="#">{location}</a></StyledLi>
            <StyledLi><Icon icon={file_set}/><a href="#">{location}.exe</a></StyledLi>
            <StyledLi><a href="#">{destination}</a></StyledLi>
            <RightIcon icon={logout}/>
        </StyledUl>
    )
}