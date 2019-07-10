import React from 'react'
import StateProvider from './StateProvider/StateProvider'
import MainWindows from './page/MainWindows'
import {Router} from 'react-router-dom'

import history from './history'

const App = () => {
	return (
		<Router history={history} >
			<StateProvider>
				<MainWindows />
			</StateProvider>
		</Router>
	)
}

export default App
