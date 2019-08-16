import React from "react";
import styles from "./login.module.css";
import { ReactComponent as Pass } from "../../assets/icons/pass.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { Link, withRouter } from "react-router-dom";
import useFormValidation from "../../services/useFormValidation";
import { login } from "../../services/auth";
import API from "../../services/api";

const INITIAL_STATE = {
  email: "",
  password: ""
};

function Login(props) {
  const { handleChange, values } = useFormValidation(INITIAL_STATE);
  const [errors, setErrors] = React.useState({});

  let error = {};
  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email) {
      error.email = "Required Email";
      setErrors(error);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      error.email = "Invalid email address";
      setErrors(error);
    }
    if (!values.password) {
      error.password = "Required Password";
      setErrors(error);
    } else if (values.password.length < 8) {
      error.password = "Password must be at least 8 characters";
      setErrors(error);
    } else {
      // api();
      console.log("Send ");
      send();
    }
  }

  async function send() {
    console.log(values);
    try {
      const resp = await API.post("/users/login", values);
      login(resp.data.token);
      props.history.push("/success");
    } catch (error) {
      setErrors(error);
      // error.api = "*" + resp.data.error;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h3 className={styles.title}>Login</h3>
        <form action="" name="login-form" onSubmit={handleSubmit}>
          <div className={styles.boxLabel}>
            <label form="login-form" htmlFor="email">
              Email
            </label>
            <div className={styles.inputField}>
              <input
                required
                form="login-form"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={errors.email && `${styles.errorInput}`}
              />
              <User className={styles.userSvg} />
            </div>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.boxLabel}>
            <div className={styles.forgot}>
              <label form="login-form" htmlFor="password">
                Password
              </label>
              <span className={styles.forgotPass}>
                <Link to="/forgot-password">Forgot your password?</Link>
              </span>
            </div>
            <div className={styles.inputField}>
              <input
                required
                form="login-form"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className={errors.password && "error-input"}
              />
              <Pass className={styles.passSvg} />
            </div>
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Enter
          </button>
          <br />
          {errors.api && <span className={styles.errorText}>{errors.api}</span>}
        </form>
        <div className={styles.register}>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
