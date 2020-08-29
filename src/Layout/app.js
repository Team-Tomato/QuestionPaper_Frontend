import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AllNavbar from '../Component/navbar.js'
import routes from "../route.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faHeart, faUsers, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

library.add(faUserGraduate, faHeart, faUsers, faHandPointRight);

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
  PageNotFound = () => {
    return (
    <div style={{padding:"70px",
      textAlign:"center",
      backgroundColor:"violet"
    }} >
      <h1>404</h1>
      <h2>Page Not found</h2>
      <p>We cannot find the page you are looking for</p>
      </div>
    );
  };
  /**/
  render() {
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AllNavbar />
          <Switch>{this.getRoutes(routes)}
          <Route component={this.PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Admin;
