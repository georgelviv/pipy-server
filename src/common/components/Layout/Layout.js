import React from 'react';
import { GlobalContext } from 'common';
import { LayoutView } from './LayoutView';

const Layout = () => {
  return (
    <GlobalContext.Consumer>
      { (context) => <LayoutView store={ context.store } dispatch={ context.dispatch } ></LayoutView>}
    </GlobalContext.Consumer>
  );
};

export { Layout };