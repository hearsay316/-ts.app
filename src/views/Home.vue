<template>
  <div class="home">
    <nut-button @click="handleBtnClick">
      去结算
    </nut-button>
    <tsToolBar></tsToolBar>
  </div>
</template>

<script>
// @ is an alias to /src
import tsToolBar from "@components/tsToolBar.vue";

export default {
  name: "home",
  components: {
    tsToolBar
  },
  data() {
    return {};
  },
  methods: {
    handleBtnClick() {
      this.$toast.text("提示信息", {
        duration: 4000, //展示时长
        center: true, //是否居中展示，值为false时展示在页面底部
        bottom: 40, //展示在页面底部时，距底部的距离（px)
        textAlignCenter: true //多行文本是否居中展示，值为false时单行居中，多行居左
      });
    }
  }
};
</script>
