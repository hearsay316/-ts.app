<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleBtnClick">按钮</button>
    <nut-button @click="handleBtnClick">
      去结算
    </nut-button>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
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
