import React from 'react'

import { storiesOf } from '@storybook/react';
import DataTable from '../src/components/DataTable'
import { withKnobs, object, array } from '@storybook/addon-knobs';

const stories = storiesOf('datatable', module);

stories.addDecorator(withKnobs);

const data = [
    {
        status: "PASS",
        order: "0001",
        name: "Problem1",
        level: 5,
        topic: "ex.1",
        pass: "wdw"
    }
]
// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
    return <DataTable data={object('data', data)}></DataTable>
})
