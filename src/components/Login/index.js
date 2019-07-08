import React from 'react'

import styled, {ThemeProvider} from 'styled-components'
import {themes, WindowContent} from 'react95'
import {
	Div,
	ResetStyles,
	WindowHeaderStyled,
	WindowStyled,
	ButtonStyled,
	Spanstyled
} from './LoginStyle'
import Keys from '../../resource/icons/keys.png'

import {StateContext} from '../../StateProvider/StateProvider'
import {LOGIN} from '../../StateProvider/actions_constant'

const WindowContentStyled = styled(WindowContent)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Form = styled.form`
	display: inline-flex;
	flex-direction: column;
`

export default (props) => {
	const {state, dispatch} = React.useContext(StateContext)
	const handleLoggin = () => {
		dispatch({
			type: LOGIN
		})
		//some action
	}
	React.useEffect(()=>{
		if(state.isLogin){
		//some action
		}
	},[state.isLogin])
	return (
		<Div className="App">
			<ResetStyles />
			<ThemeProvider theme={themes.default}>
				<WindowStyled>
					<WindowHeaderStyled>
						<span style={{fontFamily: 'Press Start 2P, serif'}}>
							CE Boost Up by Veronica.exe
						</span>
						<ButtonStyled size={'sm'} square>
							<Spanstyled>x</Spanstyled>
						</ButtonStyled>
					</WindowHeaderStyled>
					<WindowContentStyled>
						<div>
							<img src={Keys} alt="key- icons" />
						</div>
						<Form>
							<Spanstyled style={{marginBottom: '3px'}}>Login name </Spanstyled>
							<input
								type="text"
								placeholder="USER_NAME"
								style={{marginBottom: '8px'}}
							/>
							<Spanstyled style={{marginBottom: '3px'}}>Password</Spanstyled>
							<input type="text" placeholder="USER_PASSWORD" />
						</Form>
						<Form>
							<ButtonStyled
								onClick={() => handleLoggin()}
								style={{marginBottom: '8px'}}>
								<Spanstyled>submit</Spanstyled>
							</ButtonStyled>
							<ButtonStyled>
								<Spanstyled>cancel</Spanstyled>
							</ButtonStyled>
						</Form>
					</WindowContentStyled>
				</WindowStyled>
			</ThemeProvider>
		</Div>
	)
}
