import axios from "axios";
import authActions from "./contacts-book-actions";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/users/signup", credentials);
    console.log(response);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};
export default { register, logIn };
