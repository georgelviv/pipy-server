import React, { Component } from 'react';
import { Layout, GlobalContext, defaultContext, reducer } from 'common';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      store: defaultContext.store,
      dispatch: (event) => {
        this.setState((prevState) => {
          prevState.store = reducer(prevState, event);
          return prevState;
        });
      }
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={ this.state }>
        <Layout>
        </Layout>
      </GlobalContext.Provider>
    );
  }
}

export { App };
