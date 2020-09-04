<template>
  <section class="align-center">
    <div class="login-wrapper">
      <div class="login-input-style">
        <label for="username">
          <input
            v-model="usernameModel"
            placeholder="Name"
            id="username"
            type="text"
          />
        </label>
        <span class="error-message" v-if="this.credentials"
          >Wrong Credentials!
        </span>
      </div>
      <div class="login-button-style">
        <button id="login" @click="this.login">Login</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "./../store";
import type from "@/store/types";

@Options({
  data() {
    return {
      usernameModel: "",
      credentials: false
    };
  },
  props: {
    msg: String
  },
  methods: {
    login() {
      if (this.usernameModel != "") {
        this.$router.push("/home");
        store.dispatch({
          type: type.IS_LOGGED,
          payload: true
        });
        store.dispatch({
          type: type.CURRENT_USER,
          payload: this.usernameModel
        });
      } else {
        this.credentials = true;
      }
    }
  }
})
export default class Login extends Vue {}
</script>
