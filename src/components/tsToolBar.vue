<!--suppress ALL -->
<template>
  <div class="ts-tool-bar">
    <div
      class="ts-tool-bar-item"
      v-for="(item, index) in toolBarData"
      :key="index"
      @click="onChangFragment(item, index)"
    >
      <img
        class="ts-tool-bar-item-img"
        :src="index === selectItemIndex ? item.hIcon : item.nIcon"
        alt=""
      />
      <p
        class="ts-tool-bar-item-name"
        :class="{ 'ts-tool-bar-item-name-active': index === selectItemIndex }"
      >
        {{ item.name }}
      </p>
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
      componentName: "Index"
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
  onChangFragment(item: object, index: number) {
    this.selectItemIndex = index;
    this.$emit("onChangFragment", item);
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/style.styl"
.ts-tool-bar
    width 100%
    height px2rem(46)
    display flex
    justify-content space-around
    border-top 1px solid #e5e5e5
    background-color #ffffff
    box-shadow: 0 0 px2rem(16) 0 rgba(0,0,0,0.2)
    .ts-tool-bar-item
      text-align center
      padding px2rem(4) px2rem(12)
      display flex
      justify-content center
      align-items center
      flex-direction column
      .ts-tool-bar-item-img
        width: px2rem(22);
        height px2rem(22)
      .ts-tool-bar-item-name
        font-size infoSize
        margin-top px2rem(4)
        &.ts-tool-bar-item-name-active
          color:mainColor
</style>
