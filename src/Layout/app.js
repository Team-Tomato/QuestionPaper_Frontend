import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AllNavbar from '../Component/navbar.js'
import routes from "../route.js";

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
                </div>
            </div>
        );
    }
}

export default Admin;
