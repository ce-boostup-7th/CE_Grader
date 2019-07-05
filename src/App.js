import React from 'react'

import StateProvider from './StateProvider/StateProvider'
import MainWindows from './page/MainWindows'

const App = () => {
	return (
		<StateProvider>
			<MainWindows />
		</StateProvider>
	)
}

export default App
