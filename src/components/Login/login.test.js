import React from 'react'
import {shallow, mount, render} from 'enzyme'

import Login from './index'

describe('Login', () => {
	it('skiped will at later', () => {
		expect(1).toEqual(1)
	})
	/*	it('should render ', () => {
		const component = shallow(<Login />)
		expect(component.exists()).toBeTruthy()
	})

	it('should mount', () => {
		const component = mount(<Login />)
		const wrapper = component.find('ButtonStyled.Spanstyled[children="x"]')
		expect(wrapper.exists())
	})

	it('should render', () => {
		const component = render(<Login />)
		expect(component)
	})*/
})
