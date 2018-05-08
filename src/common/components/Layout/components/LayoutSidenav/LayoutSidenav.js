import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LayoutSidenav.less';

const MENU_ITEMS = [
 {
   id: 'dashboard',
   title: 'Dashboard',
   iconClassName: 'fa-tachometer-alt',
   link: '/dashboard'
 },
 {
    id: 'places',
    title: 'Places',
    iconClassName: 'fa-map-marker',
    link: '/places'
  },
  {
     id: 'devices',
     title: 'Devices',
     iconClassName: 'fa-thermometer-half',
     link: '/devices'
   }
];

class LayoutSidenav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };

    this.toggleSidenav = this.toggleSidenav.bind(this);
  }

  toggleSidenav() {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  }

  render() {
    const { pathname } = this.props;
    const layoutsidenavClassName = "layout-sidenav" + (this.state.isOpen ? " layout-sidenav--opened" : "");

    return (
      <div className={ layoutsidenavClassName }>
        <ul className="layout-sidenav__nav navbar-nav navbar-sidenav">
          {
            MENU_ITEMS.map(item => {
              const isActive = item.link === pathname;
              const classNameNavItem = "layout-sidenav__nav-item nav-item " + (isActive ? " layout-sidenav__nav-item--active" : "");
              return (
                <li className={ classNameNavItem } key={ item.id }>
                  <Link className="nav-link layout-sidenav__link" to={ item.link }>
                    <i className={ "fas fa-sm fa-fw " + item.iconClassName }></i>
                    <span className="layout-sidenav__link-text">{ item.title }</span>
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <div className="layout-sidenav__toogle-btn" onClick={ this.toggleSidenav }></div>
      </div>
    );
  }  
};

export { LayoutSidenav };