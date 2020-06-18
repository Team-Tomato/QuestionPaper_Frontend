import React, { Component } from 'react';
import extension from '../images/extension.png';
import teamaction from '../images/gaction1.png';
import movie from '../images/gaction2.png';
import tableau from '../images/t20.png';
import webapp from '../images/webapp.png';
import flutter from '../images/flutter.png';
import '../Styles/project.css'
import Button from '@material-ui/core/Button';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Badge, Container
} from 'reactstrap';


class Project extends Component {
    render() {
        return (
            <div>
                <Card className="gradient">
                    <CardBody className="welcome-title" style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white'
                    }}>
                        <h5>Our projects</h5>
                    </CardBody>
                </Card>
                <br />
                <Container>
                <Row>
                    <Col md={3} lg={3} sm={12}>
                        <Card className="indentCorrection">
                            <CardImg src={webapp} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Web App</CardTitle>
                                <CardText>Exclusive Team-Tomato website</CardText>
                                <CardText>
                                    <Badge color="dark" pill>React.js</Badge>
                                    <Badge color="dark" pill>Flask</Badge>
                                    <Badge color="dark" pill>PostgreSQL</Badge>
                                </CardText>
                                <a href="https://github.com/Team-Tomato/QuestionPaper_Frontend" target="_blank"><Button style={{ backgroundColor: "#da4eda",color:"white" }} variant="contained">Github Repo</Button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} lg={3} sm={12}>
                        <Card className="indentCorrection">
                            <CardImg src={flutter} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Chat App</CardTitle>
                                <CardText>Chat bot for Maths Department</CardText>
                                <CardText>
                                    <Badge color="dark" pill>Flutter</Badge>
                                    <Badge color="dark" pill>NLP</Badge>
                                    <Badge color="dark" pill>PostgreSQL</Badge>
                                </CardText>
                                <Button style={{ backgroundColor: "violet",color:"white" }} variant="contained">In Progress</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} lg={3} sm={12}>
                        <Card className="indentCorrection">
                            <CardImg src={tableau} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Case study</CardTitle>
                                <CardText>Visualization of T20 Cricket data</CardText>
                                <CardText>
                                    <Badge color="dark" pill>Tableau</Badge>
                                </CardText>
                                <Button style={{ backgroundColor: "violet",color:"white" }} variant="contained">In Progress</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} lg={3} sm={12}>
                        <Card className="indentCorrection">
                            <CardImg src={movie} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>G Action-2</CardTitle>
                                <CardText>Tamil Movie Recommendations</CardText>
                                <CardText>
                                    <Badge color="dark" pill>Node.js</Badge>
                                    <Badge color="dark" pill>Dialogflow</Badge>
                                </CardText>
                                <a href="https://github.com/Team-Tomato/GAction_MovieRecommendation" target="_blank"><Button style={{ backgroundColor: "#da4eda",color:"white" }} variant="contained">Github Repo</Button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} lg={3} sm={12}>
                        <Card className="indentCorrection">
                            <CardImg src={teamaction} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>G Action-1</CardTitle>
                                <CardText>Team-Tomato Action (Learning)</CardText>
                                <CardText>
                                    <Badge color="dark" pill>Node.js</Badge>
                                    <Badge color="dark" pill>Dialogflow</Badge>
                                    <Badge color="dark" pill>Canvas</Badge>
                                </CardText>
                                <a href="https://github.com/Team-Tomato/GAction_TeamTomato" target="_blank"><Button style={{ backgroundColor: "#da4eda",color:"white" }} variant="contained">Github Repo</Button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} lg={3} sm={12}>
                        <Card className="indentCorrection">
                            <CardImg src={extension} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>One Click Extension</CardTitle>
                                <CardText>Simple extension for CEG (Learning)</CardText>
                                <CardText>
                                    <Badge color="dark" pill>JavaScript</Badge>
                                    <Badge color="dark" pill>CSS</Badge>
                                    <Badge color="dark" pill>HTML</Badge>
                                </CardText>
                                <a href="https://github.com/Team-Tomato/oneClick-chrome-extension" target="_blank"><Button style={{ backgroundColor: "#da4eda",color:"white" }} variant="contained">Github Repo</Button></a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Project;