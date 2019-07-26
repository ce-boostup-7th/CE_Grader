import React from 'react'
import { BarChart, Bar, Label, YAxis, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const pop = [
    { name: 'Basic', complete: 100},
    { name: 'Condition', complete: 20},
    { name: 'Loop', complete: 30},
    { name: 'Funtion', complete: 40}
];

const CustomTooltip = ({ active, payload, label })=>{
    if (active) {
        return (
          <div style={{
              background:'rgba(255,255,255,1)',
              color:'black',
              padding:'5px'
          }} >
            <p style={{fontSize:16}}>{`${label}`}</p>
            <p style={{fontSize:14}} >{`Complete: ${ payload[0].value } %`}</p>
          </div>
        );
      }
    
      return null;
}

const ChapterChart = ({ data=pop }) => {
    const mapData = ()=>{
        return data.map((value)=>{
            return {
                name:mapCategoryId(value.category_id),
                complete:parseInt(value.completed*100/value.all)
            }
        })
    }
    const mapCategoryId =(id)=>{
        switch(id){
            case 1:
                return 'Basic'
            case 2:
                return 'Condition'
            case 3:
                return 'Loop'
            case 4:
                return 'Funtion'
            default :
                break;
        }
    }
    return (
        <ResponsiveContainer width="100%" height="50%">
            <BarChart data={mapData(data)}>
                <defs>
                    <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4DEEFD" />
                        <stop offset="26.1%" stopColor="#0397E8" />
                        <stop offset="100%" stopColor="#2F1F74" />
                    </linearGradient>
                </defs>
                <Bar barSize={40} fill="url(#colorUv)" dataKey="complete" />
                <Tooltip cursor={false} content={<CustomTooltip/>} />
                <XAxis height={50} dataKey="name">
                    <Label style={{ fill: 'rgba(255, 255, 255, 0.50)' }} value="Chapter" position="insideBottom" />
                </XAxis>
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ChapterChart