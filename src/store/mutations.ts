/* eslint-disable */
// I prefer to work with typescript but as I wish to finish this faster I didnt use types
const themeState = (state: any) => {
  state.darkMode = !state.darkMode;
};
const currentUser = (state: any, payload: any) => {
  state.currentUser = payload.payload;
};
const isLogged = (state: any, payload: any) => {
  state.isLogged = payload.payload;
};

export default {
  themeState,
  currentUser,
  isLogged
};
