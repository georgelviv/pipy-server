import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div>{ this.pathName } Not found</div>
    );
  }

  get pathName() {
    return this.props.location.pathname;
  }
};

export { NotFoundPage };