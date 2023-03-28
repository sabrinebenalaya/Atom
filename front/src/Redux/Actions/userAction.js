import { GET_ALL_USERS, ADD_USER, GET_USER_BY_NAME } from "../constante";
import { URL_API_USER, URL_API_ONE_USER } from "../../Api";
import {
  GET_ALL_SERVICE,
  ADD_USER_SERVICE,
  GET_ONE_USER_SERVICE,
} from "../../Services/UserService";

//get all the user
export const getAllUsers = () => async (dispatch) => {
  try {
    const {
      data: { users },
    } = await GET_ALL_SERVICE(URL_API_USER);
    dispatch({ type: GET_ALL_USERS, payload: users });
  } catch (e) {
    console.log(e);
  }
};

//get user by name
export const getUserByName = (userName) => async (dispatch) => {
  try {
    const {
      data: { person },
    } = await GET_ONE_USER_SERVICE(URL_API_ONE_USER, userName);
    dispatch({ type: GET_USER_BY_NAME, payload: person });
  } catch (e) {
    console.log(e);
  }
};

// add user

export const addUser = (newUser) => async (dispatch) => {


  try {
    await ADD_USER_SERVICE(URL_API_USER, newUser);
    const {
      data: { users },
    } = await GET_ALL_SERVICE(URL_API_USER);
 
    dispatch({ type: ADD_USER, payload: users });

  } catch (e) {
    console.log(e);
  }
};
