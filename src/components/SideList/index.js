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
 const Ul = styled.ul`
 box-shadow:inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
 `
const Li = styled.li`
color : black;
list-style-type:none;
font-size:15px;
:hover{
		color:white;
        cursor: pointer;
		background-color:#000080;
	}
`
const renderStatus = (value, text) => {
    if (value > 99) {
        return <div style={{ color: 'green' }}>&#x2714; {text}</div>
    }
    else if (value === -1) {
        return <div style={{ color: 'black' }}>&#x3f; {text}</div>
    } else {
        return <div style={{ color: 'red' }}>&#x2715; {text}</div>
    }
}

const Sidelist = (props) => {
    const { state } = React.useContext(StateContext)
    return <Nav peek={props.peek}>
        <div style={{
            width: '100%',
            height: '98%'
        }}><h3 style={{ position: 'fixed', top: 0 }} >Quick Link</h3>
            <Box>
                <Ul style={{ background: 'white' }}>
                    {
                        state.problems.map((v, index) => {
                            return <Li key={index} onClick={e => props.history.push(`/workbench/problem/${v.id}`)}>{renderStatus(v.percent, v.title)}</Li>
                        })
                    }
                </Ul>
            </Box>
        </div>
    </Nav>
}
export default withRouter(Sidelist)