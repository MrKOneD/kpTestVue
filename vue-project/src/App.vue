<template>
  <div id="app">
  <transition name="fade">
    <router-view></router-view>
  </transition>
  </div>
</template>

<style>
  @import "assets/css/reset.css";
</style>
<style lang="less">
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all 0.2s;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  margin: 5vw;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
