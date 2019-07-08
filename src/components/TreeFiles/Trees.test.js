import React from 'react'
import {shallow, mount, render} from 'enzyme'

import Trees from './index'

describe('Trees', () => {
	it('should render ', () => {
		const component = shallow(<Trees />)
		expect(component.exists()).toBeTruthy()
	})

	it('should mount', () => {
		const component = mount(<Trees />)
		const wrapper = component.find('ButtonStyled.Spanstyled[children="x"]')
		expect(wrapper.exists())
	})

	it('should render', () => {
		const component = render(<Trees />)
		expect(component)
	})
})
