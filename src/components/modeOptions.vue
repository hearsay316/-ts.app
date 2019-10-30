<template>
  <div class="mode-options">
    <div class="mode-options-item" v-for="item of dataSource" :key="item">
      <img class="mode-options-item-icon" :src="item.icon" :alt="item.title" />
      <div class="mode-options-item-title">{{ item.title }}</div>
    </div>
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
          icon: require("@img/jingDongMiaoSha-1.jpg"),
          title: "京东超市"
        },
        {
          id: "2",
          icon: require("@img/jingDongMiaoSha-2.jpg"),
          title: "京东超市"
        },
        {
          id: "3",
          icon: require("@img/jingDongMiaoSha-3.jpg"),
          title: "京东超市"
        },
        {
          id: "4",
          icon: require("@img/jingDongMiaoSha-4.jpg"),
          title: "京东超市"
        },
        {
          id: "5",
          icon: require("@img/jingDongMiaoSha-5.jpg"),
          title: "京东超市"
        },
        {
          id: "6",
          icon: require("@img/jingDongMiaoSha-6.jpg"),
          title: "京东超市"
        },
        {
          id: "7",
          icon: require("@img/jingDongMiaoSha-7.jpg"),
          title: "京东超市"
        },
        {
          id: "8",
          icon: require("@img/jingDongMiaoSha-8.jpg"),
          title: "京东超市"
        },
        {
          id: "9",
          icon: require("@img/jingDongMiaoSha-9.jpg"),
          title: "京东超市"
        },
        {
          id: "10",
          icon: require("@img/jingDongMiaoSha-10.jpg"),
          title: "京东超市"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
    @import "~@css/style.styl"
.mode-options{
    display flex
    flex-wrap wrap
    background-color white
    padding-bottom px2rem(14)
}
.mode-options-item {
    width: 20%;
    text-align center
    margin-top px2rem(10)
}
    .mode-options-item-icon{
        width:px2rem(40)
        height:px2rem(40)
    }
    .mode-options-item-title{
        font-size minInfoSize
        margin-top px2rem(6)
    }
</style>
