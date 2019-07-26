import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'
import Fade from 'react-reveal/Fade'

const Container = styled.div`
 display:flex;
 flex-direction:column;
 width:100%;
 height:50%;
 padding:5px;
 margin-top:10%;
`
const FlexBox = styled.div`

	display:flex;
    flex-wrap:nowrap;
	${({ col }) => col && `
		flex-direction:column;
	`}
	${({ row }) => row && `
		flex-direction:row;
	`}
	${({ width }) => width && `
		width:${width};
	`}
	${({ height }) => height && `
		height:${height};
	`}
    ${({ fontSize }) => fontSize && `
		font-size:${fontSize}px;
	`}
     ${({ color }) => color && `
		color:${color};
	`}
`
const ClickableText = styled.div`
justify-content:left;
:hover{
    color:#3170d6;
    cursor: pointer;
}
`

const pop = [
    {
        title: "test.cpp",
        last_do: moment().format('MMMM Do YYYY, h:mm a'),
        percen: 32,
        problem_id: 2
    },
    {
        title: "test.cpp",
        last_do: moment().format('MMMM Do YYYY, h:mm a'),
        percen: 21,
        problem_id: 3
    },
    {
        title: "test.cpp",
        last_do: moment().format('MMMM Do YYYY, h:mm a'),
        percen: 74,
        problem_id: 4
    }
]

const AttempTable = ({ data = pop, history }) => {
    const renderStatus = (value='') =>{
       return value.split('').map((v,i)=>{
            switch(v){
                case 'P':
                    return <p key={i} style={{color:'green'}}>{v}</p>
                default :
                    return <p key={i} style={{color:'red'}}>{v}</p>
            }
        })
    }
    return (
        <Container>
            <FlexBox color="white" fontSize="16" role="Purpose">
                Latest Attempt
            </FlexBox>
            <FlexBox row role="Header" >
                <FlexBox height="50px" style={{ lineHeight: '50px' }} width="40%" color="white" fontSize="14" >
                    List
                </FlexBox>
                <FlexBox height="50px" style={{ justifyContent: 'center', lineHeight: '50px' }} width="30%" color="white" fontSize="14">
                    Last worked
                </FlexBox>
                <FlexBox height="50px" style={{ justifyContent: 'center', lineHeight: '50px' }} width="30%" color="white" fontSize="14">
                    Pass
                </FlexBox>
            </FlexBox>
            <div role="divider" style={{
                width: '100%',
                margin: '6px 0',
                background: 'gray',
                height: '2px'
            }}></div>
            <Fade cascade top>
                <FlexBox style={{ marginTop: '1%',paddingTop:'5px' }} col role="body">
                    {
                        data.map((value, index) => {
                            return (
                                <FlexBox height="55px" color="white" key={index} row>
                                    <FlexBox width="40%" fontSize="12" >
                                        <ClickableText onClick={e => { history.push(`/workbench/problem/${value.problem_id}/latest`) }}>{value.title}</ClickableText>
                                    </FlexBox>
                                    <FlexBox style={{ justifyContent: 'center' }} width="30%" color="white" fontSize="12">
                                        {new Date(value.last_do).toLocaleString()}
                                    </FlexBox>
                                    <FlexBox style={{ justifyContent: 'center' }} width="30%" color="red" fontSize="12">
                                        {renderStatus(value.results)}
                                    </FlexBox>
                                </FlexBox>
                            )
                        })
                    }
                </FlexBox>
            </Fade>
        </Container >
    )
}
export default withRouter(AttempTable)