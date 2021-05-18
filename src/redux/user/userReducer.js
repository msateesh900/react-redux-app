import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./userTypes";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case USER_FETCH_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
