<template>
  <div class="search">
    <img :src="icon" alt="" class="search" />
    <span>大前端开发混合京东商城</span>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
export default {
  name: "search",
  props: {
    icon: {
      default: require("@img/search.svg"),
      type: String
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "~@css/style.styl"

.search{
  background-color white
  width 100%
  margin px2rem(6)
  border-radius px2rem(22)
  display flex
  align-items center
}
</style>
