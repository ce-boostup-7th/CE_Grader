import React from 'react'

import Terminal from '../src/components/Terminal'
import { storiesOf } from '@storybook/react';

const stories = storiesOf("Termainal",module)

stories.add("Terminal",()=>{
    return (
        <div style={{
            display:'flex',
            width:'100%',
            height:'400px'
        }}>
            <Terminal/>
        </div>
    )
})