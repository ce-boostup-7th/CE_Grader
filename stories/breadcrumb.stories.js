import React from 'react'

import Breadcrumb from '../src/components/BreadcrumbsLink'
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf("breadcrumbs",module)

stories.addDecorator(withKnobs)
stories.add("with dynamic var",()=>{
    return (
        <Breadcrumb destination={text("detination","quiz1")} location={text("location","quize")} />
    )
})