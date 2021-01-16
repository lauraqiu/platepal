import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.fullPage}> 
                <h3 className={styles.logo}> PlatePal</h3>
                <button className={styles.loginButton}>Login</button>
                <button className={styles.registerButton}>Register</button>
        </div>
    )
}
export default LandingPage;