<template>
  <!-- Slider main container -->
  <div class="swiper-container" v-if="pices.length > 0">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item, index) of pices" :key="item.id + index">
        <img class="swiper-slide-img" :src="item.icon" alt="item" />
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
export default {
  name: "Slider",
  props: {
    pices: {
      type: Array,
      required: true
    }
  },
  watch: {
    pices: {
      handler(val, oldVal) {
        if (val.length > 0) {
          this.mySwiper();
        }
      },
      immediate: true
    }
  },
  methods: {
    mySwiper() {
      this.$nextTick(() => {
        let mySwiper = new Swiper(".swiper-container", {
          // Optional parameters
          // direction: "vertical",
          // 这个是一个测试
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "custom-bullet-class"
          },

          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
      });
    }
  }
};
</script>

<style lang="stylus">
@import '~@css/style.styl';

.swiper-container {
  width: 100%;
}

.swiper-slide-img {
  width: 100%;
  height: 100%;
}

.custom-bullet-class {
  box-sizing: border-box;
  border-radius: 7px;
  height: 3px;
  width: 8px;
  background: hsla(0, 0%, 92.9%, 0.4);
  margin: 0 2px;
  display: inline-block;
  opacity: 1;
}
</style>
