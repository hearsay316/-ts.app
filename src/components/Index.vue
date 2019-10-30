<!--suppress ALL -->
<template>
  <div class="index">
    <Slider class="index-picData" :pices="picData"></Slider>
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
  </div>
</template>

<script>
import Slider from "@com/Slider";
import activity from "@com/activity.vue";

import { ToSwiperPic, ToActivityPic } from "../config/ajax/IndexApi.js";
export default {
  name: "Index",
  methods: {},
  data() {
    return {
      lodings: "",
      picData: [],
      activityDatas: []
    };
  },
  mounted() {
    ToSwiperPic()
      .then(res => {
        let {
          stata,
          data: { list }
        } = res;
        this.picData = list;
      })
      .catch(error => {});
    ToActivityPic().then(res => {
      let {
        stata,
        data: { list }
      } = res;
      this.activityDatas = list;
    });
  },
  components: {
    Slider,
    activity
  }
};
</script>

<style lang="stylus" scoped>
  @import "~@css/style.styl"
.index
    height:100%
    background-color lineColor
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
</style>
