import React from "react";
import styles from "./terms.module.css";

function Terms({ title, text }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
export default Terms;
