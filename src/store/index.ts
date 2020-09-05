import { createStore } from "vuex";

import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

export default createStore({
  state: () => ({
    darkMode: false,
    isLogged: false,
    currentUser: "Stranger"
  }),
  actions: actions,
  mutations: mutations,
  getters: getters
});
