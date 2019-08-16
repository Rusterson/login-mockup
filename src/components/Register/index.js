import React from "react";
import styles from "./register.module.css";
import { ReactComponent as Tips } from "../../assets/icons/tips.svg";
import { Link, withRouter } from "react-router-dom";
import API from "../../services/api";

const initState = {
  name: "",
  email: "",
  password: "",
  repPassword: ""
};

function Register(props) {
  const [values, setValues] = React.useState(initState);
  const [tools, setTools] = React.useState({ display: "none" });

  const isMatch = values.password === values.repPassword;

  const checkBox = React.useRef(null);

  const handleChange = e => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkBox.current.checked = false;
    let send = {
      name: values.name,
      email: values.email,
      password: values.password,
      age: "0"
    };
    API.post("/users", send)
      .then(res => {
        console.log(res.status);

        setValues(initState);
        props.history.push("/registerSuccess");
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleValidity = e => {
    e.preventDefault();
    if (isMatch) {
      setTools({ display: "none" });
    } else {
      setTools({ display: "block" });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Create account</h3>
      <form
        id="register"
        className={styles.form}
        onSubmit={handleSubmit}
        name="register"
      >
        <div className={styles.field}>
          <label form="register" htmlFor="name">
            Your name
          </label>
          <input
            onChange={handleChange}
            value={values.name}
            required
            form="register"
            name="name"
            type="text"
          />
        </div>
        <div className={styles.field}>
          <label form="register" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            value={values.email}
            required
            form="register"
            name="email"
            type="email"
          />
        </div>
        <div className={styles.field}>
          <label form="register" htmlFor="password">
            Password
          </label>
          <input
            minLength="8"
            onChange={handleChange}
            value={values.password}
            required
            form="register"
            name="password"
            type="password"
          />
        </div>
        <div className={styles.field}>
          <label form="register" htmlFor="re-password">
            Re-enter password
          </label>
          <input
            onBlur={handleValidity}
            minLength="8"
            onChange={handleChange}
            value={values.repPassword}
            required
            form="register"
            name="repPassword"
            type="password"
          />
          <span style={tools} className={styles.tooltips}>
            <Tips className={styles.icon} />
            Password don't match !
          </span>
        </div>
        <div className={styles.fieldTerms}>
          <input
            ref={checkBox}
            required
            name="terms"
            form="register"
            type="checkbox"
          />
          <label form="register" htmlFor="terms">
            I read and agree to the <Link to="/terms-of-use">Terms of Use</Link>{" "}
            and <Link to="/privacy-policy">Privacy Policy</Link>.
          </label>
        </div>
        <button disabled={!isMatch} type="submit" className={styles.button}>
          Create Account
        </button>
      </form>
      <span className={styles.link}>
        Already have an account? <Link to="/login"> Login </Link>
      </span>
    </div>
  );
}
export default withRouter(Register);
