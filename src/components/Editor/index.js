import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import "brace/ext//language_tools"
import "brace/mode/c_cpp"
import "brace/snippets/c_cpp"
import "brace/theme/monokai"
import "brace/theme/github"
import "brace/theme/xcode"
import "brace/theme/dracula"

export default ({
    theme = "monokai",
    value = ''
}) => {
    return (
        <AceEditor
            placeholder="Start coding here!"
            mode="c_cpp"
            theme={theme}
            name="CE BoostUp"
            defaultValue={
`#include<iostream>

int main(){
    std::cout<<"Hello CE"<<std::endl;
    return 0;
}
`
            }
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
        />
    )
}