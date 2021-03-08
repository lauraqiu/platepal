import React from 'react';
import styles from './Navbar.module.scss';
import NavItem from './NavItem'
import arrow from './arrow.svg';
import menu from './menu.svg';
import platepal from './platepal.svg';
import routes from '../../constant/routes';

const TopNavbar = (props) => {
  return (
    <div className={styles.topNavContainer}>
        <NavItem image={arrow} route='back'/>
        <NavItem image={platepal} route={routes.login}/>
        <NavItem image={menu} route={routes.metrics}/>
    </div>
  );
};

export default TopNavbar;
