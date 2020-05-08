import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AllNavbar from '../Component/navbar.js'
import routes from "../route.js";
import '../Styles/app.css';


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

    render() {
        return (
            <div className="wrapper">
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <AllNavbar /> 
                    <Switch>{this.getRoutes(routes)}</Switch>                    
                    <div>

                <div className='grid-color'>
                        <h1 align="center" id='font'>Refer QP , Search BOOK
                            <br />Try PROJECTS , Grow RESUME
                        </h1>
                        <h3 align="center" id='font'>
                            Keep Learning...Happy Coding...
                        </h3>
                </div>
              <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="overflow">
                            <img src="https://image3.mouthshut.com/images/Restaurant/Photo/-97874_130537.jpg" alt ="Image-1" className="card-img-bottom" height="250" width ="200"
                            />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Anna university</h4>
                            <h5>Tagline : Progress Through Knowledge</h5>
                        <p className="card-text text-secondary">    
                             The place to explore every skills.
                        </p>
                        <a href="https://www.annauniv.edu" className="btn btn-outline-success" target="_blank">
                            Anna University
                        </a>
                        </div>           
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card text-center">
                        <div className="overflow">
                            <img src="https://takegrocery.com/wp-content/uploads/2018/03/thumb-1920-420022.jpg" alt ="Image-2" className="card-img-bottom" height="250" width ="200"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Team Tomato</h4>
                        <p className="card-text text-secondary">    
                            Team which is determined to spread the love of open source 
                        </p>
                        <a href="https://github.com/Team-Tomato" className="btn btn-outline-success" target="_blank">
                            Team-Tomato
                        </a>
                        </div>           
                    </div>

                </div>
                <div className="col-md-4">
                <div className="card text-center">
                        <div className="overflow">
                            <img src="https://miro.medium.com/max/750/1*zJkojKNpFD9HFGPJLCs15Q.jpeg" alt ="Image-3" className="card-img-bottom" height="250" width ="300"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Projects</h4>
                        <p className="card-text text-secondary">    
                             Become easy through practice
                        </p>
                        <a href="https://github.com/Team-Tomato/QuestionPaper_Frontend" className="btn btn-outline-success" target="_blank">
                            Projects
                        </a>
                        </div>           
                    </div>
                </div>                 
            </div>
        </div>    
       </div>
     </div>
   </div>
  );
 }
}

export default Admin;
