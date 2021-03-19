import React from 'react';
import styles from './LogoutBtn.module.scss';

const LogoutBtn = (props) => {
  return (
    <button className={styles.LogoutBtn} onClick={props.onClick}>
      LOGOUT
    </button>
  );
};

export default LogoutBtn;
