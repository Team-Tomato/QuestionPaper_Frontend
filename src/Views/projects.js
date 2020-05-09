import React, { Component } from 'react';
import extension from '../images/extension.png';
import teamaction from '../images/gaction1.png';
import movie from '../images/gaction2.png';
import tableau from '../images/t20.png';
import webapp from '../images/webapp.png';
import flutter from '../images/flutter.png';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';


class Project extends Component {
  render() {
    return (
      <Row>
        <Col md={2} lg={2} sm={6}>
          <Card>
            <CardImg src={webapp} alt="Card image cap" />
            <CardBody>
              <CardTitle>Web App</CardTitle>
              <CardText>Team Tomato website</CardText>
              <CardText>[ React.js, Flask, PostgreSQL ]</CardText>
              <a href="https://github.com/Team-Tomato/QuestionPaper_Frontend" target="_blank"><Button style={{ backgroundColor: "#da4eda" }} variant="contained">Github Repo</Button></a>
            </CardBody>
          </Card>
        </Col>
        <Col md={2} lg={2} sm={6}>
          <Card>
            <CardImg src={teamaction} alt="Card image cap" />
            <CardBody>
              <CardTitle>G Action-1</CardTitle>
              <CardText>Team Tomato Action</CardText>
              <CardText>[ Node.js, Dialogflow, Canvas ]</CardText>
              <a href="https://github.com/Team-Tomato/GAction_TeamTomato" target="_blank"><Button style={{ backgroundColor: "#da4eda" }} variant="contained">Github Repo</Button></a>
            </CardBody>
          </Card>
        </Col>
        <Col md={2} lg={2} sm={6}>
          <Card>
            <CardImg src={movie} alt="Card image cap" />
            <CardBody>
              <CardTitle>G Action-2</CardTitle>
              <CardText>Movie Recommendation</CardText>
              <CardText>[ Node.js, Dialogflow ]</CardText>
              <a href="https://github.com/Team-Tomato/GAction_MovieRecommendation" target="_blank"><Button style={{ backgroundColor: "#da4eda" }} variant="contained">Github Repo</Button></a>
            </CardBody>
          </Card>
        </Col>
        <Col md={2} lg={2} sm={6}>
          <Card>
            <CardImg src={extension} alt="Card image cap" />
            <CardBody>
              <CardTitle>One Click Extension</CardTitle>
              <CardText>Extension for CEG</CardText>
              <CardText>[ HTML, CSS, Javascript ]</CardText>
              <a href="https://github.com/Team-Tomato/oneClick-chrome-extension" target="_blank"><Button style={{ backgroundColor: "#da4eda" }} variant="contained">Github Repo</Button></a>
            </CardBody>
          </Card>
        </Col>
        <Col md={2} lg={2} sm={6}>
          <Card>
            <CardImg src={flutter} alt="Card image cap" />
            <CardBody>
              <CardTitle>Team Tomato App</CardTitle>
              <CardText>Flutter Application</CardText>
              <CardText>[ Flutter, Dart, PostgreSQL ]</CardText>
              <Button style={{ backgroundColor: "#da4eda" }} variant="contained">In Progress</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={2} lg={2} sm={6}>
          <Card>
            <CardImg src={tableau} alt="Card image cap" />
            <CardBody>
              <CardTitle>Chat Bot</CardTitle>
              <CardText>Chat bot for Maths Department</CardText>
              <CardText>[ Node.js, Wit.ai ]</CardText>
              <Button style={{ backgroundColor: "#da4eda" }} variant="contained">In Progress</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

    );
  }
}

export default Project;