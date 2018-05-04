import React from 'react';
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

const LayoutSidenav = ({ pathname }) => {
  return (
    <ul className="layout-sidenav navbar-nav navbar-sidenav">
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
  );
};

export { LayoutSidenav };