import React from 'react'
import styled from 'styled-components'

import Breadcrumb from '../../components/BreadcrumbsLink'
import Editor from '../../components/Editor'
import DetailBar from '../../components/DetailBar'
import Terminal from '../../components/Terminal'
import menu from '../../resource/icons/menu.png'
import ManipulationTab from '../../components/ManipulationTab';


const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100%;
`
const FlexBox = styled.div`
display:flex;
${({ row, col }) => (row && 'flex-direction:row;') || (col && 'flex-direction:column')}
`
const NavigationBox = styled(FlexBox)`
background-color:#e2e2e2;
box-sizing: border-box;
box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
`
const Icon = styled.div`
	height: 32px;
	width: 32px;
	content: url(${props => props.icon});
    :hover{
        cursor: pointer;
    }
`

export default ({size1=4,size2=96}) => {
    let [activeTerminal,setActiveTerminal] = React.useState(false)
    return (
        <Container>
            <NavigationBox row>
                <div style={{
                    textAlign: "center",
                    alignSelf: "center",
                    padding:"12px",
                   width:`${size1}%`
                }}><Icon icon={menu} /></div>
                <Breadcrumb size={size2} destination="Asd" location="as" />
            </NavigationBox>
            <FlexBox row style={{
                flex: 1
            }}>
                <DetailBar />
                <FlexBox col style={
                    {
                        flexGrow:4
                    }
                }>
                    <div style={{height:'5%',flexShrink:0}}>
                        <ManipulationTab/>
                    </div>
                    <Editor />
                    <div style={{
                        height:`${activeTerminal? '50%':'auto'}`
                        }}>
                        <Terminal active={activeTerminal} toggleTerminal={()=>setActiveTerminal(!activeTerminal)}/>
                    </div>
                </FlexBox>
            </FlexBox>
        </Container>
    )
}