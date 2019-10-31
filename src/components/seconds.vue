<template>
  <div class="seconds">
    <div class="seconds-wrap">
      <p class="seconds-wrap-title">京东秒杀</p>
      <!--      倒计时模块-->
      <countDown :endHours="17"></countDown>
    </div>
    <!-- 隐藏滚动条-->
    <div class="scroll-y">
      <div class="seconds-content">
        <div
          class="seconds-content-item"
          v-for="item of scendDatas"
          :key="item"
        >
          <img
            class="seconds-content-item-icon"
            :src="item.icon"
            alt="item.icon"
          />
          <p class="seconds-content-item-price">
            ￥{{ item.price | priceValue }}
          </p>
          <p class="seconds-content-item-oldPrice">
            ￥{{ item.oldPrice | priceValue }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countDown from "@com/countDown.vue";

export default {
  name: "scends",
  props: {
    scendDatas: {
      type: Array,
      required: true
    }
  },
  components: {
    countDown
  }
};
</script>

<style lang="stylus" scoped>
@import "~@css/style.styl"
.seconds{
  background-color white
  border-radius radiusSize
  margin marginSize
}
.seconds-wrap{
  display flex
  padding marginSize
}
.seconds-wrap-title{
  font-size titleSize
  display inline-block
}
  .scroll-y{
    overflow hidden
    padding-bottom  6px
    height: calc(3.36rem - 6px);
  }
.seconds-content{
  box-sizing border-box
  padding marginSize
  display flex
  overflow hidden
  overflow-x scroll
  height:calc(3.36rem + 6px)
}
.seconds-content-item{
  padding 0 px2rem(2)
  text-align center
}
.seconds-content-item-icon{
  width:px2rem(66)
  height:px2rem(66)
}
.seconds-content-item-price{
  color mainColor
  font-size titleSize
  margin-top px2rem(4)
}
.seconds-content-item-oldPrice{
  color hintColor
  font-size infoSize
  margin-top px2rem(6)
  text-decoration line-through
  }
</style>
