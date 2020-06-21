import React, { Component } from 'react';
import '../Styles/style.css'
import Loader from 'react-loading';
import { Form, Row, Col, Container, Card, CardBody, Table } from 'reactstrap'
import ReactPaginate from 'react-paginate';
import '../Styles/pagination.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`{
  label.Mui-focused {
    color: violet;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: violet;
    }
  }`;

const valreg=RegExp(/^\s+$/)

class Project extends Component {
  constructor(){
    super()
  this.state = {
    query: '',
    loading: false,
    person: [],
    offset:0,
    perPage:10,
    currentPage:0,
    noData:false
  };
  this.handlePageClick = this.handlePageClick.bind(this)
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

  handlePageClick=(e)=>{
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    });
  }
  async search(query) {
    const url = "https://teamtomato.herokuapp.com/api/v1/book/search?search_str=" + query //fetch the specific book
    const response = await fetch(url)
    const data = await response.json();
    this.setState({
      person: data,
      loading: false
    })
    if(this.state.person.length==0)
    {
      this.setState({noData:true})
    }else{this.setState({noData:false})}
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
        const slice=this.state.person.slice(this.state.offset, this.state.offset + this.state.perPage)
        table = slice.map((data, index) => {
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
        position: 'absolute', left: '50%', top: '77%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Loader type={"bars"} color={"black"} />
      </div>
    }
    const count=Math.ceil(this.state.person.length / this.state.perPage);
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
                  <StyledTextField fullWidth type="text" label="Enter the Title or Author name"  onChange={this.onChange} id="outlined-size-small" variant="outlined"size="small"/>
                    {error === true && (
                      <div className="errormessage">title or author name is required</div>
                    )}
                  </Col>
                  <Col sm={6} md={4} lg={2} className="addIndent">
                    <Button type="submit" className="col-md-12" disabled={!this.state.value || this.state.value.trim().length === 0} style={{ backgroundColor: "violet",color:"white"}} variant="contained" block onClick={this.handleLogin}>Search</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <div>
          </div>
        </Container>
        {BookContainer}
      
        {this.state.noData ? (
          <div><br/>
            <h5 className="centerIt">Sorry,we are not able to find the book you are looking for</h5>
            </div>
            
            ):(count>1 ? (
              <div>
                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={count}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
              </div>
            ):(<div></div>)
            )}
      </div>
    )
  }
}

export default Project;