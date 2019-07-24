import React from 'react'
import { LineChart, Line, Tooltip, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const pop = [
    { name: 'Day 1', submission_count: 18 },
    { name: 'Day 2', submission_count: 0 },
    { name: 'Day 3', submission_count: 0 },
    { name: 'Day 4', submission_count: 0 },
    { name: 'Day 5', submission_count: 0 },
    { name: 'Day 6', submission_count: 0, },
    { name: 'Day 7', submission_count: 0 },
];
const ActivnessChart = ({ data }) => {
    const mapData = () => {
        return data.map((value, index) => {
            return {
                day: `Day ${index + 1}`,
                submission_count: value.submission_count
            }
        })
    }
    let [state, setState] = React.useState(data)
    return (
        <div style={{ width: '80%', height: '100%' }}>
            <ResponsiveContainer>
                <LineChart data={mapData(state)}>
                    <Tooltip />
                    <defs>
                        <linearGradient id="activechart" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1D976C" />
                            <stop offset="100%" stopColor="#93F9B9" />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke='none' />
                    <Line isAnimationActive type="linear" dataKey="submission_count" dot={false} strokeWidth={4} stroke="url('#activechart')" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ActivnessChart