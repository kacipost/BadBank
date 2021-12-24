import React from "react";
import Card from 'react-bootstrap/Card';

function FormField({ name, label, ...rest }) {
  return (
    <div>
      
      <label htmlFor={name}>{label}</label>
      <input  id={name} name={name} {...rest} />
      
    </div>

  );
  
}

export default FormField;