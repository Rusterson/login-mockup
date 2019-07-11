import React from "react";
import styles from "./info.module.css";
import logo from "../../assets/logo/logo.svg";

function Info() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <i>
          <img src={logo} alt="logo" />
        </i>
        <h1 className={styles.title}>Brain</h1>
        <div className={styles.textBox}>
          <h3 className={styles.subTitle}>
            Voluptatem et laboriosam velit quam quo nihil nesciunt.
          </h3>
          <p className={styles.text}>
            Corporis totam et quibusdam sunt ut asperiores eos consequatur.
            Porro et officiis et maiores natus dolorem accusamus repellendus
            velit. Repudiandae rerum laboriosam.Natus eligendi et fugit ut
            deleniti animi quibusdam officia minus. Dolores voluptatem velit
            sit. Quod numquam officia consequuntur at quis soluta consequatur
            maxime.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info;
