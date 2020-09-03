<template>
  <section class="height-80vh">
    <Videoplayer />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Videoplayer from "@/components/Videoplayer.vue";

@Options({
  components: {
    Videoplayer
  }
})
export default class Home extends Vue {}
</script>
