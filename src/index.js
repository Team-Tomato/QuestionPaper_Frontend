import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Layout/app.js'
// import App from './Views/App';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Layout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
