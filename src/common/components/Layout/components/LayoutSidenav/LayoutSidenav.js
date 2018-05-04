import React from 'react';

import './LayoutSidenav.less';

const MENU_ITEMS = [
 {
   id: 1,
   title: 'Dashboard',
   iconClassName: 'fa-tachometer-alt'
 },
 {
  id: 2,
  title: 'Dashboard',
  iconClassName: 'fa-tachometer-alt'
}
];

const LayoutSidenav = () => {
  return (
    <ul className="layout-sidenav navbar-nav navbar-sidenav">
      {
        MENU_ITEMS.map(item => {
          return (
            <li className="nav-item" key={ item.id }>
              <a className="nav-link layout-sidenav__link">
                <i className={ "fas fa-sm fa-fw " + item.iconClassName }></i>
                <span className="layout-sidenav__link-text">{ item.title }</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

export { LayoutSidenav };