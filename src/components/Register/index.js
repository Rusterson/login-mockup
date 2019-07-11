import React from "react";
import styles from "./register.module.css";
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title} >Create account</h3>
      <form className={styles.form} action="" name="register">
        <div className={styles.field}>
          <label form="register" htmlFor="name">
            Your name
          </label>
          <input required form="register" nome="nome" type="text" />
        </div>
        <div className={styles.field}>
          <label form="register" htmlFor="email">
            Email
          </label>
          <input required form="register" nome="email" type="email" />
        </div>
        <div className={styles.field}>
          <label form="register" htmlFor="password">
            Password
          </label>
          <input required form="register" nome="password" type="password" />
        </div>
        <div className={styles.field}>
          <label form="register" htmlFor="re-password">
            Re-enter password
          </label>
          <input required form="register" nome="re-password" type="password" />
        </div>
        <div className={styles.fieldTerms}>
          <input required name="terms" type="checkbox" />
          <label form="register" htmlFor="terms">
            I read and agree to the <Link to='/terms-of-use' >Terms of Use</Link> and{" "}
            <Link to='/privacy-policy' >Privacy Policy</Link>.
          </label>
        </div>
        <button className={styles.button}>Create Account</button>
      </form>
      <span>Already have an account? <Link to='/login' > Login </Link></span>
    </div>
  );
}
export default Register;
