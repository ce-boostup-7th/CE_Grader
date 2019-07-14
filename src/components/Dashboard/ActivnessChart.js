import React from 'react'
import {   LineChart, Line, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts'

const pop = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
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
                <Line type="linear" dataKey="pv" dot={false} strokeWidth={4} stroke="url('#activechart')" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ActivnessChart