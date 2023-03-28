import React from 'react'
import Button from 'react-bootstrap/Button';

function CustomButon({variant, title, type, style, handelSubmit}) {
  return (
    <Button variant={variant} type={type} style={style} onClick={handelSubmit}>{title}</Button>
  )
}

export default CustomButon;