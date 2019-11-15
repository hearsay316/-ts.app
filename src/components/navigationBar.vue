<template>
  <div class="navigationBar z-index-max" :class="{'bottom-line':pageName}">
    <div class="navigationBar-left">
      <!--默认是后退-->
      <img
        v-if="!isShowBack"
        class="navigationBar-left-img"
        src="@img/back.svg"
        alt="back"
      />
      <slot name="nav-left"></slot>
    </div>
    <div class="navigationBar-center">
      <span class="page-title" v-if="pageName">{{ pageName }}</span>
      <slot name="nav-center"></slot>
    </div>
    <div class="navigationBar-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigationBar",
  props: {
    pageName: {
      type: String,
      default: ""
    },
    isShowBack: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~@css/style.styl"
   .navigationBar{
     width:100%
     height px2rem(44)
     line-height px2rem(44)
     display flex
     justify-content space-between

   }
  .navigationBar-left ,.navigationBar-right{
    display flex
    height:100%
    width:px2rem(26)
    padding 0 marginSize
  }
  .navigationBar-left-img{
    width:100%
    align-self center
  }
  .navigationBar-center{
    height:100%
  }
  .page-title{
    font-size titleSize
  }
  .bottom-line{
    border-bottom 1px solid lineColor
  }
</style>
