import React, { Component } from 'react';

import { GlobalContext } from 'common';
import { LayoutView } from './LayoutView';



class Layout extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        { (context) => 
          <LayoutView store={ context.store } dispatch={ context.dispatch } >
            { this.props.children }
          </LayoutView>
        }
      </GlobalContext.Consumer>
    )
  }
}

export { Layout };