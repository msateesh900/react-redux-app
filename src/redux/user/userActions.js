import axios from "axios";
// import fetchUsersRequest from "redux";
import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./userTypes";

export const userFetchRequest = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

export const userFetchSuccess = (users) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
};

export const userFetchFailure = (error) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userFetchRequest);
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(userFetchSuccess(users));
      })
      .catch((error) => {
        const erorrMsg = error.message;
        dispatch(userFetchFailure(erorrMsg));
      });
  };
};
