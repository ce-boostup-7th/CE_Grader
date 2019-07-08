import React from 'react'
import styled from 'styled-components'

const renderArray = (number, serialize) => {
    let temp = [];
    for (let i = 0; i < number; i++) {
        temp.push(serialize)
    }
    return temp
}

const renderStatus = (status) => {
    switch (status) {
        case 'PASS':
            return "✔"
        case 'FAIL':
            return "❌"
        case 'UNKNOW':
            return "❔"
        default:
            break;
    }
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    max-height:90vh;
    min-height:90vh;
    border:solid 5px #E2E2E2;
    background-color:#E2E2E2;
`
const Box = styled.div`
    display:flex;
    flex-direction:row;
    height: 50px;
    background-color:#9D9D9D;
    align-items: center;
    justify-content: center;
    font-family:sans-serif;
`
const Item = styled.div`
    width:${props => props.width}%;
    text-align:center;
    min-height:50px;
    height:50px;
    line-height:50px;
`

const DataBox = styled.div`
    display:flex;
    flex-direction:row;
    min-height:50px;
    background-color:#E2E2E2;
    align-items: center;
    justify-content: center;
    font-family:sans-serif;
    padding:5px;
`
const DataItem = styled.div`
    text-align:${props => props.align};
    width:${props => props.width}%;
`
const Data = styled.div`
width:100%;
overflow-y:auto;
`

const Sortable = styled.div`
:hover{
    cursor: pointer;
}
`

export default ({ data,sort }) => {
    return (
        <Container>
            <Box>
                <Item width={12.5}>Status</Item>
                <Item width={12.5}>Order</Item>
                <Item width={37.5}>Name</Item>
                <Item width={12.5}><Sortable onClick={e => sort('Level')}>Level</Sortable></Item>
                <Item width={12.5}>Topic</Item>
                <Item width={12.5}>Pass</Item>
            </Box>
            <Data>
                {
                    data.map((value, index) => {
                        return (
                            <DataBox key={index}>
                                <DataItem align="center" width={12.5}>
                                    {
                                        renderStatus(value.status)
                                    }
                                </DataItem>
                                <DataItem align="center" width={12.5}>
                                    {
                                        value.order
                                    }
                                </DataItem>
                                <DataItem align="left" width={37.5}>
                                    {
                                        value.name
                                    }
                                </DataItem>
                                <DataItem align="left" width={12.5}>
                                    {
                                        renderArray(value.level, "⭐")
                                    }
                                </DataItem>
                                <DataItem align="center" width={12.5}>
                                    {
                                        value.topic
                                    }
                                </DataItem>
                                <DataItem align="center" width={12.5}>
                                    {
                                        value.pass
                                    }
                                </DataItem>
                            </DataBox>
                        )
                    })
                }
            </Data>
        </Container>
    )
}