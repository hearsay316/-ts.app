<template>
  <div class="my">
    <navigationBar pageName="个人中心" :isShowBack="false"></navigationBar>
    my
    <nut-button>
      Buttonrfrfrf
    </nut-button>
  </div>
</template>

<script>
import navigationBar from "@com/navigationBar.vue";
export default {
  name: "my",
  components: {
    navigationBar
  },
  data() {
    return {
      user: Array.from({ length: 1000 }).map((v, k) => k)
    };
  }
};
</script>

<style lang="stylus" scoped>
.my
  width:100%
  height:100%
  font-size 32px;
</style>
