import React from 'react';
import { GET_DATA_ACTION } from 'common';
import { LayoutHeader } from './components';

import './LayoutView.less';

const LayoutView = ({ store, dispatch }) => {
  const onClick = () => {
    const action = {
      name: GET_DATA_ACTION,
    };

    dispatch(action);
  };

  return (
    <div className="layout">
      <LayoutHeader></LayoutHeader>
      <div className="container">
        { store.data }
        <button onClick={ onClick } >Get data</button>
      </div>
    </div>
  );
}

export { LayoutView };