import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import qs from 'querystring'

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
                    language_id: 4,
                    src: code
                })
            })
            .then((res) => res.status)
            .then(status => { if (status === 201) alert('submit success!') })
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
                <DetailBar testcase={testcase} detail={state.problems.find((v) => v.id === parseInt(match.params.id)).description} />
                <FlexBox col style={
                    {
                        flexGrow: 4
                    }
                }>
                    <div style={{ height: '5%', flexShrink: 0 }}>
                        <ManipulationTab handleSubmitFile={handleSubmitFile} onChangeTheme={onChangeTheme} handleExportFile={handleExportFile} handleImportFile={handleImportFile} />
                    </div>
                    <Editor theme={theme} onChange={value => setCode(value)} value={code} />
                    <div style={{
                        height: `${activeTerminal ? '50%' : 'auto'}`
                    }}>
                        <Terminal active={activeTerminal} toggleTerminal={() => setActiveTerminal(!activeTerminal)} />
                    </div>
                </FlexBox>
            </FlexBox>
        </Container>
    ) : 'Loding'
}

export default withRouter(Working)