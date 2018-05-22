import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect,
} from 'react-router-dom';

import { 
  Layout, 
  BasicProvider
} from 'common';

import {
  DashboardPage, 
  NotFoundPage,
} from 'routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <BasicProvider>
        <Router>
          <div>
            <Layout>
              <Switch>
                <Route exact path="/dashboard" component={ DashboardPage }/>
                <Redirect exact from="/" to="/dashboard" />
                <Route component={ NotFoundPage }/>
              </Switch>
            </Layout>
          </div>
        </Router>
      </BasicProvider>
    );
  }
}

export { App };
