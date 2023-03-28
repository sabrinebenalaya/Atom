import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  addUser,
  getUserByName,
} from "../Redux/Actions/userAction";
import { useNavigate } from 'react-router-dom';
export const useUser = () => {
  const [SearchName, setSearchName] = useState();
const navigate = useNavigate()
  const [newUser, setNewUser] = useState();
  const handelChang = (e) => {
    if (e.target.name=== "age"){
      setNewUser({ ...newUser, [e.target.name]: Number(e.target.value) });
    }else{
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  const dispatch = useDispatch();
  const users = useSelector((state) => state.ReducerUser.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser(newUser));
    navigate("/")
  };
  useEffect(() => {
    const params = { userName: SearchName };
    dispatch(getUserByName({ params }));
  }, [SearchName]);

  return { users, handelSubmit, setSearchName , handelChang};
};
