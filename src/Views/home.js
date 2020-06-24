import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { Container, Row, Col, Button } from 'reactstrap';
import '../Styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lines } from 'react-preloaders';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <Container>
                <br /><br />
                <Row>
                    <Col md={6} lg={6} sm={2} >
                        <img src={require("../images/mainlogos.png")} className="centerIt" alt=""/>
                    </Col>
                    <br/>
                    <Col md={6} lg={6} sm={2}>
                        <Typing speed={100}>
                            <h1 className="typeText">Welcome <FontAwesomeIcon icon="users" /> <br /> <br /> </h1>
                            <h3>
                                We Team-Tomato, <br /> <br />
                                <FontAwesomeIcon icon="hand-point-right" color="violet" /> Nurture <FontAwesomeIcon icon="user-graduate" color="violet" /> with wisdom <br /><br />
                                <FontAwesomeIcon icon="hand-point-right" color="violet" /> Open Source <FontAwesomeIcon icon="heart" color="violet" /> <br /><br />
                                <FontAwesomeIcon icon="hand-point-right" color="violet" /> Do real time projects
                            </h3>
                            <br /><br /><br />
                            <a style={{textDecoration:'none'}} href="https://github.com/Team-Tomato" target="blank" className="underlineOverride"><Button style={{ backgroundColor: "violet" }} variant="contained" md={6} lg={6} sm={6} block>Github</Button></a>
                        </Typing>
                    </Col>
                </Row>
            </Container>
            <Lines color={'rgb(158, 38, 102)'} time={1800} />
            </React.Fragment>
        )
    }
}

export default Home;