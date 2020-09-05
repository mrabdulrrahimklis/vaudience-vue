/* eslint-disable */
// I prefer to work with typescript but as I wish to finish this faster I didnt use types
const getterThemeState = (state: any) => {
  return state.darkMode;
};

const currentUser = (state: any) => {
  return state.currentUser;
};

const isLogged = (state: any) => {
  return state.isLogged;
};

export default {
  getterThemeState,
  currentUser,
  isLogged
};
