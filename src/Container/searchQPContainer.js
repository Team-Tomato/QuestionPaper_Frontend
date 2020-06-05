import React, { Component } from 'react';
import { Card, CardBody, CardFooter } from 'reactstrap'
import { Container, Row, Col, Table } from 'reactstrap'
import FormQP from '../Component/searQPForm.js'
import '../Styles/style.css'
import Loader from 'react-loading';
import '../Styles/contributors.css'

class SearchQP extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      qpData: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this)
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
        loading: false
      })
      console.log(response, "REs")
    })
  }

  render() {
    let QPContainer
    let urls = []

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
        table = this.state.qpData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data['subjectName']}</td>
              <td>{data['staff']}</td>
              <td>{data['shortForm']}</td>
              <a href={data['url']} target="blank" className="violet"><td>{data['url']}</td></a>
            </tr>
          )
        })

        QPContainer =
          <Container>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Staff Name</th>
                  <th>ShortForm</th>
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
        position: 'absolute', left: '50%', top: '92%',
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
            <h5>Search for integrated M.Sc question papers</h5>
          </CardBody>
        </Card>

        <FormQP handleSubmit={this.handleSubmit.bind(this)} />
        <br />
        {QPContainer}
      </div>
    )
  }
}

export default SearchQP;