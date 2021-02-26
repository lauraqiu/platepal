import React from 'react';
import styles from '../QuickSummary.module.scss';

const CostSummary = (props) => {
  return (
    <div className={styles.QuickSummaryContainer}>
      <img
        className={styles.QuickSummaryIcon}
        src="https://spoonacular.com/application/frontend/images/badges/cheap.svg"
        alt="cost"
      ></img>
      <p>${props.pricePerServing}</p>
    </div>
  );
};

export default CostSummary;
