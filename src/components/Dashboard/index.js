import React from 'react'
import styles from './dashboard.module.css'
import NewTask from "../NewTask";
import Task from '../Task'
import API from '../../services/api'

function Dashboard(){
  const [newSection, setNewSection] = React.useState(null);
  const [user, setUser] = React.useState(null)

  function newTask() {
    setNewSection(<NewTask />)
  }

  function myTask(){
    setNewSection(<Task />)
  }

  API.get('/users/me').then(res => {

    const user = res.data.name
    console.log(user)
    setUser(user)
  })

  return (
    <div className={styles.wrapper}>
      <h2>Hello {user}</h2>
      <button onClick={newTask}>Create new Task</button>
      <button onClick={myTask}>My Tasks</button>
      <section>
        {newSection}
      </section>
    </div>
  );
}
export default Dashboard