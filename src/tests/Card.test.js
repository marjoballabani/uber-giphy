import React from 'react';
import Card from '../Components/Card';
import renderer from 'react-test-renderer';

let props, card
beforeEach(() => {
    props = {
        img: {
            images: { downsized_medium: {url: "test url"}},
            title: "test title",
            id: 1
        }
    }
    card = renderer.create(<Card {...props}/>)
})

it('wrapper should match snapshot', () => {
expect(card)
    .toMatchSnapshot()
})
