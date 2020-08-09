<template>
  <Topnav />
  <router-view />
</template>

<script lang="ts">
import Topnav from "./components/Topnav.vue";
import { ref, provide } from "vue";

export default {
  name: "App",
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = ref(false);
    provide("xxx", menuVisible);
  },
};
</script>
