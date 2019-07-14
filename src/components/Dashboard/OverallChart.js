import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts'

const pop = [
    {
        name: 'success', value: 43, fill: '#1bcc82',
    },
    {
        name: 'in progress', value: 27, fill: '#db5c5c',
    },
    {
        name: 'now worked', value: 30, fill: '#ababab',
    }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`${value}%`}</text>
        </g>
    );
};

const OverrallChart = ({ }) => {
    let [activeIndex, setActiveIndex] = React.useState(0)
    const onPieEnter = (data, index) => {
        setActiveIndex(index)
    }
    return (
        <ResponsiveContainer height="45%" width="99%">
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={pop}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    onMouseEnter={onPieEnter}
                    stroke={'none'}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default OverrallChart