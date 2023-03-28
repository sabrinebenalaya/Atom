import React from 'react'
import Form from 'react-bootstrap/Form';
function CustomInput({labelField, type, placeholder, name, handelChange}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{labelField}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} name={name} onChange={handelChange}/>
     
      </Form.Group>
  )
}

export default CustomInput;