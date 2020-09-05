/* eslint-disable */
// I prefer to work with typescript but as I wish to finish this faster I didnt use types
import type from "@/store/types";

const themeState = ({ commit }: any) => {
  commit(type.THEME_STATE);
};

const currentUser = ({ commit }: any, payload: any) => {
  commit(type.CURRENT_USER, payload);
};

const isLogged = ({ commit }: any, payload: any) => {
  commit(type.IS_LOGGED, payload);
};

export default {
  themeState,
  currentUser,
  isLogged
};
