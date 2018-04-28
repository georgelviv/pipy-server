import React from 'react';
import { GET_DATA_ACTION } from 'common';

const LayoutView = ({ store, dispatch }) => {
  const onClick = () => {
    const action = {
      name: GET_DATA_ACTION,
    };

    dispatch(action);
  };

  return (
    <div>
      { store.data }
      <button onClick={ onClick } >Get data</button>
    </div>
  );
}

export { LayoutView };