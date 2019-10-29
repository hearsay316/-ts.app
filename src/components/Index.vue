<!--suppress ALL -->
<template>
  <div class="index">
    <Slider class="index-picData" :pices="picData"></Slider>
  </div>
</template>

<script>
import Slider from "@com/Slider";
import { GetSwiper } from "../config/ajax/IndexApi.js";
export default {
  name: "Index",
  methods: {},
  data() {
    return {
      lodings: "",
      picData: []
    };
  },
  mounted() {
    GetSwiper()
      .then(res => {
        let {
          stata,
          data: { list }
        } = res;
        this.picData = list;
      })
      .catch();
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
