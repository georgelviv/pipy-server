import React, { Component } from 'react';
import { 
  layoutStoreSelector, 
  LAYOUT_NAVBAR_TOGGLE_ACTION, 
  BasicConsumer 
} from 'common';

import { LayoutSidenavView } from './LayoutSidenavView';

const mapStoreToProps = (store) => {
  return  {
    isNavbarOpen: layoutStoreSelector(store).isNavbarOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    toggleNavbar: (isOpen) => {
      dispatch({
        name: LAYOUT_NAVBAR_TOGGLE_ACTION,
        data: isOpen
      })
    }
  }
};

class LayoutSidenav extends Component {
  render() {
    const { pathname } = this.props;
    return (
        <BasicConsumer>
          {
            (context) => {
              const props = { pathname, ...mapStoreToProps(context.store), ...mapDispatchToProps(context.dispatch) } ;

              return (
                <LayoutSidenavView  { ...props } ></LayoutSidenavView>
              );
            }
          }
        </BasicConsumer>
      );
  }
};



export { LayoutSidenav };