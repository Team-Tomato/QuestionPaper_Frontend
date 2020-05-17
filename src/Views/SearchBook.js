import React, { Component } from 'react';
import '../Styles/style.css'
import Loader from 'react-loading';
import { Form, Row, Col, Input, Button, Container, Card, CardBody, CardDeck } from 'reactstrap'

class Project extends Component {
    state = {
        query: '',
        loading: false,
        title: [],
        person: []
    }

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value,
            title: []
        });
    };

    async search(query) {
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + query
        const response = await fetch(url)
        console.log(response)
        const data = await response.json();
        this.setState({ person: data })
        for (var i = 0; i < 10; i++) {
            var authored = this.state.person.items[i].volumeInfo;
            this.state.title.push(authored)
            this.setState({ loading: false })
        }
    }

    handleLogin = e => {
        const query = this.state.query
        this.setState({ loading: true })
        this.search(query)
    }

    render() {
        return (
            <div>
                <Card className="gradient">
                    <CardBody className="welcome-title" style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white'
                    }}>
                        <h5>Books destination for Integrated students</h5>
                    </CardBody>
                </Card>
                <br />
                <Container>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col sm={6} md={8} lg={10}>
                                        <Input type="text" placeholder="Enter the Title or Author name" onChange={this.onChange} />
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <Button style={{ backgroundColor: "violet" }} variant="contained" block onClick={this.handleLogin}>Search</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                    <div>
                    </div>
                </Container>
                {this.state.loading || !this.state.title ? (
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}><Loader type={"bars"} color={"black"} /></div>
                ) : (
                        <Container>
                            <Row>
                                {
                                    this.state.title.map((images, index) => (
                                        <Col key={index} xs={12} sm={3}>
                                            <CardDeck>
                                                <Card className="search-card">
                                                    <img className=" img-align" src={images.imageLinks.thumbnail} alt="Card image cap" />
                                                    <header className="header">{images.authors}</header>
                                                    <footer className="footer">{images.title}</footer>
                                                    <a href="https://www.google.com"><i className="fa fa-download a"></i></a>
                                                </Card>
                                            </CardDeck>
                                        </Col>
                                    ))}
                            </Row>
                        </Container>
                    )}

            </div>
        )
    }
}

export default Project;