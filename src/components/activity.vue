<template>
  <!--只是提供活动一个空间,用来存放活动的额一个内容你是什么活动不关注-->
  <div class="activity">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "activity"
};
</script>

<style lang="stylus" scoped>
@import "~@css/style.styl"
.activity
    max-height px2rem(160)
    position relative
    z-index 2
</style>
