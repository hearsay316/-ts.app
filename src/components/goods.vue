<template>
  <div
    class="goods goods-waterfall"
    :style="{
      Height: goodsViewHeight
    }"
  >
    <div
      class="goods-item goods-waterfall-item"
      ref="goodsItem"
      v-for="(item, index) in dataSource"
      :key="index"
      :style="goodsItemStyle[index]"
    >
      <img
        class="goods-item-img"
        :src="item.img"
        alt="item.img"
        :style="imgStyles[index]"
      />
      <div class="goods-item-desc">
        <p class="goods-item-desc-name">
          <span class="text-line-2">{{ item.name }}</span>
        </p>
        <div class="goods-item-desc-data">
          <!--suppress JSUnresolvedVariable -->
          <p class="goods-item-desc-data-price">
            {{ item.price | priceValue }}
          </p>
          <p class="goods-item-desc-data-volume">销量:{{ item.volume }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ToGoods } from "../config/ajax/IndexApi";

export default {
  name: "goods",
  data() {
    return {
      dataSource: [],
      //最大高度
      // 最小高度
      MAX_IMG_HEIGHT: 230,
      MIN_IMG_HEIGHT: 178,
      imgStyles: [],
      ITEM_MARGIN_SIZE: 8,
      goodsItemStyle: [],
      goodsViewHeight: 0
    };
  },
  methods: {
    /**
     * 生成随机的图片高度,随机生成样式
     * **/
    imgHeight() {
      return Math.floor(
        Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) +
          this.MIN_IMG_HEIGHT
      );
    },
    initImgStyles() {
      this.dataSource.forEach(item => {
        let imgHeigth = this.imgHeight() + "px";
        this.imgStyles.push({
          height: imgHeigth
        });
      });
    },
    initWaterfall() {
      let $goodsItem = this.$refs.goodsItem;
      if (!$goodsItem) return;
      let leftHeightTotal = 0,
        rightHeightTotal = 0;
      $goodsItem.forEach(($el, index) => {
        let goodsItemStyle = {};
        let elHeight = $el.clientHeight + this.ITEM_MARGIN_SIZE;
        if (leftHeightTotal <= rightHeightTotal) {
          goodsItemStyle = {
            left: "0px",
            top: leftHeightTotal + "px"
          };
          leftHeightTotal += elHeight;
        } else {
          goodsItemStyle = {
            right: "0px",
            top: rightHeightTotal + "px"
          };
          rightHeightTotal += elHeight;
        }
        this.goodsItemStyle.push(goodsItemStyle);
      });
      this.goodsViewHeight =
        leftHeightTotal > rightHeightTotal
          ? leftHeightTotal
          : rightHeightTotal + "px";
    }
  },
  created() {},
  mounted() {
    /**获取数据
     * **/
    ToGoods().then(res => {
      // eslint-disable-next-line no-console
      console.log(res);
      this.dataSource = res.data.list;
      // eslint-disable-next-line no-console
      console.log(this.dataSource);
      this.initImgStyles();
      this.$nextTick(() => {
        this.initWaterfall();
      });
    });
  }
};
</script>

<style lang="stylus" scoped>
@import "~@css/style.styl"
.goods{
  background-color bgColor
}
  .goods-item{
    background-color white
    padding marginSize
    box-sizing border-box
  }
  .goods-item-desc{
    width:100%
  }
  .goods-item-desc-name{
    font-size infoSize
    line-height px2rem(18)
  }
  .goods-item-desc-data{
    width:100%
    display flex
    align-items center
    justify-content space-between
    margin-top marginSize
  }
  .goods-item-desc-data-price{
    font-size titleSize
    color marginColor
    font-weight 500
  }
  .goods-item-desc-data-volume{
    font-size infoSize
    color hintColor
  }
  .goods-waterfall{
    position relative
    margin marginSize
  }
  .goods-waterfall-item{
    position absolute
    width:49%
    border-radius radiusSize
  }
  .goods-item-img{
    width:100%
  }
</style>
