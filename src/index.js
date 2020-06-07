import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from "react-router-dom";
import Layout from './Layout/app.js'
import './Styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" render={props => <Layout {...props} />} />
    </Switch>
    </HashRouter>,
  document.getElementById('root')
);
