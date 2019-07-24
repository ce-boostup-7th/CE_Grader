import React from 'react'
import styled from 'styled-components'
import minimize from '../../resource/icons/minimize.png'
import maximize from '../../resource/icons/maximize.png'

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
`
const FlexItem = styled.div`
display:flex;
width:${({ width }) => width};
height:${({ height }) => height};
`
const Icon = styled.i`
	padding: 5px;
	height: 32px;
	width: 32px;
	content: url(${props => props.icon});
    :hover{
        cursor: pointer;
    }
`
const TerminalBar = styled(FlexItem)`
flex-direction:row-reverse;
background:#e2e2e2;
box-sizing: border-box;
box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
`
const TerminalBarTag = styled.div`
margin-right:auto;
padding-left:5px;
padding-right:5px;
padding-top:5px;
border-top:solid 2px black;
border-left:solid 2px black;
border-right:solid 2px black;
box-sizing: border-box;
box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
:hover{
    cursor:default;
}
`

const ButtonWrapper = styled.div`
box-sizing: border-box;
box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
`

export default ({ output, toggleTerminal, active }) => {
    return (
        <Container active>
            <TerminalBar width="100%" >
                <ButtonWrapper >
                    <Icon icon={active?minimize:maximize} onClick={(e) => toggleTerminal()} />
                </ButtonWrapper>
                <TerminalBarTag>Output</TerminalBarTag>
            </TerminalBar>
            {
                active &&
                <FlexItem style={{
                    backgroundColor: 'black',
                    padding: '20px'
                }} height="100%" >
                    <div style={{
                        width:'100%',
                        height:'100%',
                    }}>
                       <textarea
                       style={{
                        width:'105%',
                        height:'100%',
                        background:'black',
                        border:'none',
                        resize:'none',
                        color:'white',
                        overflowX:'hidden'
                       }}
                       value={output}
                       readOnly
                       disabled
                       >           
                       </textarea>
                    </div>
                </FlexItem>
            }
        </Container>
    )
}