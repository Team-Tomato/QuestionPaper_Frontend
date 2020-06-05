import React, { Component } from 'react';
import '../Styles/style.css'
import { Form, Row, Col, Input, Button, Container, Card, CardBody } from 'reactstrap'

const valreg=RegExp(/^\s+$/)
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
    let qperror= this.state.qperror;  
    if (value.length == 0 || valreg.test(value))
    {
      qperror = true;
    }
    else
    {
      qperror = false;
    }        
    
    this.setState({qperror,value },()=>console.log(this.state)) ;
    this.setState({
      query: value,
    });
  }

  render() {
    const {qperror}=this.state;
    return (
      <Container>
        <br />
        <Card>
          <CardBody>
            <Form onSubmit={(event) => { this.props.handleSubmit(event, this.state.query) }}>
              <Row>
                <Col sm={6} md={8} lg={10}>
                  <Input type="text" name="keywordSearch" id="keywordSearch" placeholder="Search subject name or staff" onChange={this.onChange} />
                  {qperror === true && (
                    <div className="errormessage">subject or staff name is required</div>
                  )}
                </Col>
                <Col sm={6} md={4} lg={2}>
                  <Button disabled = {!this.state.value || this.state.value.trim().length == 0} style={{backgroundColor: "violet"}} variant="contained" block>Search</Button>
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