import React from 'react'
import { LineChart, Line, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts'

const pop = [
    { name: 'Page A', submission_count: 18 },
    { name: 'Page B', submission_count: 0 },
    { name: 'Page C', submission_count: 0 },
    { name: 'Page D', submission_count: 0 },
    { name: 'Page E', submission_count: 0 },
    { name: 'Page F', submission_count: 0,},
    { name: 'Page G', submission_count: 0 }
];
const ActivnessChart = ({ data }) => {
    return (
        <ResponsiveContainer height="100%" width="80%">
            <LineChart data={pop}>
                <Tooltip />
                <defs>
                    <linearGradient id="activechart" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1D976C" />
                        <stop offset="100%" stopColor="#93F9B9" />
                    </linearGradient>
                </defs>
                <Line type="linear" dataKey="submission_count" dot={false} strokeWidth={4} stroke="url('#activechart')" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ActivnessChart