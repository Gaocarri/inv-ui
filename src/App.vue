<template>
<Topnav />
<router-view />
</template>

<script lang="ts">
import Topnav from "./components/Topnav.vue";
import {
    ref,
    provide
} from "vue";

export default {
    name: "App",
    components: {
        Topnav,
    },
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true);
        provide("menuVisible", menuVisible);
    },
};
</script>
