import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/ext//language_tools'
import 'brace/mode/c_cpp'
import 'brace/snippets/c_cpp'
import 'brace/theme/monokai'
import 'brace/theme/github'
import 'brace/theme/xcode'
import 'brace/theme/dracula'

export default ({ setActiveTerminal, fontSize, onChange, theme = 'monokai', value = `#include<iostream>

int main(){
    std::cout<<"Hello CE"<<std::endl;
    return 0;
}
` }) => {
	return (
		<AceEditor
			placeholder="Start coding here!"
			mode="c_cpp"
			theme={theme}
			name="CE BoostUp"
			value={value}
			fontSize={fontSize}
			showPrintMargin={true}
			showGutter={true}
			highlightActiveLine={true}
			onChange={text => onChange(text)}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
				showLineNumbers: true,
				tabSize: 4
			}}
			editorProps={{
				$blockScrolling: Infinity
			}}
			width={'100%'}
			height={'100%'}
			onFocus={() => setActiveTerminal()}
			
		/>
	)
}
