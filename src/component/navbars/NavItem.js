import React from 'react';
import styles from './Navbar.module.scss';
import { useHistory } from 'react-router-dom';

const NavItem = (props) => {

    const history = useHistory();
    const route = props.route;

    const routeChange = (path) => {
        if (path == '/back')
            history.goBack();
        else
            history.push(path)
    }

  return (
    <input
        type='image'
        className={styles.navButton}
        src={props.image}
        onClick={() => routeChange('/' + route)}
    ></input>
  );
};

export default NavItem;
