import React from 'react';
import styles from '../QuickSummary.module.scss';

const CookingTimeSummary = (props) => {
  return (
    <div className={styles.QuickSummaryContainer}>
      <img
        className={styles.QuickSummaryIcon}
        src="https://spoonacular.com/application/frontend/images/badges/fast.svg"
        alt="time to cook"
      ></img>
      <p>{props.readyInMinutes} Minutes</p>
    </div>
  );
};

export default CookingTimeSummary;
