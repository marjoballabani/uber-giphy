import { shallow } from 'enzyme'
import React from 'react';
import { UnConnectedNavigation as Navigation } from '../Containers/Navigation';
import './setupTest.js'

describe('<Dashboard />', () => {
    global.scrollTo = jest.fn()
    let props, wrapper
    beforeEach(() => {
        props = {
            images: {data: []}
        }
        wrapper = shallow(<Navigation {...props}/>)
    })

    it('wrapper should match snapshot', () => {
        expect(wrapper)
            .toMatchSnapshot()
    })
    it('showd have the right properties', () => {
        const input = wrapper.find('input')
        expect(input).toBeDefined()
        expect(wrapper.state().search).toBe("")
        expect(wrapper.state().page).toBe(0)
        wrapper.setState({ search: "cat" });
        input.simulate("keyPress", { key: "enter" })
        expect(wrapper.state().page).toEqual(0)
    })
})
