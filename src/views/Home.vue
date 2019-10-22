<template>
  <div class="home">
    <Slider :pices="picData"></Slider>
    <component :is="componoentId"></component>
    <tsToolBar @onChangFragment="onChangFragment"></tsToolBar>
  </div>
</template>

<script>
/* eslint-disable no-console */

// @ is an alias to /src
import tsToolBar from "@com/tsToolBar.vue";

export default {
  name: "home",
  components: {
    tsToolBar: tsToolBar,
    my: () => import("@com/my"),
    shopping: () => import("@com/shopping"),
    classify: () => import("@com/classify"),
    Slider: () => import("@com/Slider.vue")
  },
  data() {
    return {
      componoentId: "my",
      name: "home",
      first: "my",
      picData: ["这个是第一", "这个是第二", "这个是第三"]
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
      console.log(this);
      return this.name === componentName
        ? (this.componoentId = this.first)
        : (this.componoentId = componentName);
    }
  }
};
</script>
<style lang="stylus" scoped>
.home
  width:100%
  height:100%
  display flex
  flex-direction column
  font-size 32px;
</style>
