import React, { useState, useContext } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { themes, WindowContent, Window, reset, Divider, Button } from 'react95'
import Icon from '@react95/core/Icon'
import { withRouter } from 'react-router-dom'

import display from '../../resource/img/display.jpg'
import { StateContext } from '../../StateProvider/StateProvider'
import TreeFiles from '../TreeFiles'

const ResetStyles = createGlobalStyle`
  ${reset}
`
const Circle = styled.span`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background: green;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-box-shadow: 1.5px 1.5px 0px 0px #000000;
	box-shadow: 1.5px 1.5px 0px 0px #000000;
`
const SideNave = (props) => {
	let { state, dispatch } = useContext(StateContext)
	const handleLogout = e => {
		fetch('//ce.19991999.xyz/api/logout', {
			method: 'POST'
		})
			.then(res => res.status)
			.then(status => {
				if (status === 200) {
					props.onLogout()
					props.history.push('/')
				}
			}
			)
	}
	const renderRank = (data) => {
		let rank;
		let temp = [...data.users]
		temp.sort((a, b) => b.score - a.score)
		rank = temp.findIndex((v) => v.username === data.statistics.name)
		return rank + 1;
	}
	const renderPass = (data) => {
		let divider = data.statistics.overall.reduce((sum,item)=>{
			return sum+item.amount
		},0)
		let substuit = data.statistics.overall[0].amount
		return (substuit*100/divider).toFixed(2)
	}
	const renderQuiz =(data)=>{
		return data.statistics.overall[0].amount
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<ResetStyles />

			<ThemeProvider theme={themes.default}>
				<Window
					style={{
						width: '350y',
						height: '100vh'
					}}>
					<WindowContent
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'center',

						}}>
						<div style={{ fontWeight: 'bold' }}>{state.statistics.name} </div>
						<Button style={{ position:'absolute',right:'10px' }} onClick={handleLogout} square>
							<Icon name={'reader_eject'} />
						</Button>
					</WindowContent>
					<Divider />
					<WindowContent
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}>
						<div
							style={{
								width: '100px',
								height: '100px',
								position: 'relative',
								overflow: 'hidden',
								borderRadius: '50%',
								WebkitBoxShadow: '1.5px 1.5px 0px 0px #000000',
								boxShadow: '1.5px 1.5px 0px 0px #000000'
							}}>
							<img
								src={display}
								alt="พี่หล่อจัด "
								style={{
									display: 'inline',
									margin: '0 auto',
									marginLeft: '-25%',
									height: '100%',
									width: 'auto'
								}}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignContent: 'center',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									paddingBottom: '15px'
								}}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginRight: '40px'
									}}>
									<span>#{renderRank(state)}</span>
									<span>rank</span>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginRight: '40px'
									}}>
									<span>{renderPass(state)}%</span>
									<span>Pass</span>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginRight: '10px'
									}}>
									<span>{renderQuiz(state)}</span>
									<span>quiz</span>
								</div>
							</div>
							<Button
								style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Circle />
								<span style={{ paddingLeft: '5px' }}>
									online
								</span>
							</Button>
						</div>
					</WindowContent>
					<Divider />
					<WindowContent>
						<TreeFiles />
					</WindowContent>
				</Window>
			</ThemeProvider>
		</div>
	)
}
export default withRouter(SideNave)