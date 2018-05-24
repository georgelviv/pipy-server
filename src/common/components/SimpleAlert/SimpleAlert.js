import React from 'react';
import classNames from 'classnames';

const SimpleAlert = ({ isVisible, message }) => {
  const alerClassName = classNames('alert', 
    { 'd-none': !isVisible }, 
    { 'alert-danger': true }
  );

  return (
    <div className={ alerClassName }  role="alert">
      { message }
    </div>
  );
}

export { SimpleAlert };