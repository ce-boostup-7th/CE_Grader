import React from 'react'
import { AreaChart, XAxis, Area, ReferenceDot, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const pop = [
    { name: 'Page A', amount: 2400 },
    { name: 'Page B', amount: 1398 },
    { name: 'Page C', amount: 9800 },
    { name: 'Page D', amount: 3908 },
    { name: 'Page E', amount: 4800 },
    { name: 'Page F', amount: 3800 },
    { name: 'Page G', amount: 4300 },
];

const PositionChart = ({ data = pop }) => {
    const mapData = () => {
        return data.map((value) => ({
            name: `${value.start}%-${value.stop}%`,
            amount: value.amount
        }))
    }
    return (
        <ResponsiveContainer height="100%" width="80%">
            <AreaChart data={mapData(data)}>
                <Tooltip />
                <defs>
                    <linearGradient id="positionchart" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8E2DE2" />
                        <stop offset="100%" stopColor="#4A00E0" />
                    </linearGradient>
                </defs>
                <Area type="linear" dataKey="amount" strokeWidth={0} fill="url('#positionchart')" />
                <ReferenceDot x="Page C" y={9800} r={3} fill={'red'} />
                <XAxis dataKey="name" stroke='none' />
                <CartesianGrid fillOpacity={0.1} stroke="#6c7687" vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default PositionChart