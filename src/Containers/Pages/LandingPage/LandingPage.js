import React from 'react';
import styles from './LandingPage.module.css';
import PLATEPAL_LOGO from '../../../assets/images/plate_pal_logo.png';

const LandingPage = () => {
  return (
    <div className={styles.fullPage}>
      <img
        className={styles.logoImage}
        src={PLATEPAL_LOGO}
        alt='plate pal logo'
      ></img>
      <h3 className={styles.logo} data-testid='logo'>
        PlatePal
      </h3>
      <button className={styles.loginButton}>Login</button>
      <button className={styles.registerButton}>Register</button>
    </div>
  );
};
export default LandingPage;
