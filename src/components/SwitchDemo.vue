<template>
<Switch :value="y" @input="y=$event" />
</template>

<script>
import Switch from "../lib/Switch.vue";
import {
    ref
} from "vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const y = ref(false);
        return {
            y,
        };
    },
};
</script>

<style>
</style>
