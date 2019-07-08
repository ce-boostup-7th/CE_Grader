import React from 'react'
import { select, withKnobs } from '@storybook/addon-knobs'

import Editor from '../src/components/Editor'
import { storiesOf } from '@storybook/react';

const stories = storiesOf("Editor", module)

stories.addDecorator(withKnobs)
stories.add("with theme option", () => {
    return <Editor theme={
        select('theme props', {
            github: "github",
            xcode: "xcode",
            dracular: "dracula",
            monkai: "monokai",
        })
    } />
})