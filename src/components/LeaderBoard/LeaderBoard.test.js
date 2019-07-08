import React from 'react'
import {shallow, mount, render} from 'enzyme'

import LeaderBoard from './index'

describe('LeaderBoard', () => {
	it('should render ', () => {
		const component = shallow(<LeaderBoard />)
		expect(component.exists()).toBeTruthy()
	})

	it('should mount', () => {
		const component = mount(<LeaderBoard />)
		const wrapper = component.find('ButtonStyled.Spanstyled[children="x"]')
		expect(wrapper.exists())
	})

	it('should render', () => {
		const component = render(<LeaderBoard />)
		expect(component)
	})
})
