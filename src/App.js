import React from 'react'

import StateProvider from './StateProvider/StateProvider'
import MainWindows from './page/MainWindows'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<StateProvider>
				<MainWindows />
			</StateProvider>
		</BrowserRouter>
	)
}

export default App
