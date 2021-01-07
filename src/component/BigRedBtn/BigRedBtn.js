import React from "react";
import styles from "./BigRedBtn.module.scss";
const BigRedBtn = (props) => {
  return (
    <button className={[styles.redBtn, props.styles].join(" ")}>
      {props.value}
    </button>
  );
};

export default BigRedBtn;
