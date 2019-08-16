import React from "react";
import API from "../../services/api";
import styles from "./newTask.module.css";

const initValue = {
  description: "",
  completed: false
};

function NewTask() {
  const [values, setValues] = React.useState(initValue);

  function handleChange(e) {
    e.preventDefault();
    setValues({ [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    setValues(initValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("va", values);
    API.post("/tasks", values)
      .then(res => {
        console.log(res);
        setValues(initValue);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className={styles.wrappers}>
      <form id="description" onSubmit={handleSubmit}>
        <input
          name="description"
          value={values.description}
          onChange={handleChange}
          required
          type="text"
        />
      </form>
      <div className={styles.buttons}>
        <button form="description" type="submit">
          Add
        </button>
        <button type="button" onClick={handleClick}>
          Clean
        </button>
      </div>
    </div>
  );
}
export default NewTask;
