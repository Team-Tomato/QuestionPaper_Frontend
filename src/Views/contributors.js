import React, { Component } from 'react';
import '../Styles/contributors.css'
import Loader from 'react-loading';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {Card, CardBody} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class contributors extends Component {
  constructor() {
    super();
    this.state = {
      repo: null,
      fetched: false,
      contributor: [],
      user: [],
      login: []
    }
  }
  async componentDidMount() {
    var output;
    output = await (await fetch('https://api.github.com/orgs/Team-Tomato/repos')).json()
    this.setState({ repo: output })
    var person;
    for (var it = 0; it < this.state.repo.length; it++) {
      var url = this.state.repo[it].contributors_url
      person = await (await fetch(url)).json()
      this.state.user.push(person)
    }
    
    for (var i = 0; i < this.state.user.length; i++) {
      for (var j = 0; j < this.state.user[i].length; j++) {
        if (!this.state.login.includes(this.state.user[i][j].login)) {
          this.state.contributor.push(this.state.user[i][j])
          this.state.login.push(this.state.user[i][j].login)
        }
      }
    }
    this.setState({ fetched: true })
  }

  render() {
    return (
      <div>
        <Card className="gradient">
          <CardBody className="welcome-title" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                color:'white'
              }}>
            <h5>Our beloved contributors <FontAwesomeIcon icon="heart" color="white"/> 
            <br/>
            Feel free to send your PR's to our repo</h5>
          </CardBody>
        </Card>

        {this.state.fetched ? (
          <div>
            <div className="container-fluid d-flex justify-content-center">
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6" >
                {this.state.contributor.map((res, index) => (
                  <div key={index} className="col" >
                    <ScrollAnimation
                      animateIn="zoomIn"
                      animateOut="zoomOut"
                      duration={1.5}
                      delay={0}
                    >
                      <a href={'https://github.com/' + res.login} className="a" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className="card" style={{ textDecoration: 'none' }} >
                          <img alt="" src={'https://avatars2.githubusercontent.com/u/' + res.id + '?v=4'} className="profile-align" style={{ textDecoration: 'none' }} />
                          <div className="card-body text-dark">
                            <h2 className="card-title" style={{ textDecoration: 'none' }}>{res.login}</h2>
                          </div>
                        </div>
                      </a>
                    </ScrollAnimation>
                  </div>
                ))}
              </div>

            </div>
          </div>) : (<div style={{
            position: 'absolute', left: '50%', top: '55%',
            transform: 'translate(-50%, -50%)'
          }}>
            <Loader type={"bars"} color={"black"} />
          </div>)
        }
      </div>
    )

  }
}

export default contributors;