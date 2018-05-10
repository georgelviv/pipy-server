import React from 'react';
import { LayoutHeader } from './components';

import './LayoutView.less';

const LayoutView = ({ children, isNavbarOpen }) => {
  const layoutClassname = "layout" + (isNavbarOpen ? " layout--navbar-open" : "");
  return (
    <div className={ layoutClassname }>
      <LayoutHeader></LayoutHeader>
      <div className="layout__content">
        <div className="container-fluid">
          { children }
        </div>
      </div>
    </div>
  );
};

export { LayoutView };