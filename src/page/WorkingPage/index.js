import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import qs from 'querystring'
import { UTF8ArrToStr,base64DecToArr} from './base64'

import Breadcrumb from '../../components/BreadcrumbsLink'
import Editor from '../../components/Editor'
import DetailBar from '../../components/DetailBar'
import Terminal from '../../components/Terminal'
import menu from '../../resource/icons/menu.png'
import ManipulationTab from '../../components/ManipulationTab';
import { StateContext } from '../../StateProvider/StateProvider';
import { FETCH_SUBMISSION, FETCH_PROBLEM, FETCH_STATISTIC } from '../../StateProvider/actions_constant';

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

const Working = ({ size1 = 4, size2 = 96, match, location, history }) => {
    let { state, dispatch } = React.useContext(StateContext)
    let [activeTerminal, setActiveTerminal] = React.useState(false)
    let [theme, setTheme] = React.useState('monokai')
    let [testcase, setTestcase] = React.useState([])
    let [input, setInput] = React.useState(``)
    let [output, setOutput] = React.useState(``)
    let [code, setCode] = React.useState(
        `#include<stdio.h>

int main(){
    
    return 0;
}`)
    const handleImportFile = (textfile) => {
        const reader = new FileReader()
        reader.onloadend = (e) => {
            const content = reader.result;
            setCode(content)
        }
        reader.readAsBinaryString(textfile);
    }
    const handleExportFile = () => {
        let link = document.createElement('a')
        const file = new Blob([code], { type: 'text/plain' });
        link.href = URL.createObjectURL(file)
        link.download = 'main.cpp'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    const handleSubmitFile = () => {
        fetch('http://161.246.34.96/api/submissions',
            {
                method: 'POST',
                credentials: "include",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: qs.stringify({
                    problem_id: parseInt(match.params.id),
                    language_id: 10,
                    src: code
                })
            })
            .then((res) => res)
            .then(res => {
                if (res.status === 201) {
                    res.json().then((data) => {
                        setActiveTerminal(true)
                        setOutput(
                            `
Compile success.
.............................................

Result: ${data.results.includes('X') ? 'Error Caught' : data.results}

submit at: ${new Date(data.submitted_at).toLocaleString()}
`                )
                    })
                }
            })
            .then(() => {
                fetch('http://161.246.34.96/api/users/submissions', {
                    credentials: 'include'
                })
                    .then(res => res.json())
                    .then(data => {
                        (() => {
                            dispatch({
                                type: FETCH_SUBMISSION,
                                payload: data
                            })
                        })()
                    })
                fetch('http://161.246.34.96/api/problems')
                    .then(res => res.json())
                    .then(data => {
                        (() => {
                            dispatch({
                                type: FETCH_PROBLEM,
                                payload: data
                            })
                        })()
                    })
                fetch('http://161.246.34.96/api/users/stats', {
                    credentials: 'include'
                })
                    .then(res => res.json())
                    .then(data => {
                        (() => dispatch({
                            type: FETCH_STATISTIC,
                            payload: data
                        }))()
                    })
            })
    }
    const handleRun=()=>{
        fetch('http://ce.19991999.xyz/judge/submissions?wait=true&base64_encoded=true',{
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                stdin:btoa(input),
                language_id: 10,
                source_code: btoa(code)
            })
        }).then(res=>res)
        .then(res=>{
            if (res.status === 201) {
                res.json().then((data) => {
                    let rawdata = data;
                    setActiveTerminal(true)
                    setOutput(
                        `
Process success.
.............................................

Compiler Output: ${rawdata.compile_output === null ? '-':UTF8ArrToStr(base64DecToArr(rawdata.compile_output.replace(/(\r\n|\n|\r)/gm," ")))}

Output: ${rawdata.stdout === null?'-': UTF8ArrToStr(base64DecToArr(rawdata.stdout.replace(/(\r\n|\n|\r)/gm," ")))}

exists status ${rawdata.status.id} (${rawdata.status.description})
`                )
                })
            }
    })
}
    const onChangeTheme = (newTheme) => {
        setTheme(newTheme)
    }
    React.useEffect(() => {
        fetch(`http://161.246.34.96/api/problems/${match.params.id}/testcases`)
            .then(res => res.json())
            .then(data => { setTestcase(data) })
    }, [])
    return testcase ? (
        <Container>
            <NavigationBox row>
                <div style={{
                    textAlign: "center",
                    alignSelf: "center",
                    padding: "12px",
                    width: `${size1}%`
                }}><Icon icon={menu} /></div>
                <Breadcrumb size={size2} location={`${match.params.type}`} destination={`${match.params.type} ${match.params.id}`} />
            </NavigationBox>
            <FlexBox row style={{
                flex: 1
            }}>
                <DetailBar
                    input={input}
                    testcase={testcase}
                    detail={state.problems.find((v) => v.id === parseInt(match.params.id)).description}
                    onChange={value => setInput(value)}
                />
                <FlexBox col style={
                    {
                        flexGrow: 4
                    }
                }>
                    <div style={{ height: '5%', flexShrink: 0 }}>
                        <ManipulationTab 
                        handleSubmitFile={handleSubmitFile} 
                        onChangeTheme={onChangeTheme} 
                        handleExportFile={handleExportFile} 
                        handleImportFile={handleImportFile} 
                        handleRun={handleRun}
                        />
                    </div>
                    <Editor theme={theme} onChange={value => setCode(value)} value={code} />
                    <div style={{
                        height: `${activeTerminal ? '50%' : 'auto'}`
                    }}>
                        <Terminal output={output} active={activeTerminal} toggleTerminal={() => setActiveTerminal(!activeTerminal)} />
                    </div>
                </FlexBox>
            </FlexBox>
        </Container>
    ) : 'Loding'
}

export default withRouter(Working)