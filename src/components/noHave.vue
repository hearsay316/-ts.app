<template>
  <span class="no-have">缺货</span>
</template>

<script>
export default {
  name: "noHave"
};
</script>

<style lang="stylus" scoped>
    @import "~@css/style.styl"
.no-have
    padding 0 px2rem(4)
    font-size minInfoSize
    color white
    background-color #999999
    border-right px2rem(2)
    margin-right px2rem(2)
</style>
