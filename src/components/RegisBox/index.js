import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {
	WindowContent,
	Window,
	themes,
	WindowHeader,
	TextField,
	Button,
	Fieldset
} from 'react95'

const Container = styled.div`
	display: flex;
	flex: 1 auto;
	flex-flow: column nowrap;
	max-width: 300px;
	max-height: 500px;
`

const RegisWin = styled(Window)`
	flex: 1 auto;
`

const RegisHead = styled(WindowHeader)`
	display: flex;
	flex: 1 auto;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
`

const RegisContent = styled(WindowContent)`
	display: flex;
	flex-flow: column nowrap;
	flex: 1 auto;
	margin: 1 auto;
`

const RegisField = styled(Fieldset)`
	display: flex;
	justify-content: center;
	flex-flow: column nowrap;
	align-items: center;
`

const RegisTopic = styled.span`
	align-self: flex-start;
	margin-top: 10px;
	margin-bottom: 10px;
	font-weight: bolder;
`
import {Icon} from '@react95/core'
export default () => {
	return (
		<ThemeProvider theme={themes.default}>
			<Container>
				<RegisWin>
					<RegisHead>
						<span style={{fontWeight: 'bold'}}>Registery</span>
						<Button square size={'sm'}>
							<span style={{fontWeight: 'bold', paddingBottom: '2px'}}>x</span>
						</Button>
					</RegisHead>
					<RegisContent>
						<RegisField>
							<form
								style={{
									display: 'flex',
									flexFlow: 'column nowrap',
									alignItems: 'center'
								}}>
								<Icon name={'computer'} style={{justifySelf: 'center'}} />
								<RegisTopic>User name</RegisTopic>
                                <TextField defaultValue="" onChange={(e) => {console.log(e.target.value) }}/>
								<RegisTopic>Email</RegisTopic>
								<TextField defaultValue="" />
								<RegisTopic>Password</RegisTopic>
								<TextField defaultValue="" type="password"/>
								<Button style={{marginTop: '10px'}} type="submit">
									Submit
								</Button>
							</form>
						</RegisField>
					</RegisContent>
				</RegisWin>
			</Container>
		</ThemeProvider>
	)
}
