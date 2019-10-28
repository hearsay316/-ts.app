<!--suppress ALL -->
<template>
  <div class="index">
    <Slider class="index-picData" :pices="picData"></Slider>
    <div>5555555555555555555555</div>
  </div>
</template>

<script>
import Slider from "@com/Slider";
export default {
  name: "Index",
  data() {
    return {
      picData: [
        require("@img/swiper-1.jpg"),
        require("@img/swiper-2.jpg"),
        require("@img/swiper-3.jpg"),
        require("@img/swiper-4.jpg"),
        require("@img/swiper-5.jpg"),
        require("@img/swiper-6.jpg"),
        require("@img/swiper-7.jpg"),
        require("@img/swiper-8.jpg")
      ]
    };
  },
  components: {
    Slider
  }
};
</script>

<style lang="stylus" scoped>
.index
    height:100%
.index-picData{
  height:48%
}

    >>>.swiper-pagination-bullet-active {
        background: #ededed;
        width: 12px;
    }
</style>
