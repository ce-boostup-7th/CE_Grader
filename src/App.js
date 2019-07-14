import React from 'react'
import StateProvider from './StateProvider/StateProvider'
import MainWindows from './page/MainWindows'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider, withCookies } from 'react-cookie'

const App = ({cookies}) => {
	return (
		<CookiesProvider> 
			<BrowserRouter>
				<StateProvider>
					<MainWindows cookies={cookies} />
				</StateProvider>
			</BrowserRouter>
		</CookiesProvider>
	)
}

export default withCookies(App)
