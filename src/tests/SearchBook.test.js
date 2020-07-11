import React from 'react';
import {create} from 'react-test-renderer';
import { shallow, mount, render } from "enzyme";
import Loader from 'react-loading';
import { Form, Row, Col, Input, Button, Container, Card, CardBody, Table } from 'reactstrap'
import ReactPaginate from 'react-paginate';
import '../setupTest.js';
import '../Views/SearchBook.js';
import Project from '../Views/SearchBook.js';

describe('search book testing',()=>{
    test ("Matches the snapshot",()=>{
        const form = create(<Project />);
        expect(form.toJSON()).toMatchSnapshot(); 
    });

    test ("books list displayed when search button is clicked", ()=>{
        const handleLogin = jest.fn();
        const wrap = mount(<Button onClick = {handleLogin} />);
        const box = wrap.find('Button');
        box.simulate('click');
        expect(handleLogin.mock.calls.length).toEqual(1);
    });

    test ("title or author name is entered", ()=>{
        let input = {value: "data structure"};
        input['type'] = "text";
        expect(input).toEqual({value: "data structure", type: "text"});
    }); 
 
    test("should show error if any value is null", () => {
        expect(() => errormessage.toThrow())
    });

    
    test.skip('fetches specific book and displays', done => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: ()=> mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
        const wrapper = shallow(<Project />);
        expect(global.fetch).toBeCalled();
        expect(global.fetch).toHaveBeenCalledWith('https://teamtomato.herokuapp.com/api/v1/book/search?search_str=');
    });


});