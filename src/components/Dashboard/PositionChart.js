import React from 'react'
import { AreaChart, XAxis, Area, ReferenceDot, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const pop = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const PositionChart = ({ data }) => {
    return (
        <ResponsiveContainer height="100%" width="80%">
            <AreaChart data={pop}>
                <Tooltip />
                <defs>
                    <linearGradient id="positionchart" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8E2DE2" />
                        <stop offset="100%" stopColor="#4A00E0" />
                    </linearGradient>
                </defs>
                <Area type="linear" dataKey="pv" strokeWidth={0} fill="url('#positionchart')" />
                <ReferenceDot x="Page C" y={9800} r={3} fill={'red'} />
                <XAxis dataKey="name" stroke='none' />
                <CartesianGrid fillOpacity={0.1} stroke="#6c7687" vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default PositionChart