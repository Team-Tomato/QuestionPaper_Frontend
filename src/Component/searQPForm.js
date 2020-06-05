import React, { Component } from 'react';
import '../Styles/style.css'
import { Form, Row, Col, Input, Button, Container, Card, CardBody } from 'reactstrap'

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
        <Card className="correctMargin">
          <CardBody className="removeIndent">
            <Form onSubmit={(event) => { this.props.handleSubmit(event, this.state.query) }}>
              <Row className="addSpace">
                <Col sm={6} md={8} lg={10} className="addIndent">
                  <Input type="text" name="keywordSearch" id="keywordSearch" placeholder="Search subject name or staff" onChange={this.onChange} />
                </Col>
                <Col sm={6} md={4} lg={2} className="addIndent">
                  <Button style={{backgroundColor: "violet"}} variant="contained" block>Search</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

// <div>
{/* <div className="container-search">
          <Form onSubmit={(event) => { this.props.handleSubmit(event, this.state.query) }}>
            <div className="row">
              <input type="text" className="offset-1 col-7 col-sm-7 input" onChange={this.onChange} placeholder="Type Sub name or Staff name"></input>
              <button className="col-3 col-sm-3 button">Search</button>
            </div>
          </Form>
        </div> */}
// </div>

export default SearchQP;