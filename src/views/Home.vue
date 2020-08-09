<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>

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
export default {};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>