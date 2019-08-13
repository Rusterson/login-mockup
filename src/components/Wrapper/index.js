import React from "react";
import styles from "./wrapper.module.css";

function Wrapper(props) {
  return (
      <div className={styles.wrapper}>
        <div className={styles.box}>
          {props.children}
        </div>
      </div>
  );
}

export default Wrapper;
