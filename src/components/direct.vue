<template>
  <!--直营标签-->
  <span class="direct">直营</span>
</template>

<script>
export default {
  name: "direct"
};
</script>

<style lang="stylus" scoped>
@import "~@css/style.styl"
.direct
    padding 0 px2rem(4)
    font-size minInfoSize
    color white
    background-color mainColor
    border-radius px2rem(2)
    margin-right px2rem(2)
</style>
