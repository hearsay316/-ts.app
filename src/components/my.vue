<template>
  <div class="my">
    my
    <nut-button>
      Button
    </nut-button>
    <myLib :user="user"></myLib>
  </div>
</template>

<script>
import myLib from "app/dist/myLib.umd.min.js";
export default {
  name: "my",
  data() {
    return {
      user: Array.from({ length: 1000 }).map((v, k) => k)
    };
  },
  components: {
    myLib
  }
};
</script>

<style lang="stylus" scoped>
.my
  width:100%
  height:100%
  font-size 32px;
</style>
