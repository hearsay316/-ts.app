<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<style lang="stylus">
@import "assets/css/style.styl"
[v-cloak] {
  display: none;
}
p
  font-size px2rem(16)
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width:100%
  height:100%
</style>
