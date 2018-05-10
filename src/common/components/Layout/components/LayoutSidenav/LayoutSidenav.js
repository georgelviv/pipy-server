import React, { Component } from 'react';
import { GlobalContext } from 'common';

import { LayoutSidenavView } from './LayoutSidenavView';

class LayoutSidenav extends Component {
  render() {
    const { pathname } = this.props;
    return (
        <GlobalContext.Consumer>
          {
            (context) => {
              return (
                <LayoutSidenavView 
                  store={ context.store } 
                  dispatch={ context.dispatch }  
                  pathname={ pathname }>
                </LayoutSidenavView>
              );
            }
          }
        </GlobalContext.Consumer>
      );
  }
};

export { LayoutSidenav };