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

const Description = (props) => {
    return (
        <TabBody style={{
            height: '85%'
        }}>
            <Div>
                <TextArea style={{
                    width: '100%',
                    height: '100%'
                }} readOnly >
                </TextArea>
            </Div>
        </TabBody>
    )
}

const TestCase = (props) => {
    return (
        <TabBody style={{
            height: '85%'
        }}>
            stuff
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
                        marginTop: '10px',
                        marginLeft:'10px',
                        marginRight: '10px',
                        width: 'auto',
                        height: '100%'
                    }}>
                        <Tabs value={activeTabs} onChange={(value) => setActive(value)}>
                            <Tab value={0}>Description</Tab>
                            <Tab value={1}>Test Case</Tab>
                        </Tabs>
                        {activeTabs === 0 && <Description />}
                        {activeTabs === 1 && <TestCase />}
                    </WindowContent>
                </div>
            </ThemeProvider>
        </div>
    )
}