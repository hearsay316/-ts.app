<template>
  <div class="shopping">
    <navigationBar  pageName="购物车" :isShowBack="false"></navigationBar>
    shopping
  </div>
</template>

<script>
import navigationBar from "@com/navigationBar.vue";
export default {
  name: "shopping",
  components: {
    navigationBar
  }
};
</script>

<style lang="stylus" scoped>
.shopping
    width:100%
    height:100%
    font-size 32px;
</style>
