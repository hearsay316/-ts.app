<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
@import "assets/css/style.styl"
p
  font-size px2rem(16)
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width:100%
  height:100%
</style>
