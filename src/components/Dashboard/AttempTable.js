import React from 'react'

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


const AttempTable = ({ data = [
    {
        item: "test.cpp",
        latestDate: moment().format('MMMM Do YYYY, h:mm a'),
        status: '✔✔✔❌❌'
    },
    {
        item: "test.cpp",
        latestDate: moment().format('MMMM Do YYYY, h:mm a'),
        status: '✔✔✔❌❌'
    },
    {
        item: "test.cpp",
        latestDate: moment().format('MMMM Do YYYY, h:mm a'),
        status: '✔✔✔❌❌'
    }
] }) => {
    return (
        <Container>
            <FlexBox color="white" fontSize="16" role="Purpose">
                Latest Attemp
            </FlexBox>
            <FlexBox row role="Header" >
                <FlexBox height="50px" style={{ lineHeight: '50px' }} width="60%" color="white" fontSize="14" >
                    Item
                </FlexBox>
                <FlexBox height="50px" style={{ justifyContent: 'center', lineHeight: '50px' }} width="30%" color="white" fontSize="14">
                    Last worked
                </FlexBox>
                <FlexBox height="50px" style={{ justifyContent: 'center', lineHeight: '50px' }} width="10%" color="white" fontSize="14">
                    status
                </FlexBox>
            </FlexBox>
            <div role="divider" style={{
                width: '100%',
                margin: '6px 0',
                background: 'gray',
                height: '2px'
            }}></div>
            <FlexBox style={{ marginTop: '1%' }} col role="body">
                <Fade cascade top>
                    {
                        data.map((value, index) => {
                            return (
                                <FlexBox height="55px" color="white" key={index} row>
                                    <FlexBox width="60%" fontSize="12" >
                                        <ClickableText>{value.item}</ClickableText>
                                    </FlexBox>
                                    <FlexBox style={{ justifyContent: 'center' }} width="30%" color="white" fontSize="12">
                                        {value.latestDate}
                                    </FlexBox>
                                    <FlexBox style={{ justifyContent: 'center' }} width="10%" color="green" fontSize="12">
                                        {value.status}
                                    </FlexBox>
                                </FlexBox>
                            )
                        })
                    }
                </Fade>
            </FlexBox>
        </Container>
    )
}
export default AttempTable