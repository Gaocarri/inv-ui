<template>
<button @click="toggle" :class="{checked:value}">
    <span></span>
</button>
</template>

<script>
import {
    ref
} from "vue";
export default {
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            context.emit("input", !props.value);
        };
        return {
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
    transition: background-color 250ms ease-in-out;

    >span {
        height: $h2;
        width: $h2;
        background-color: #ddd;
        border-radius: $h2/2;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: left 250ms ease-in-out;
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
