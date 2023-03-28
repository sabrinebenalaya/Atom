import React, { useState } from "react";
import CustomInput from "./../../Atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButon from "../../Atoms/Button";
import { styleAdd } from "./../../Style/style";

import { useUser } from './../../Hooks/useUser';

function AddUser() {
  const {handelSubmit, handelChang}= useUser();
 
 
  const handelChange=(ev)=>{
    handelChang( ev);
  }
  return (
    <Form style={styleAdd}>
      <CustomInput
        type="text"
        placeholder="tape your name"
        labelField="Your Name"
        name="userName"
        handelChange={handelChange}
      />
      <CustomInput
        type="number"
        placeholder="tape your age"
        labelField="Your Age"
        name="age"
        handelChange={handelChange}
      />
      <CustomInput
        type="email"
        placeholder="tape your email"
        labelField="Your Email"
        name="email"
        handelChange={handelChange}
      />
      <CustomInput
      type="password"
      placeholder="tape your password"
      labelField="Your password"
      name="password"
      handelChange={handelChange}
    />
      <CustomButon
        variant="primary"
        title="Add User"
        handelSubmit={(e)=>{handelSubmit(e)}}
      />
    </Form>
  );
}

export default AddUser;
