<!--suppress ALL -->
<template>
  <div class="ts-tool-bar">
    <div
      class="ts-tool-bar-item"
      v-for="(item, index) in toolBarData"
      :key="index"
    >
      <img
        class="ts-tool-bar-item-img"
        :src="index === selectItemIndex ? item.hIcon : item.nIcon"
        alt=""
      />
      <p class="ts-tool-bar-item-name">{{ item.name }}</p>
    </div>
  </div>
</template>

<script lang="tsx">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class tsFooter extends Vue {
  selectItemIndex: number = 0;
  toolBarData = [
    {
      nIcon: require("@img/home-n.svg"),
      hIcon: require("@img/home-h.svg"),
      name: "首页",
      componentName: "home"
    },
    {
      nIcon: require("@img/shopping-n.svg"),
      hIcon: require("@img/shopping-h.svg"),
      name: "分类",
      componentName: "classify"
    },
    {
      nIcon: require("@img/shopping-n.svg"),
      hIcon: require("@img/shopping-h.svg"),
      name: "购物车",
      componentName: "shopping"
    },
    {
      nIcon: require("@img/my-n.svg"),
      hIcon: require("@img/my-h.svg"),
      name: "我的",
      componentName: "my"
    }
  ];
}
</script>

<style lang="stylus" scoped>
.ts-tool-bar
    width 100%
    height 46px
    display flex
    justify-content space-around
    border-top 1px solid #e5e5e5
    background-color #ffffff
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.2)
    .ts-tool-bar-item
      text-align center
      padding 4px 12px
      display flex
      justify-content center
      align-items center
      flex-direction column
      .ts-tool-bar-item-img
        width: 22px;
        height 22px
      .ts-tool-bar-item-name
        font-size 14px
        margin-top 4px


</style>
