import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import Form from "../components/Form";

describe('Test component <From /> for login', () => {

    const login = e => {}

    const wrapper = shallow(
        <Form
            submit={login}
            bgColor="transparent" 
            titleButton="Acceder!" 
            title="Bienvenido"
        >

        </Form>
        )

    test('Should render <From />', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Should have tittles', () => {
        const tittle = wrapper.find('#tittle').text()
        expect(tittle).toBe("Bienvenido")
        const tittleButton = wrapper.find('#button').text()
        expect(tittleButton).toBe("Acceder!")
    })
})