import React from "react";
import styles from "./reset.module.css";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

function Reset() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h3 className={styles.title}>Reset Your Password</h3>
        <p className={styles.text}>
          Enter the email you use for your Brain account.
        </p>
        <form className={styles.form} action="" name="reset-password">
          <label form="reset-password" htmlFor="email-reset-password">
            Email Address
          </label>
          <div className={styles.field}>
            <input
              form="reset-password"
              type="email"
              required
              name="email-reset-password"
            />
            <Email className={styles.icoEmail} />
          </div>
          <button className={styles.button}>Continue</button>
        </form>
      </div>
    </div>
  );
}
export default Reset;
