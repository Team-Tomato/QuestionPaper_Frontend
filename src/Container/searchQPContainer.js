import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap'
import { Container, Row, Col, Table, Button1 } from 'reactstrap'
import FormQP from '../Component/searQPForm.js'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import '../Styles/style.css'
import Loader from 'react-loading';
import '../Styles/contributors.css'
import ReactPaginate from 'react-paginate';
import '../Styles/pagination.css'

class SearchQP extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      qpData: [],
      offset:0,
      perPage:10,
      currentPage:0,
      noData:false,
      sort:false,
      var:''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.handleSubClick=this.handleSubClick.bind(this)
  }

  async handleSubmit(event, query) {
    this.setState({
      loading: true
    })
    event.preventDefault()
    let url = 'https://teamtomato.herokuapp.com/api/v1/question/search?search_str=' + query
    await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not ok.')
    }).then(response => {
      this.setState({
        qpData: response,
        loading: false,
        sort:false,
        var:''
      })
      console.log(response.subjectName)
      // console.log(response, "REs")
    if(this.state.qpData.length===0)
    {
      this.setState({noData:true})
    }else{this.setState({noData:false})}
    })
  }
  handlePageClick=(e)=>{
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
        currentPage: selectedPage,
        offset: offset
    });
};
handleSubClick=(e,value)=>{
  e.preventDefault();
this.setState({sort:true,
var:value})
}
  render() {
    let QPContainer

    //For Card Usgae
    // let urlList = []
    // let staffList = []
    // let shortFormList = []

    // this.state.qpData.forEach(element => {
    //   staffList.push(element['shortForm'])
    //   shortFormList.push(element['staff'])
    //   const url='https://avatars2.githubusercontent.com/u/20479150?v=4/'
    //   urlList.push(url)
    // });
    // console.log(shortFormList, staffList, urlList)
    // urls = urlList.map((images, index) => (
    //   <Col lg={3} md={4} sm={12} key={index} className='cardPadding'>
    //     <Card>
    //       <CardBody>
    //         <img className="img-align" src={images} alt="Card image cap" />
    //         {/* <img src={images} alt='QP Image' /> */}
    //       </CardBody>
    //       <CardFooter>
    //         Subject | StaffName
    //                 {/* Need to make it dynamic */}
    //       </CardFooter>
    //     </Card>
    //   </Col>
    // ))
    let table = []

    //Loading Option
    if (this.state.loading === false) {
      if (this.state.qpData !== [] && (this.state.qpData).length !== 0) {
        if(this.state.sort)
        {const v=this.state.var
          const sorted=this.state.qpData.sort(function(a,b){
            if(a[v]<b[v])
            return -1;
            if(a[v]<b[v])
            return 1;
            return 0;
        }); 
        const slice=sorted.slice(this.state.offset, this.state.offset + this.state.perPage) 
        table = slice.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data['subjectName']}</td>
              <td style={{textAlign:"center"}}>{data['staff']}</td>
              <td style={{textAlign:"center"}}>{data['shortForm']}</td>
              <td style={{textAlign:"center"}}>{data.year}</td>
              <a href={data['url']} target="blank" className="violet"><td>{data['url']}</td></a>
            </tr>
          )
        })
        }
        else{
        const slice=this.state.qpData.slice(this.state.offset, this.state.offset + this.state.perPage)
        table = slice.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data['subjectName']}</td>
              <td style={{textAlign:"center"}}>{data['staff']}</td>
              <td style={{textAlign:"center"}}>{data['shortForm']}</td>
              <td style={{textAlign:"center"}}>{data.year}</td>
              <a href={data['url']} target="blank" className="violet"><td>{data['url']}</td></a>
            </tr>
          )
        })
      }
        QPContainer =
          <Container>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th><Button onClick={(event) => { this.handleSubClick(event, 'subjectName') }} style={{backgroundColor: "violet",width:160}} variant="contained" >Subject Name<FontAwesomeIcon icon = {faSortAlphaDown}/></Button></th>
                  <th><Button onClick={(event) => { this.handleSubClick(event, 'staff') }} style={{backgroundColor: "violet",width:150}} variant="contained" >Staff Name<FontAwesomeIcon icon = {faSortAlphaDown}/></Button></th>
                  <th><Button onClick={(event) => { this.handleSubClick(event, 'shortForm') }} style={{backgroundColor: "violet",width:150}} variant="contained" >Short Form<FontAwesomeIcon icon = {faSortAlphaDown}/></Button></th>
                  <th><Button onClick={(event) => { this.handleSubClick(event, 'year') }} style={{backgroundColor: "violet",width:150}} variant="contained" >Year<FontAwesomeIcon icon = {faSortAlphaDown}/></Button></th>
                  <th>QP Link</th>
                </tr>
              </thead>
              <tbody>
                {table}
              </tbody>
            </Table>
          </Container>
      }
      else {
        QPContainer = <h6></h6>
      }
    }
    else {
      QPContainer = <div style={{
        position: 'absolute', left: '50%', top: '85%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Loader type={"bars"} color={"black"} />
      </div>
    }

    
    const count=Math.ceil(this.state.qpData.length / this.state.perPage);
    return (
      <div>
        <Card className="gradient">
          <CardBody className="welcome-title" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white'
          }}>
            <h5>Search for integrated M.Sc question papers</h5>
          </CardBody>
        </Card>

        <FormQP handleSubmit={this.handleSubmit.bind(this)} />
        <br/>
        <Container>
          <h5 className="centerIt">Yearwise question paper collection status</h5>
          <Row>
            <Col lg={3} md={3} sm={6}>
              <a style={{textDecoration: 'none' }} href="https://github.com/Team-Tomato/Learn/blob/master/QP%20Data/2018batch.md" target="_blank">
                <Button className="col-md-12" style={{backgroundColor: "violet",color:"white",textDecoration: 'none' }} variant="contained" block>2018-2023</Button>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <a style={{textDecoration: 'none' }} href="https://github.com/Team-Tomato/Learn/blob/master/QP%20Data/2017batch.md" target="_blank">
                <Button className="col-md-12" style={{backgroundColor: "violet",color:"white",textDecoration: 'none' }} variant="contained" block>2017-2022</Button>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <a style={{textDecoration: 'none' }} href="https://github.com/Team-Tomato/Learn/blob/master/QP%20Data/2016batch.md" target="_blank"> 
                <Button className="col-md-12" style={{backgroundColor: "violet",color:"white",textDecoration: 'none' }} variant="contained" block>2016-2021</Button>
              </a> 
            </Col>
            <Col lg={3} md={3} sm={6}>
              <a style={{textDecoration: 'none' }} href="https://github.com/Team-Tomato/Learn/blob/master/QP%20Data/2015batch.md" target="_blank">
                <Button className="col-md-12" style={{backgroundColor: "violet",color:"white",textDecoration: 'none' }} variant="contained" block>2015-2020</Button>
              </a>
            </Col>
          </Row>
        </Container>
        <br />
        {QPContainer}
        {this.state.noData ? (
          <div>
            <h5 className="centerIt">Sorry,we are not able to find the question paper you are looking for</h5>
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

export default SearchQP;