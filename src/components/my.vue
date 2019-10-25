<template>
  <div class="my">
    mygtgtgt
    <nut-button>
      Button
    </nut-button>
  </div>
</template>

<script>
export default {
  name: "my",
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
