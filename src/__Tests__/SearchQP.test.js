import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

import SearchQP from '../Views/searchQP';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })
fetchMock.enableMocks();

describe('Testing Search Qp page',()=>{
    test('Matches snapshots',()=>{
        const snap=create(<SearchQP />);
        expect(snap.toJSON()).toMatchSnapshot();
    });
    test.skip('testing input',()=>{
        const QP = mount(<SearchQP  />)
        const container = QP.find('Container');
        expect(container).toHaveLength(2);
        let card = container.find('Card');
        expect(card).toHaveLength(1);
        let card_body = card.find('CardBody'); 
        expect(card_body).toHaveLength(1);
        let form = card_body.find('Form').find('Row');
        expect(form).toHaveLength(1);
        let col = form.find('Col');
        expect(col).toHaveLength(2);
        const inp = col.at(0).find('StyledTextField');
        expect(inp).toHaveLength(1);
        inp.simulate('change',{
            target:{
                value: 'testing'
            }
        })
        expect(inp).toBe('testing');
        //.getDOMNode().value = 'testing';
        //QP.find('StyledTextField').simulate('change');
        //expect(inp).toEqual('testing');        
    });
    test('testing year button',()=>{
        const qp = mount(<SearchQP></SearchQP>);
        const container = qp.find('Container');
        expect(container).toHaveLength(2);
        const row =container.find('Row');
        expect(row).toHaveLength(2);
        const col = row.find('Col');
        expect(col).toHaveLength(6);
        const a = col.find('a');
        expect(a).toHaveLength(4);
        let ref = a.at(0).prop('href');
        let name = a.at(0).find("Button");
        //expect(name).toHaveLength(1);
        //expect(name.text()).toEqual('2018-2023');
        expect(ref).toEqual("https://github.com/Team-Tomato/Learn/blob/master/QP%20Data/2018batch.md");
        //expect(document.querySelector("a").getAttribute("href").toBe("https://github.com/Team-Tomato/Learn/blob/master/QP%20Data/2017batch.md"));
    }); 
    test('Calling Onsubmit method',()=>{
        const qp = mount(<SearchQP />);
        const preventDefault = jest.fn();
        const query = 'Testing';
        qp.setState({
            query
        });
        qp.find('Form').simulate('submit',{preventDefault});
        expect(preventDefault).toBeCalled();
    });   
});


describe("Fetching data using jest-fetch-mock",()=>{
    const handlesubmit = jest.fn('submit','Testing');
    test('on successful fetch request',async ()=>{
        fetch.mockResponse(()=>handlesubmit().then(res=> 'ok'));

        //const query = 'Testing';
    //    const data = await handlesubmit('submit', 'Testing');
    //    expect(handlesubmit).toBeCalledTimes(1);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith("https://teamtomato.herokuapp.com/api/v1/question/search?search_str=", {
            "method" : 'GET',
            "headers" : {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
            }
        });
    })
    test('on a failed fetch request', async()=>{
        fetch.mockReject(()=>handlesubmit().then(res => Promise.reject(new Error('Network response was not ok.'))))
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith("https://teamtomato.herokuapp.com/api/v1/question/search?search_str=", {
            "method" : 'GET',
            "headers" : {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
            }
        })  
    })
})
