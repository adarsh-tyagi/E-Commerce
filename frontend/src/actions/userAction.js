import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstant";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = axios.post(`/api/v1/login`, { email, password }, config);
    console.log("data", data)
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
      console.log("error",error)
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
