import React from 'react';
import classNames from 'classnames';

const SimpleAlert = ({ isVisible, message, type }) => {
  const alerClassName = classNames('alert', 
    { 'd-none': !isVisible }, 
    { 
      'alert-danger': type === 'danger',
      'alert-primary': type === 'info'
    }
  );

  return (
    <div className={ alerClassName }  role="alert">
      { message }
    </div>
  );
}

export { SimpleAlert };