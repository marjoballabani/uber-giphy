import { shallow } from 'enzyme'
import React from 'react';
import { UnConnectedDashboard as Dashboard } from '../Components/Dashboard';
import './setupTest.js'
describe('<Dashboard />', () => {
    let props, wrapper
    beforeEach(() => {
        props = {
            images: {data: [{
                images: { downsized_medium: {url: "test url"}},
                title: "test title",
                id: 1
            }]}
        }
        wrapper = shallow(<Dashboard {...props}/>)
    })

    it('wrapper should match snapshot', () => {
        expect(wrapper)
            .toMatchSnapshot()
    })
    it('showd have the right properties', () => {
        const card = wrapper.find('Card')
        const cardProps = wrapper.find('Card').props()
        expect(card.length).toEqual(1)
        expect(cardProps.img).toBeDefined()
        wrapper.setProps({ images: {data: []} })
        expect(wrapper.find('Card')).toEqual({})
    })
})
