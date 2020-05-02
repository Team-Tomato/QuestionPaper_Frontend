import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AllNavbar from '../Component/navbar.js'
import routes from "../route.js";
import { Layout,Header, Navigation, Drawer, Content,Grid,Cell} from 'react-mdl';
import './app.css';


class Admin extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      return (
        <Route
          exact path={prop.path}
          render={props => (
            <prop.component
              {...props}
            />
          )}
          key={key}
        />
      );
    });
  }

<<<<<<< HEAD
    render() {
        return (
            <div className="wrapper">
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <AllNavbar /> 
                    <Switch>{this.getRoutes(routes)}</Switch>                    
                    <Layout>                             
          <Header className="header-color" title="Title" scroll>
               <Navigation>  
                  <a href="#">Welcome</a>
                  <a href="#">Search QP</a>
                  <a href="#">Search Book</a>
                  <a href="#">Template</a>
                  <a href="#">Contributors</a>
                  <a href="#">Projects</a>
                  <a href="#">Contact</a>
              </Navigation>
          </Header>
          <Drawer title="Tomato">
              <Navigation>
                  <a href="#">Search QP</a>
                  <a href="#">Search Book</a>
                  <a href="#">Templates</a>
                  <a href="#">Projects</a>
              </Navigation>
          </Drawer>
          <Content>
          <Grid className='grid-color'>
                  <Cell col={12}>
                <div>
                        <h1 align="center" id='font'>Refer QP , Search BOOK
                            <br />Try PROJECTS , Grow RESUME
                        </h1>
                        <h3 align="center" id='font'>
                            Keep Learning...Happy Coding...
                        </h3>
                </div>
                 </Cell>
              </Grid>
              <image src='https://image3.mouthshut.com/images/Restaurant/Photo/-97874_130537.jpg'
              className='imagee'
              />
              
              <div className='banner-text'>'
              <h5 id='font'></h5>        
                </div>
          </Content>
      </Layout>

                </div>
            </div>
        );
    }
=======
  render() {
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AllNavbar />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
>>>>>>> 95accfd772cd83e8231c49ae8905f86470820669
}

export default Admin;
