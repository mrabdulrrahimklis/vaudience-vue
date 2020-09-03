import { createStore } from "vuex";
import type from "./types";

export default createStore({
  state: () => ({
    darkMode: false,
    isLogged: false,
    currentUser: "Stranger"
  }),
  actions: {
    themeState({ commit }) {
      commit(type.THEME_STATE);
    },
    currentUser({ commit }, payload) {
      commit(type.CURRENT_USER, payload);
    },
    isLogged({commit}, payload) {
      commit(type.IS_LOGGED, payload)
    }
  },
  mutations: {
    themeState(state) {
      state.darkMode = !state.darkMode;
    },
    currentUser(state, payload) {
      console.log(payload)
      state.currentUser = payload.payload
    },
    isLogged(state, payload) {
      console.log(payload)
      state.isLogged = payload.payload
    }
  },
  getters: {
    getterThemeState(state) {
      return state.darkMode;
    },
    currentUser(state) {
      return state.currentUser;
    },
    isLogged(state) {
      return state.isLogged;
    }
  }
});
