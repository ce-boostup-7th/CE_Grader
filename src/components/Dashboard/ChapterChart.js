import React from 'react'
import { BarChart, Bar, Label, YAxis, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const pop = [
    { name: '1', uv: 100, pv: 2400, amt: 2400 },
    { name: '2', uv: 20, pv: 1398, amt: 2210 },
    { name: '3', uv: 30, pv: 9800, amt: 2290 },
    { name: '4', uv: 40, pv: 3908, amt: 2000 },
    { name: '5', uv: 5, pv: 4800, amt: 2181 },
    { name: '6', uv: 24, pv: 3800, amt: 2500 },
    { name: '7', uv: 32, pv: 4300, amt: 2100 },
    { name: '8', uv: 86, pv: 9800, amt: 2290 },
    { name: '9', uv: 71, pv: 3908, amt: 2000 },
    { name: '10', uv: 13, pv: 4800, amt: 2181 },
    { name: '11', uv: 2, pv: 3800, amt: 2500 },
];

const ChapterChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="50%">
            <BarChart data={pop}>
                <defs>
                    <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4DEEFD" />
                        <stop offset="26.1%" stopColor="#0397E8" />
                        <stop offset="100%" stopColor="#2F1F74" />
                    </linearGradient>
                </defs>
                <Bar barSize={18} fill="url(#colorUv)" dataKey="uv" />
                <Tooltip cursor={false} />
                <XAxis height={50} dataKey="name">
                    <Label style={{ fill: 'rgba(255, 255, 255, 0.50)' }} value="Chapter" position="insideBottom" />
                </XAxis>
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ChapterChart