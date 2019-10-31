<template>
  <div class="count-down">
    <span class="count-down-time">{{ endHours }}点场</span>
    <span class="count-down-desc">{{ surplus | filterTime }}</span>
  </div>
</template>

<script>
let usrrt = 1235;
/***
 * 能力:传递给组件一个活动开始时间,组件根据这个时间去进行计算.
 * 1 当前时间未到开始的时候: 展示倒计时
 * 2 当前时间到了开始时间的时候: 活动进行中
 * 3 当前时间超过开始时间的时候:活动已结束
 * **/
export default {
  name: "countDown",
  props: {
    endHours: {
      type: Number,
      required: true,
      default: 15
    }
  },
  data() {
    return {
      interval: undefined,
      // 展示活动状态
      surplus: "value",
      // 距离时间的秒数
      diffSeconds: 0
    };
  },
  created() {
    this.computedSurplusTime();
  },
  destroyed() {
    // eslint-disable-next-line no-console
    console.log("over");
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    /**
     * 计算展开内容
     * **/
    computedSurplusTime() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      const date = new Date();
      if (date.getHours() > this.endHours) {
        this.surplus = "活动已结束";
        return;
      }
      if (date.getHours() === this.endHours) {
        this.surplus = "活动进行中";
        return;
      }
      if (date.getHours() < this.endHours) {
        const diffHours = this.endHours - date.getHours() - 1;
        const diffMinutes = 60 - date.getMinutes() - 1;
        const diffSeconds = 60 - date.getSeconds() - 1;
        this.diffSeconds = diffHours * 3600 + diffMinutes * 60 + diffSeconds;
        this.interval = setInterval(() => {
          this.diffSeconds -= 1;
        }, 1000);
      }
    }
  },
  watch: {
    diffSeconds(newValue, oldValue) {
      const hours = Math.floor(newValue / 3600);
      const minutes = Math.floor(newValue / 3600) % 60;
      const seconds = newValue % 60;
      this.surplus = hours + ":" + minutes + ":" + seconds;
      if (newValue === 0) {
        this.computedSurplusTime();
      }
    },
    endHours() {
      this.computedSurplusTime();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~@css/style.styl"
.count-down {
        display inline-block
        font-size infoSize
        margin-left marginSize
        margin-top: px2rem(-2);
}
.count-down-time,.count-down-desc {
        display inline-block
        padding px2rem(2) px2rem(4)
}

.count-down-time {
  background-color mainColor
  border-top-left-radius px2rem(4)
  border-bottom-left-radius  px2rem(4)
  border:px2rem(1) solid mainColor
  color white
}

.count-down-desc {
  background-color white
  border-top-right-radius px2rem(4)
  border-bottom-right-radius  px2rem(4)
  border:px2rem(1) solid mainColor
  color mainColor
}
</style>
