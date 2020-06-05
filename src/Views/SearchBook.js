import React, { Component } from 'react';
import '../Styles/style.css'
import Loader from 'react-loading';
import { Form, Row, Col, Input, Button, Container, Card, CardBody, CardDeck, Table } from 'reactstrap'

const valreg=RegExp(/^\s+$/)
class Project extends Component {
  state = {
    query: '',
    loading: false,
    person: []
  }

  onChange = e => {
    const { value } = e.target;
    let error= this.state.error;  
    if (value.length === 0 || valreg.test(value))
    {
      error = true;
    }
    else
    {
      error = false;
    }        
    this.setState({error,value },()=>console.log(this.state)) ;    
    this.setState({
      query: value,
      person: []
    });
  };

  async search(query) {
    const url = "https://teamtomato.herokuapp.com/api/v1/book/search?search_str=" + query //fetch the specific book
    const response = await fetch(url)
    const data = await response.json();
    this.setState({
      person: data,
      loading: false
    })
  }

  handleLogin = e => {
    const query = this.state.query
    this.setState({ loading: true })
    this.search(query)
  }

  render() {
    const {error} = this.state;
    let BookContainer
    let table = []
    if (this.state.loading === false) {
      if (this.state.person !== [] && (this.state.person).length !== 0) {
        table = this.state.person.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.isbn}</td>
              <td>{data.publisher}</td>
              <a href={data.url} target="blank" className="violet"><td>{data.url}</td></a>
            </tr>
          )
        })
        BookContainer =
          <Container>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>AUTHOR</th>
                  <th>ISBN</th>
                  <th>PUBLISHER</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {table}
              </tbody>
            </Table>
          </Container>
      }
      else {
        BookContainer = <h6></h6>
      }
    }
    else {
      BookContainer = <div style={{
        position: 'absolute', left: '50%', top: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Loader type={"bars"} color={"black"} />
      </div>
    }
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
          <Card className="correctMargin">
            <CardBody className="removeIndent">
              <Form>
                <Row>
                  <Col sm={6} md={8} lg={10} className="addIndent">
                    <Input type="text" placeholder="Enter the Title or Author name" onChange={this.onChange} />
                    {error === true && (
                    <div className="errormessage">title or author name is required</div>
                  )}
                  </Col>
                  <Col sm={6} md={4} lg={2} className="addIndent">
                    <Button disabled = {!this.state.value || this.state.value.trim().length == 0} style={{ backgroundColor: "violet" }} variant="contained" block onClick={this.handleLogin}>Search</Button>

                  </Col>
                  <Col sm={6} md={4} lg={2} className="addIndent">
                    <Button style={{ backgroundColor: "violet" }} variant="contained" block onClick={this.handleLogin}>Search</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <div>
          </div>
        </Container>
        {BookContainer}
      </div>
    )
  }
}

export default Project;