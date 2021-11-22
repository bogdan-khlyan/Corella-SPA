<template>
  <div id="app">
    <transition name="el-fade-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

@import "assets/scss/style";

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
