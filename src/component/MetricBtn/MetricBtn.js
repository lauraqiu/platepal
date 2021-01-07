import React from "react";
import styles from "./MetricBtn.module.scss";
const MetricBtn = (props) => {
  return (
    <div className={styles.btnContainer}>
      <button
        onClick={props.click}
        className={props.selected ? styles.selected : null}
      >
        <div className={styles.text}>
          <span className={styles.btnLabel}>{props.label}</span>
          <span className={styles.btnSubLabel}>{props.subLabel}</span>
        </div>
      </button>
    </div>
  );
};

export default MetricBtn;
