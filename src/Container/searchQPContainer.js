import React, { Component } from 'react';
import {
  Card, CardBody, CardFooter
} from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import FormQP from '../Component/searQPForm.js'
import '../style.css'

class SearchQP extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            url: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

   

    async handleSubmit(event, query) {
        this.setState({
            loading: true
        })
        event.preventDefault()
        let url = 'http://localhost:8080/api/v1/teamtomato/';
        await fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
            },
            body: JSON.stringify({
                "keyword": query
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Network response was not ok.')
        }).then(response => {
            this.setState({
                url: response.data,
                loading: false
            })
            console.log(response, this.state.url)
        })
    }

    render() {
        let QPContainer
        let urls = []
        urls = this.state.url.map((images, index) => (
            <Col lg={3} md={4} sm={12} key={index} className='cardPadding'>
            <Card>
            <header align="center" className="header">Subject name</header>
            <img className=" img-align" src={images} alt="Card image cap"/>
            <footer align="center" className="footer">Staff name</footer>
            </Card>
            </Col>
        ))
        if (this.state.loading === false) {
            QPContainer =
                <Container>
                    <Row>
                        {urls}
                    </Row>
                </Container>
        }
        else {
            QPContainer = <div></div>
        }

        return (
            <div>
                <FormQP handleSubmit={this.handleSubmit.bind(this)} />
                <br/>
                {QPContainer}
            </div>
        )
    }
}

export default SearchQP;