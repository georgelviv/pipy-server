import React, { Component } from "react";

import {
  defaultContext, 
  reducer, 
} from 'common';

const BasicContext = React.createContext();

class BasicProvider extends Component {
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
      <BasicContext.Provider value={{ value: 12 }}>
        {this.props.children}
      </BasicContext.Provider>
    );
  }
}

const BasicConsumer = BasicContext.Consumer;

export { BasicProvider, BasicConsumer };