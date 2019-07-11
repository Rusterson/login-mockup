import React from "react";
import styles from "./success.module.css";
import { logout, isAuthenticated } from "../Login/auth";
import { withRouter } from 'react-router-dom'

function Success(props) {
  function handleLogout() {
    logout();
    if (!isAuthenticated()) {
      return props.history.push("/");
    }
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Success</h3>
      <button type="submit" onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
}
export default withRouter(Success);
