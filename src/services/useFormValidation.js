import React from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  return {
    handleChange,
    values
  };
}
export default useFormValidation;
