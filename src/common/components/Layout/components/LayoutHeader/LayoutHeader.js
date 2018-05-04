import React from 'react';
import { APP_NAME } from  'common';

import { LayoutSidenav } from '../LayoutSidenav';
import './LayoutHeader.less';

const LayoutHeader = () => {
  return (
    <div className="layout-header navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">{ APP_NAME }</a>
      <button 
        className="navbar-toggler navbar-toggler-right" 
        type="button" data-toggle="collapse" 
        data-target="#navbarResponsive" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarResponsive">
        <LayoutSidenav></LayoutSidenav>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { LayoutHeader };