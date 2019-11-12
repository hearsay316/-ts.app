<template>
  <div class="classify">
    <navigationBar pageName="分类" :isShowBack="false"></navigationBar>
    classify
  </div>
</template>

<script>
import navigationBar from "@com/navigationBar.vue";
export default {
  name: "classify",
  components: {
    navigationBar
  }
};
</script>

<style lang="stylus" scoped>
.classify
  width:100%
  height:100%
  font-size 32px;
</style>
