import React from "react";
// scss module approach example
import styles from "./CreateAccount.module.scss";
class CreateAccount extends React.Component {
  render() {
    return <div className={styles.text}>CreateAccount</div>;
  }
}

export default CreateAccount;
