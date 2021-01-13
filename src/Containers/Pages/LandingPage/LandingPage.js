import React from 'react';
import './LandingPage.css';
import Helmet from 'react-helmet';

const LandingPage = () => {
    return (
        <>
            <Helmet bodyAttributes={{style: 'background-color : #FFD275'}}/>
            <h3 className='logo'> PlatePal</h3>
            <button className='login-button'>Login</button>
            <button className='register-button'>Register</button>
        </>
    )
}
export default LandingPage;