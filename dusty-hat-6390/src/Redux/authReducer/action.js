import axios from "axios";
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESSFUL } from "./actionType";

export const authrequest = () => {
  return { type: AUTH_REQUEST };
};
export const authsuccess = () => {
  return { type: AUTH_SUCCESSFUL };
};
export const authfailure = () => {
  return { type: AUTH_FAILURE };
};

export const forSignup = (userData) => (dispatch) => {
  dispatch(authrequest());
  return axios
    .post(`http://localhost:3000/users`, { ...userData, cartitem: [] })
    .then((res) => {
      dispatch(authsuccess());
      return true;
    })
    .catch((er) => {
      dispatch(authfailure());
      return false;
    });
};

export const forLogin = (userData) => (dispatch) => {
  dispatch(authrequest());
  return axios.get(`http://localhost:3000/users`).then((res) => {
    for (const i of res.data) {
      if (i.email == userData.email && i.password == userData.password) {
        dispatch(authsuccess());
        return true;
      }
    }
    dispatch(authfailure());
    return false;
  });
};

//for toast
export const forToast = (toast, title, status) => {
  toast({
    position: "top",
    title: title,
    variant:'left-accent',
    status: status,
    duration: 3000,
    isClosable: true,
  });
};
