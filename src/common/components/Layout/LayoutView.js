import React from 'react';
import { LayoutHeader } from './components';

import './LayoutView.less';

const LayoutView = ({ children }) => {
  return (
    <div className="layout">
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