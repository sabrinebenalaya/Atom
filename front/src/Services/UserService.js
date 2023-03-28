import axios from "axios";
export const GET_ALL_SERVICE = (url) => axios.get(url)
export const GET_ONE_USER_SERVICE = (url, params) => axios.get(url, params)

export const ADD_USER_SERVICE =(url, params)=>axios.post(url, params)