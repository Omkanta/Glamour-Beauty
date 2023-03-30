import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESSFUL } from "./actionType";

const initalState = {
  isLoading: false,
  isError: false,
  isFailure: false,
  isAuth: localStorage.getItem("activeid") != undefined ? true : false,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true };
    case AUTH_SUCCESSFUL:
      return { ...state, isLoading: false, isAuth: true };
    case AUTH_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
