import React, { Component } from 'react';
import {
  Card, CardBody, Button
} from 'reactstrap'
import { Form, Input } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import '../style.css'

class SearchQP extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  }

  render() {
    return (
        <Container>
          <br />
          <Card>
            <CardBody>
              <Form onSubmit={(event) => {this.props.handleSubmit(event,this.state.query)}}>
                <Row>
                  <Col sm={6} md={8} lg={10}>
                    <Input type="text" name="keywordSearch" id="keywordSearch" placeholder="Search subject name or staff" onChange={this.onChange} />
                  </Col>
                  <Col sm={6} md={4} lg={2}>
                    <Button color='primary' block>Search</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Container>
    )
  }
}

export default SearchQP;