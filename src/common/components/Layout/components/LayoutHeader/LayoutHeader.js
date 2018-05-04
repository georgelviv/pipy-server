import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { APP_NAME } from  'common';
import { LayoutSidenav } from '../LayoutSidenav';
import './LayoutHeader.less';

const SHOW_COLLAPSE_CLASSNAME = 'show'

class LayoutHeader extends Component {
  constructor(props) {
    super(props);

    this.getNavbarEl = (el) => {
      this.navbarEl = el;
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.location.pathname !== this.patname;
  }

  componentDidUpdate() {
    this.hideCollapse();
  }

  hideCollapse() {
    const navbarElClassList = this.navbarEl.classList;
    if (navbarElClassList.contains(SHOW_COLLAPSE_CLASSNAME)) {
      navbarElClassList.remove(SHOW_COLLAPSE_CLASSNAME);
    }
  }

  get pathname() {
    return this.props.location.pathname;
  }
  
  render() {
    return (
      <div className="layout-header navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">{ APP_NAME }</Link>
        <button 
          className="navbar-toggler navbar-toggler-right" 
          type="button" data-toggle="collapse" 
          data-target="#navbarResponsive" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarResponsive" ref={ this.getNavbarEl }>
          <LayoutSidenav pathname={ this.pathname }></LayoutSidenav>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

LayoutHeader = withRouter(LayoutHeader);

export { LayoutHeader };