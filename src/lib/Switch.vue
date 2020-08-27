<template>
<button>
    <span></span>
</button>
</template>

<script>
export default {};
</script>

<style lang="scss">
$h1: 22px;
$h2: $h1 - 4px;

button {
    height: $h1;
    width: $h1 * 2;
    border: none;
    background-color: blue;
    border-radius: $h1/2;
    position: relative;

    >span {
        height: $h2;
        width: $h2;
        background-color: #ddd;
        border-radius: $h2/2;
        position: absolute;
        top: 2px;
        left: 2px;
    }
}
</style>
