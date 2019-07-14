import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Button, themes,Select } from 'react95'

import cpp from '../../resource/icons/cpp.png'
import play from '../../resource/icons/play.png'

const Container = styled.div`
display:flex;
flex-direction:row;
background:#e2e2e2;
height:100%;
`

const Box = styled.div`
width:${props => props.width}%;
height:inherit;
line-height:30px;
`
const NameBox = styled(Box)`
background:${({color})=>color};
color:${({textcolor})=>textcolor};
border-top-right-radius:5px;
border-top-left-radius:5px;
display:inherit;
`
const Icon = styled.div`
	padding: 5px;
	height: 32px;
	width: 32px;
	content: url(${props => props.icon});
`

const Group = styled.div`
display:inherit;
margin-left:auto;
`
const handleImport= (value)=>{
    console.log('import')
}
const handleSubmit=(value) =>{
    console.log('submit')
}

const handleExport=(value)=>{
    console.log('export')
}
const handleRunTest=(value)=>{
    console.log('run')
}

export default ({handleRun=handleRunTest,onChangeTheme,handleExportFile=handleExport,handleSubmitFile=handleSubmit,handleImportFile=handleImport}) => {
    const ref = React.createRef()
    const [localtheme,setLocalTheme] = React.useState('monokai')
    const handleClick = () => {
        ref.current.click()
    }
    const ChangeTheme =(value)=>{
        setLocalTheme(value)
        onChangeTheme(value)
    }
    const renderTheme=()=>{
        switch (localtheme) {
            case 'monokai':
                return '#272822'
            case 'dracula':
                return '#282a36'
            default:
                return 'white'
        }
    }
    const renderText=()=>{
        if(localtheme==='monokai'||localtheme==='dracula'){
            return 'white'
        }else{
            return 'black'
        }
    }
    const items=[{
        value:'monokai',label:'monokai',
    },
    {
        value:'github',label:'github'
    },
    {
        value:'xcode',label:'xcode'
    },
    {
        value:'dracula',label:'dracula'
    }
]
    return (
        <Container>
            <NameBox textcolor={renderText()} color={renderTheme()} width={20}><Icon icon={cpp} />{'  '}main.cpp</NameBox>
            <Box width={30} />
            <ThemeProvider theme={themes.default}>
                <Group>
                    <Select  items={items} onChange={value=>ChangeTheme(value)}  width={150} />
                    <Box><Button onClick={() => handleClick()}><input onChange={e=>handleImportFile(e.target.files[0])} ref={ref} type="file" accept=".cpp" style={{ display: 'none' }} />Import</Button></Box>
                    <Box><Button onClick={() => handleSubmitFile()}>Submit</Button></Box>
                    <Box><Button onClick={() => handleExportFile()}>Export</Button></Box>
                    <Box><Button onClick={()=>handleRun()}><Icon icon={play} /></Button></Box>
                </Group>
            </ThemeProvider>
        </Container >
    )
}