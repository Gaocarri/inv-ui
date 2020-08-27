<template>
<button @click="toggle" :class="{checked:checked}">
    <span></span>
</button>
</template>

<script>
import {
    ref
} from "vue";
export default {
    setup() {
        const checked = ref(false);
        const toggle = () => {
            checked.value = !checked.value;
        };
        return {
            checked,
            toggle,
        };
    },
};
</script>

<style lang="scss">
$h1: 22px;
$h2: $h1 - 4px;

button {
    height: $h1;
    width: $h1 * 2;
    border: none;
    background-color: grey;
    border-radius: $h1/2;
    position: relative;
    transition: background-color 0.3s ease-in-out;

    >span {
        height: $h2;
        width: $h2;
        background-color: #ddd;
        border-radius: $h2/2;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: left 0.3s ease-in-out;
    }

    &.checked {
        background-color: blue;
        border: none;

        >span {
            left: calc(100% - 2px - #{$h2});
        }
    }

    // 解决点击button有圈圈的问题
    &:focus {
        outline: none;
    }
}
</style>
