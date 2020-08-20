import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import Home from '../pages/Home/Home';

describe('Test page <Home />', () => {
    const wrapper = shallow(<Home /> )
    test('Should render <Home />', () => {
        expect(wrapper).toMatchSnapshot()
    })
})