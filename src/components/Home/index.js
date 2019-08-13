import React from "react";
import styles from "./home.module.css";
import logo from "../../assets/logo/logo.svg";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h2 className={styles.wellcome}>Wellcome</h2>
        <img src={logo} alt="" className={styles.logo} />
        <h1 className={styles.title}>Brain</h1>
        <span className={styles.links}>
          <Link to='/login'>Login</Link> or <Link to='/register'> Register</Link>
        </span>
      </div>
    </div>
  );
}
export default Home;
