<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item, index) of pices" :key="index">
        {{ item }}
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
let mySwiper;
import Swiper from "swiper";

export default {
  name: "Slider",
  props: {
    pices: {
      type: Array,
      required: true
    }
  },
  mounted() {
    mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      // direction: "vertical",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.swiper-container {
    width: 100%;
    height: 300px;
}
</style>
