import React from "react";
import styles from "./task.module.css";
import API from "../../services/api";

function Task() {
  const [load, setLoad] = React.useState(false);
  const [dados, setDados] = React.useState([]);
  function randomColor() {
    let x = Math.floor(Math.random() * 255);
    return x;
  }

  function fillColor() {
    const randomColorBg = {
      backgroundColor: `rgba(${randomColor()},${randomColor()},${randomColor()},0.7)`
    };
    return randomColorBg;
  }

  const arrayColor = Array(...Array(dados.length)).map(() => fillColor());
  React.useEffect(() => {
    API.get("/tasks").then(res => {
      setDados(res.data);
      setLoad(false);
    });
  }, [load]);

  const handleChange = (e, item) => {
    let newValue = e.target.checked;
    API.patch("/tasks/" + item._id, {
      completed: newValue
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    setLoad(true);
  };

  const handleDelete = item => {
    API.delete("/tasks/" + item._id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    setLoad(true);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.subTitle}>My Tasks here !!</p>
      <div className={styles.container}>
        {dados.map((item, i) => (
          <div key={item._id} style={arrayColor[i]} className={styles.task}>
            <p key={item._id}>{item.description}</p>
            <form action="">
              <input
                name="check"
                checked={item.completed}
                onChange={e => handleChange(e, item)}
                type="checkbox"
              />
              <label htmlFor="check">Complete</label>
            </form>
            <button type="button" onClick={() => handleDelete(item)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Task;
