import React from 'react';
import App from '../Views/contact';
import {create} from 'react-test-renderer';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { Button } from 'reactstrap';
import '../setupTest.js';

describe("Form Testing",()=>{
    test ("Matches the snapshot",()=>{
        const form = create(<App />);
        expect(form.toJSON()).toMatchSnapshot();        
    });
    
    test("calls sent method when Send button is clicked",()=>{
        const submitHandler = jest.fn();
        const wrapper = mount (<Button onClick = {submitHandler} />);
        const form = wrapper.find('Button');
        form.simulate('click');
        expect(submitHandler.mock.calls.length).toEqual(1);
    });    

    test('input check',()=>{
        let wrapper;
        window.alert = jest.fn();
        wrapper = shallow(<App />);
        wrapper.find('Input[type="text"]').simulate('change',{target:{name:'name',value:'testing'}});
        wrapper.find('Input[type="email"]').simulate('change',{target:{name:'email',value:'testing@gmail.com'}});
        wrapper.find('Input[type="text"]').simulate('change',{target:{name:'msg',value:'testing'}});
        expect(wrapper.state('name')).toEqual('testing');
        expect(wrapper.state('email')).toEqual('testing@gmail.com');
        expect(wrapper.state('msg')).toEqual('testing');
        wrapper.find('Button').simulate('click');
        expect(window.alert.mock.calls.length).toBe(1);       
    });

    });    








