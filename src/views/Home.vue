<template>
  <div class="home">
    <component :is="componoentId"></component>
    <tsToolBar @onChangFragment="onChangFragment"></tsToolBar>
  </div>
</template>

<script>
/* eslint-disable no-console */

// @ is an alias to /src
import tsToolBar from "@com/tsToolBar.vue";
import Index from "@com/Index.vue";
export default {
  name: "home",
  components: {
    tsToolBar: tsToolBar,
    my: () => import("@com/my"),
    shopping: () => import("@com/shopping"),
    classify: () => import("@com/classify"),
    Index: () => import("@com/Index.vue")
  },
  data() {
    return {
      componoentId: "index",
      name: "home",
      first: "my"
    };
  },
  methods: {
    handleBtnClick() {
      this.$toast.text("提示信息", {
        duration: 4000, //展示时长
        center: true, //是否居中展示，值为false时展示在页面底部
        bottom: 40, //展示在页面底部时，距底部的距离（px)
        textAlignCenter: true //多行文本是否居中展示，值为false时单行居中，多行居左
      });
    },
    onChangFragment(item) {
      let { componentName } = item;
      //this.componoentId = componentName;
      console.log(this, componentName);
      this.componoentId = componentName;
    }
  }
};
</script>
<style lang="stylus" scoped>
  @import "~@css/style.styl"
.home
  width:100%
  height:100%
  display flex
  flex-direction column
  font-size 32px;
</style>
