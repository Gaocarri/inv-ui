<template>
<Topnav />
<div class="banner">
    <h1>inv-ui</h1>
    <h2>An Easy Vue UI</h2>
    <p class="actions">
        <a href="https://github.com/Gaocarri/inv-ui" target="blank">GitHub</a>
        <router-link to="/doc">Start</router-link>
    </p>
</div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
    components: {
        Topnav,
    },
};
</script>

<style lang="scss" scoped>
.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 8px;
        }
    }
}
</style>
