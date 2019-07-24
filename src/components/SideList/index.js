import React, { useContext } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { StateContext } from '../../StateProvider/StateProvider';

const Nav = styled.div`
height: 100%;
  width: ${({ peek }) => peek ? '400px' : '0px'};
  position: fixed;
  z-index: 4;
  top: 20;
  left: 20;
  background-color: #ced0cf;
  padding-top: 40px;
  box-shadow: 
    0 0 0 3px hsl(0, 0%, 50%),
    0 0 0 2px hsl(0, 0%, 60%);
`
const Box = styled.div`
 width:400px;
 height:100%;
 display:block;
 overflow-y:auto;
 `
const Li = styled.li`
color : black;
list-style-type:none;
padding: 5px;
font-size:15px;
:hover{
		color:white;
        cursor: pointer;
		background-color:#000080;
	}
`

const Sidelist = (props) => {
    const { state } = React.useContext(StateContext)
    return <Nav peek={props.peek}>
        <div style={{
            width: '380px',
            height: '98%',
            padding: '20px',
            overflowX: 'hidden'
        }}><h3 style={{position:'fixed',top:0}} >Quick Link</h3>
            <Box>
                
                <ul style={{ background: 'white' }}>
                    {
                        state.problems.map((v, index) => {
                            return <Li key={index} onClick={e => props.history.push(`/workbench/problem/${v.id}`)}>{v.title}</Li>
                        })
                    }
                </ul>
            </Box>
        </div>
    </Nav>
}
export default withRouter(Sidelist)