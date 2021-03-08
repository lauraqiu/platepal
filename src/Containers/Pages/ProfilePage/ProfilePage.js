import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import styles from './ProfilePage.module.scss';
import profilePageImg from '../../../assets/images/profilepagepicture.png';
import ProfileRestrictionInfo from '../../../component/ProfileRestrictionInfo/ProfileRestrictionInfo.js';
import { getPreferences } from '../../../utilities/firebase/index.js';
import LogoutBtn from '../../../component/LogoutBtn/LogoutBtn.js';
import ProfileMetricInfo from '../../../component/ProfileMetricInfo/ProfileMetricInfo.js';
import TopNavbar from '../../../component/navbars/TopNavbar';
import BottomNavbar from '../../../component/navbars/BottomNavbar';

const ProfilePage = (props) => {
  const initialState = {
    allergies: [],
    diet: [],
    metric: [],
  };
  const [userPreferences, setUserPreferences] = useState(initialState);
  useEffect(() => {
    let dataItem = {};
    getPreferences().then(
      (data) => {
        dataItem = data.val();
        setUserPreferences((prevState) => {
          return {
            ...prevState,
            allergies: dataItem.allergies,
            diet: dataItem.diet,
            metric: dataItem.metric,
          };
        });
      },
      (error) => {
        console.log('ERROR');
      }
    );
  }, []);

  const logoutHandler = () => {
    props.history.push('/');
  };

  return (
    <div className={styles.profilePageContainer}>
      <TopNavbar/>
      <div className={styles.profilePictureContainer}>
        <img
          className={styles.profilePicture}
          src={profilePageImg}
          alt='Profile'
        />
        <h3>FULL NAME</h3>
      </div>
      <div className={styles.profileSettingsContainer}>
        <h3 className={styles.preferenceType}>Dietary Restrictions</h3>
        <ProfileRestrictionInfo
          preferenceTitle='Allergies'
          preferenceArr={userPreferences.allergies}
        />
        <ProfileRestrictionInfo
          preferenceTitle='Diet'
          preferenceArr={userPreferences.diet}
        />
        <ProfileMetricInfo preferenceArr={userPreferences.metric} />
      </div>
      <LogoutBtn onClick={() => logoutHandler()} />
      <BottomNavbar fill='person'/>
    </div>
  );
};

export default withRouter(ProfilePage);
