import React from 'react';
import Card from '../Components/Card';
import { shallow } from 'enzyme'
import './setupTest.js'

describe('<Card />', () => {
    let props, wrapper
    beforeEach(() => {
        props = {
            img: {
                images: { downsized_medium: {url: "test url"}},
                title: "test title",
                id: 1
            }
        }
        wrapper = shallow(<Card {...props}/>)
    })

    it('wrapper should match snapshot', () => {
        expect(wrapper)
            .toMatchSnapshot()
    })
    
    it('showd have the right properties', () => {
        const cardProps = wrapper.find('img').props()
        expect(cardProps.src).toBeDefined()
        expect(cardProps.src).toBe("test url")
        expect(cardProps.alt).toBe("test title")
    })
})
