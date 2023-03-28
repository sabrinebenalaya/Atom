import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_ALL_USERS,
  GET_USER_BY_NAME,
} from "../constante";

const initialState = { loading: false, users: [], user: {} };

const ReducerUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, Loading: false, users: action.payload };
    case GET_USER_BY_NAME:
      return { ...state, Loading: false, users: action.payload };
    case ADD_USER:
 
       const s={ ...state, Loading: false, users: action.payload };
       console.log({s})
       return s

    case UPDATE_USER:
      return { ...state, Loading: false, users: action.payload };

    case DELETE_USER:
      return { ...state, Loading: false, users: action.payload };
    default:
      return state;
  }
};

export default ReducerUser;
