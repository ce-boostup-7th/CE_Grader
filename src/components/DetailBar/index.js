import React from 'react'
import { Tabs, Tab, TabBody, themes, Window, WindowContent } from 'react95'
import styled, { ThemeProvider } from 'styled-components'

const TextArea = styled.textarea`
    resize:none;
`

const Div = styled.div`
    height: 100%;
    box-sizing: border-box;
    box-shadow: inset 1px 1px 0px 1px #dfe0e3, inset -1px -1px 0 1px #888c8f;
`

const Description = ({detail}) => {
    return (
        <TabBody style={{
            height: '85%'
        }}>
            <Div>
                <TextArea style={{
                    width: '100%',
                    height: '100%'
                }} readOnly value={detail}>
                </TextArea>
            </Div>
        </TabBody>
    )
}

const TestCase = ({testcase}) => {
    const renderTestcase=()=>{
        if(testcase.length <= 3){
            return `
input : 
${testcase[0].input}
output :
${testcase[0].output}
`
        }else return `
input :
${testcase[0].input}
output :
${testcase[0].output}


input : 
${testcase[1].input}
output :
${testcase[1].output}


input : 
${testcase[2].input}
output :
${testcase[2].output}
`
    }
    return (
        <TabBody style={{
            height: '85%'
        }}>
            <TextArea style={{
                    width: '100%',
                    height: '100%'
                }} readOnly value={renderTestcase()}>
                </TextArea>
        </TabBody>
    )
}

export default (props) => {
    let [activeTabs, setActive] = React.useState(0)
    return (
        <div style={{ width: '35%' }}>
            <ThemeProvider theme={themes.default}>
                <div style={{
                    width: '100%',
                    height: '100%'
                }}>
                    <WindowContent style={{
                        width: 'auto',
                        height: '100%',
                        background:'#ced0cf'
                    }}>
                        <Tabs value={activeTabs} onChange={(value) => setActive(value)}>
                            <Tab value={0}>Description</Tab>
                            <Tab value={1}>Example</Tab>
                        </Tabs>
                        {activeTabs === 0 && <Description detail={props.detail} />}
                        {activeTabs === 1 && <TestCase testcase={props.testcase} />}
                    </WindowContent>
                </div>
            </ThemeProvider>
        </div>
    )
}