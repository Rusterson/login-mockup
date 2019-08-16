import React from "react";
import styles from "./success.module.css";
import { logout, isAuthenticated } from '../../services/auth';
import { withRouter } from "react-router-dom";

function Success({children, title, ...props}) {
  function handleLogout() {
    logout();
    if (!isAuthenticated()) {
      return props.history.push("/");
    }
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
      <button type="submit" onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
}
export default withRouter(Success);
