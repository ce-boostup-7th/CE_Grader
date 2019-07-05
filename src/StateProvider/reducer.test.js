import {initialState} from './StateProvider'

import reducer from './reducer'

describe('reducer', () => {
	it('Should return default state', () => {
		expect(reducer(initialState, {})).toEqual(initialState)
	})
})
