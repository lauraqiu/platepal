import React from "react";
import styles from "./ProfileRestrictionInfo.module.scss";
import add_button from "../../assets/images/add_preference_button.svg";
import { withRouter } from "react-router";
import path from "../../constant/routes";

const ProfileRestrictionInfo = (props) => {
  const route = path.diet;

  return (
    <div className={styles.specificPreferenceContainer}>
      <h4 className={styles.specificPreferenceTitle}>
        {props.preferenceTitle}
      </h4>
      <ul className={styles.preferenceList}>
        {props.preferenceArr.map((val, index) => {
          return (
            <li key={val + index} className={styles.preferenceItem}>
              {val}
            </li>
          );
        })}
        <li key="addMore">
          <img
            src={add_button}
            alt="plus symbol"
            onClick={() => {
              props.history.push(route);
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default withRouter(ProfileRestrictionInfo);
