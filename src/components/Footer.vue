<template>
  <footer class="footer">
    <div class="md-switch">
      <label class="switch">
        <input
          type="checkbox"
          @click="switchMode"
          v-model="darkMode"
          id="switch"
        />
        <span class="slider round"></span>
      </label>
    </div>
  </footer>
</template>

<script lang="ts">
import store from "@/store";
import type from "@/store/types";

export default {
  data() {
    return {
      darkMode: store.getters.getterThemeState
    };
  },
  mounted() {
    const bodyElement = document.body;
    bodyElement.classList.add("app-background");
  },
  methods: {
    switchMode() {
      store.dispatch(type.THEME_STATE);
    }
  },
  watch: {
    darkMode: function() {
      const htmlElement = document.documentElement;

      if (!this.darkMode) {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("theme", "dark");
      }
    }
  }
};
</script>
