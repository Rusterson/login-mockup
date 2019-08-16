import React from "react";
import API from '../../services/api'

const initValue = {
  description: "",
  completed: false
}

function NewTask() {
  const [values, setValues] = React.useState(initValue);

  function handleChange(e) {
    e.preventDefault();
    setValues({[e.target.name]:e.target.value});
  }

  function handleClick(e) {
    e.preventDefault();
    setValues(initValue);
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('va',values)
    API.post('/tasks',values).then(res =>{
      console.log(res)
    })
  }

  

  return (
    <div>
      <form action="">
        <input
          name="description"
          value={values.description}
          onChange={handleChange}
          required
          type="text"
        />
      </form>
      <button type='button' onClick={handleSubmit} >Add</button>
      <button type="button" onClick={handleClick}>
        Clean
      </button>
    </div>
  );
}
export default NewTask;