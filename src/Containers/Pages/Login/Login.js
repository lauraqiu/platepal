import React, {useState} from 'react';
import styles from './Login.module.css';
import logo from "../../../assets/images/googleicon.png";
import firebase from '../../../utilities/firebase/firebase';
  
//   import { config } from "./test-credentials";

class Login extends React.Component {

    // not used for now
    state = {
        signedIn: false,
        user: null,
    }

    googleSignIn () {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
        console.log("Google Sign In Page");
    }

    helpNeeded () {
        //TODO: go to the help page (if there is one)
    }

    render () {
        return(
            <div className={styles.loginComponent}>
                <h1 className={styles.loginTitle}>Login</h1>
                <p className={styles.loginParagraph}>Welcome Back</p>
                <p className={styles.loginParagraph}>Sign in to continue</p>
                <img className={styles.loginLogo} src={logo} alt="Google Logo"></img>
                <button className={styles.loginButton} onClick={this.googleSignIn}>Sign in with Google</button>
                <p className={styles.loginParagraphOrange} onClick={this.helpNeeded}>Need Help?</p>
            </div>
        );
    }
}

export default Login;