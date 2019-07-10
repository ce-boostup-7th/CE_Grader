import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Button, themes } from 'react95'

import cpp from '../../resource/icons/cpp.png'
import play from '../../resource/icons/play.png'

const Container = styled.div`
display:flex;
flex-direction:row;
background:#e2e2e2;
height:100%;
`

const Box = styled.div`
width:${props => props.width}%;
height:inherit;
line-height:30px;
`
const NameBox = styled(Box)`
border-top:solid 1px black;
border-left:solid 1px black;
border-right:solid 1px black;
background:#272822;
color:white;
display:inherit;
`
const Icon = styled.div`
	padding: 5px;
	height: 32px;
	width: 32px;
	content: url(${props => props.icon});
`

const Group = styled.div`
display:inherit;
margin-left:auto;
`

export default (props) => {
    return (
        <Container>
            <NameBox width={20}><Icon icon={cpp} />{'  '}main.cpp</NameBox>
            <Box width={30} />
            <ThemeProvider theme={themes.default}>
                <Group>
                    <Box><Button>Import</Button></Box>
                    <Box><Button>Submit</Button></Box>
                    <Box><Button>Export</Button></Box>
                    <Box><Button><Icon icon={play}/></Button></Box>
                </Group>
            </ThemeProvider>
        </Container >
    )
}