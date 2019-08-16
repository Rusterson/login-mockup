import React from "react";
import styles from "./task.module.css";
import API from "../../services/api";

function Task() {
  // const [task, setTask] = React.useState(null);
  const [dados, setDados] = React.useState([]);
  function randomColor() {
    let x = Math.floor(Math.random() * 255);
    return x;
  }

  const randomColorBg = {
    backgroundColor: `rgba(${randomColor()},${randomColor()},${randomColor()},0.7)`
  };
  React.useEffect(() => {
    API.get("/tasks").then(res => {
      setDados(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <p>My Tasks here !!</p>
        {dados.map((item, i) => (
          <div style={randomColorBg} className={styles.task}>
            <p key={i}>{item.description}</p>
            <form action="">
              <input
                onChange={e => (e.target.checked = item.completed)}
                type="checkbox"
              />
              <label htmlFor="check">Complete</label>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Task;
