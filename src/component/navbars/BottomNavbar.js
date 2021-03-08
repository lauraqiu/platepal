import React from 'react';
import styles from './Navbar.module.scss';
import NavItem from './NavItem'
import heart from './heart.svg';
import home from './home.svg';
import person from './person.svg';
import bookmark from './bookmark.svg';
import heartFilled from './heart_filled.svg';
import homeFilled from './home_filled.svg';
import personFilled from './person_filled.svg';
import bookmarkFilled from './bookmark_filled.svg';
import routes from '../../constant/routes';

const BottomNavbar = (props) => {

    const checkPage = (page) => {
        if (props.fill == page) {
            if (page == 'home')
                return homeFilled;
            if (page == 'heart')
                return heartFilled;
            if (page == 'bookmark')
                return bookmarkFilled;
            if (page == 'person')
                return personFilled;
        }
    }

  return (
    <div className={styles.bottomNavContainer}>
        <NavItem image={checkPage('home') || home} route={routes.login}/>
        <NavItem image={checkPage('heart') || heart} route={routes.main}/> 
        <NavItem image={checkPage('bookmark') || bookmark} route={routes.expandedSavedRecipe}/>
        <NavItem image={checkPage('person') || person} route={routes.profile}/>
    </div>
  );
};

export default BottomNavbar;
