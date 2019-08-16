import React from "react";
import styles from "./dashboard.module.css";
import NewTask from "../NewTask";
import Task from "../Task";
import API from "../../services/api";

function Dashboard() {
  const [newSection, setNewSection] = React.useState(null);
  const [user, setUser] = React.useState(null);

  function newTask() {
    setNewSection(<NewTask />);
  }

  function myTask() {
    setNewSection(<Task />);
  }

  API.get("/users/me").then(res => {
    const user = res.data.name;
    console.log(user);
    setUser(user.toUpperCase());
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Hello <em>{user}</em>
      </h2>
      <div className={styles.buttons}>
        <button onClick={newTask}>New Task</button>
        <button onClick={myTask}>My Tasks</button>
      </div>
      <section>{newSection}</section>
    </div>
  );
}
export default Dashboard;
