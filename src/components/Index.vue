<!--suppress ALL -->

<template>
  <div class="index">
    <navigationBar pageName="首页" :isShowBack="false"></navigationBar>
    <!--轮播图-->
    <slider class="index-picData" :pices="picData"></slider>
    <!--    -->
    <activity>
      <div class="activity-520">
        <img
          class="activity-520-img"
          v-for="item of activityDatas"
          :src="item.icon"
          :alt="item.icon"
          :key="item.id"
        />
      </div>
    </activity>
    <!--    功能模块-->
    <modeOptions></modeOptions>
    <!--    秒杀模块-->
    <seconds :scendDatas="scendDatas"></seconds>
    <!--    拼购节日-->
    <activity>
      <!--       eslint-disable -->
      <div class="activity-festival">
        <img
          class="activity-festival-icon"
          src="http://imooc.hybrid.lgdsunday.club/img/pinGouJie.a976e93f.gif"
          alt="pingouJie"
        />
      </div>
    </activity>
    <!--    商品列表组件-->
    <goods></goods>
  </div>
</template>

<script>
import slider from "@com/slider";
import activity from "@com/activity.vue";
import modeOptions from "@com/modeOptions.vue";
import seconds from "@com/seconds.vue";
import goods from "@com/goods.vue";
import navigationBar from "@com/navigationBar.vue";

import {
  ToSwiperPic,
  ToActivityPic,
  ToSeconds
} from "../config/ajax/IndexApi.js";
export default {
  name: "Index",
  methods: {},
  data() {
    return {
      lodings: "",
      picData: [],
      activityDatas: [],
      scendDatas: []
    };
  },
  mounted() {
    this.init();
  },
  /* eslint-disable */
  methods: {
    init() {
      Promise.all([ToSwiperPic(), ToActivityPic(), ToSeconds()])
        .then(([resSwiper, resActivity, resSeconds]) =>
          resSwiper.state === 0 &&
          resActivity.state === 0 &&
          resSeconds.state === 0
            ? ((this.picData = resSwiper.data.list),
              (this.activityDatas = resActivity.data.list),
              (this.scendDatas = resSeconds.data.list))
            : this.$toast.text("错误")
        )
        .catch(e => {
          // eslint-disable-next-line no-console
          console.log(e);
          this.$toast.text("错误");
        });
    }
  },
  components: {
    slider,
    activity,
    modeOptions,
    seconds,
    goods,
    navigationBar
  }
};
</script>

<style lang="stylus" scoped>
  @import "~@css/style.styl"
.index
    height:100%
    background-color lineColor
    overflow hidden
    overflow-y auto
.index-picData{
  height:swiperHeigth
}
>>>.swiper-pagination-bullet-active {
    background: #ededed;
    width: 12px;
}
  .activity-520{
    margin-top px2rem(-8)
    border-top-left-radius px2rem(-8)
    border-top-right-radius px2rem(-8)
  }
  .activity-520-img{
      display inline-block
      width  33.33%
  }
  .activity-festival{
      background-color white
      margin-top marginSize
  }
  .activity-festival-icon{
       width:100%
  }
</style>
