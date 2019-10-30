<template>
  <div class="mode-options">
    <div class="mode-options-item"></div>
  </div>
</template>

<script>
export default {
  name: "modeOptions",
  data() {
    return {
      dataSource: [
        {
          id: "1",
          icon: require("@img/jingDongCHaoShi.png"),
          title: "京东超市"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
