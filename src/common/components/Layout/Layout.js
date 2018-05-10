import React, { Component } from 'react';

import { BasicConsumer, layoutStoreSelector } from 'common';
import { LayoutView } from './LayoutView';

const mapStoreToProps = (store) => {
  return {
    isNavbarOpen: layoutStoreSelector(store).isNavbarOpen
  }
}

class Layout extends Component {
  render() {
    return (
      <BasicConsumer>
        { (context) => {
          const props = { ...mapStoreToProps(context.store) };
          return (
            <LayoutView {...props} >
              { this.props.children }
            </LayoutView>
          );
          }
        }
      </BasicConsumer>
    )
  }
}

export { Layout };