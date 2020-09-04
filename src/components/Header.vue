<template>
  <header>
    <nav class="header">
      <div>
        <img
          class="img-style"
          v-if="!darkMode"
          src="https://cyrap.com/vaudience_logo_black.png"
          alt="light"
        />
        <img
          class="img-style"
          v-if="darkMode"
          src="https://cyrap.com/vaudience_logo_white.png"
          alt="dark"
        />
      </div>
      <div class="salute">
        <h2 class="dynamic-title">Hello {{currentUser}}</h2>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: mapState(["darkMode", "isLogged", "currentUser"])
})

export default class Header extends Vue {};
</script>
