import React from 'react';
import styles from './ProfileRestrictionInfo.module.scss';
import add_button from '../../assets/images/add_preference_button.svg';

const ProfileRestrictionInfo = (props) => {
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
        <li key='addMore'>
          <img src={add_button} alt='plus symbol'></img>
        </li>
      </ul>
    </div>
  );
};

export default ProfileRestrictionInfo;
