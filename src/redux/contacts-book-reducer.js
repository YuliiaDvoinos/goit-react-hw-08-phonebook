import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./contacts-book-actions";
const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI5MTEzNzJhZTNiMDAwMTU0MzRhMjEiLCJpYXQiOjE2MjI3NDEzMDN9.OeqM7eemG0U8y1a434Vv8y3R2Gd2tKJQthxjj0HmBgs"
// user: {name: "Юлія Двойнос", email: "tandoku@mail.ru"}
