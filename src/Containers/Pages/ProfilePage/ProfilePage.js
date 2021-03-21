import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import styles from "./ProfilePage.module.scss";
import profilePageImg from "../../../assets/images/profilepagepicture.png";
import ProfileRestrictionInfo from "../../../component/ProfileRestrictionInfo/ProfileRestrictionInfo.js";
import { getPreferences } from "../../../utilities/firebase/index.js";
import LogoutBtn from "../../../component/LogoutBtn/LogoutBtn.js";
import ProfileMetricInfo from "../../../component/ProfileMetricInfo/ProfileMetricInfo.js";

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
            allergies: dataItem.allergies ? dataItem.allergies : [],
            diet: dataItem.diet ? dataItem.diet : [],
            metric: dataItem.metric,
          };
        });
      },
      (error) => {
        console.log("ERROR");
      }
    );
  }, []);

  const logoutHandler = () => {
    props.history.push("/");
  };

  return (
    <div className={styles.profilePageContainer}>
      <div className={styles.profilePictureContainer}>
        <img
          className={styles.profilePicture}
          src={profilePageImg}
          alt="Profile"
        />
        <h3>FULL NAME</h3>
      </div>
      <div className={styles.profileSettingsContainer}>
        <h3 className={styles.preferenceType}>Dietary Restrictions</h3>
        <ProfileRestrictionInfo
          preferenceTitle="Allergies"
          preferenceArr={userPreferences.allergies}
        />
        <ProfileRestrictionInfo
          preferenceTitle="Diet"
          preferenceArr={userPreferences.diet}
        />
        <ProfileMetricInfo preferenceArr={userPreferences.metric} />
      </div>
      <LogoutBtn onClick={() => logoutHandler()} />
    </div>
  );
};

export default withRouter(ProfilePage);
