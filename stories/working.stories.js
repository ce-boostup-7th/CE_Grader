import React from 'react'
import { storiesOf } from '@storybook/react';

import Working from '../src/page/WorkingPage'
import { withKnobs, number } from '@storybook/addon-knobs';


const stories = storiesOf("Working page",module)
stories.addDecorator(withKnobs)

stories.add("test",()=><div style={{
    height:'700px'
}}>
    <Working size1={number("size burgur",3)} size2={number("size breadcrumb",97)}/>
</div>)