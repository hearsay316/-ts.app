<template>
  <div class="seconds">
    <div class="seconds-wrap">
      <p class="seconds-wrap-title">京东秒杀</p>
      <!--      倒计时模块-->
      <div class="count-down">
        <span class="count-down-time"></span>
        <span class="count-down-desc"></span>
      </div>
    </div>
    <div class="seconds-content">
      <div class="seconds-content-item" v-for="item of scendDatas" :key="item">
        <img
          class="seconds-content-item-icon"
          :src="item.icon"
          alt="item.icon"
        />
        <p class="seconds-content-item-price">{{ item.price }}</p>
        <p class="seconds-content-item-oldPrice">{{ item.oldPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scends",
  props: {
    scendDatas: {
      type: Array,
      required: true
    }
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
.seconds-content{
  padding marginSize
  display flex
  overflow hidden
  overflow-x scroll
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
  color marginColor
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
