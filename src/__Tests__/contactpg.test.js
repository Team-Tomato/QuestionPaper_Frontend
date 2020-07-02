import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../Views/contact';
import {create} from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Button } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

describe("Form Testing",()=>{
    test ("Matches the snapshot",()=>{
        const form = create(<App />);
        expect(form.toJSON()).toMatchSnapshot();        
    });

    test("calls sent method when send button is clicked",()=>{
        const submitHandler=jest.fn();
        const wrapper = mount (<Button onClick={submitHandler}/>);
        const form = wrapper.find('Button');
        form.simulate('click');
        expect(submitHandler.mock.calls.length).toEqual(1);
    });

    test('checking inputs',()=>{
        let wrapper;
        window.alert = jest.fn();
        wrapper=shallow(<App />);
        wrapper.find('StyledTextField').at(0).simulate('change',{target:{name:'name',value:'testing'}});
        wrapper.find('StyledTextField[type="email"]').at(1).simulate('change',{target:{name:'email',value:'testing@gmail.com'}});
        wrapper.find('StyledTextField[type="text"]').at(2).simulate('change',{target:{name:'msg',value:'testing'}});
        expect(wrapper.state('name')).toEqual('testing');
        expect(wrapper.state('email')).toEqual('testing@gmail.com');
        expect(wrapper.state('msg')).toEqual('testing');
        wrapper.find('Button').simulate('click');
        expect(window.alert.mock.calls.length).toBe(1);
    });

});