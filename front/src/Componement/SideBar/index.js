import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CustomButon from "../../Atoms/Button";
import CustomInput from "../../Atoms/Input";
import CustomRadio from "./../../Atoms/Radio";
import { styleSideBar } from "./../../Style/style";
import { useUser } from "./../../Hooks/useUser";
function SideBar() {
  const { setSearchName } = useUser();
const navigate = useNavigate()
  return (
    <div>
      {" "}
      <div style={styleSideBar}>
        <CustomInput
          labelField="Search By :"
          type="text"
          placeholder="User Name"
          name="userName"
          handelChange={(e) => setSearchName(e.target.value)}
        />
        <CustomRadio type="radio" label="0-18" />
        <CustomRadio type="radio" label="18-30" />
        <CustomRadio type="radio" label="+30" />
        <CustomButon
          variant="primary"
          title="Add User"
          style={{ marginTop: "5%" }}
          handelSubmit={()=>navigate("/addUser")}
        />
      </div>
      <Outlet />
    </div>
  );
}

export default SideBar;
