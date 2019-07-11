import {color} from 'd3-color'
import {interpolateRgb} from 'd3-interpolate'
import React, {Component} from 'react'
import LiquidFillGauge from 'react-liquid-gauge'

export const GaugeComplete = () => {
	const init = {
		value: '50',
		startColor: '#6495ed', // cornflowerblue
		endColor: '#dc143c'
	}
	const [datas, setDatas] = React.useState(init)
	const radius = 150
	const interpolate = interpolateRgb(datas.value, datas.endColor)
	const fillColor = interpolate(datas.value / 100)
	const gradientStops = [
		{
			key: '0%',
			stopColor: color(fillColor)
				.darker(0.5)
				.toString(),
			stopOpacity: 1,
			offset: '0%'
		},
		{
			key: '50%',
			stopColor: fillColor,
			stopOpacity: 0.75,
			offset: '50%'
		},
		{
			key: '100%',
			stopColor: color(fillColor)
				.brighter(0.5)
				.toString(),
			stopOpacity: 0.5,
			offset: '100%'
		}
	]

	return (
		<div>
			<LiquidFillGauge
				style={{margin: '0 auto'}}
				width={radius * 2}
				height={radius * 2}
				value={datas.value}
				percent="%"
				textSize={1}
				textOffsetX={0}
				textOffsetY={0}
				riseAnimation
				waveAnimation
				waveFrequency={2}
				waveAmplitude={1}
				gradient
				gradientStops={gradientStops}
				circleStyle={{
					fill: fillColor
				}}
				waveStyle={{
					fill: fillColor
				}}
				textStyle={{
					fill: color('#444').toString(),
					fontFamily: 'Arial'
				}}
				waveTextStyle={{
					fill: color('#fff').toString(),
					fontFamily: 'Arial'
				}}
			/>
		</div>
	)
}
