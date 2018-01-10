<!-- 星型评分等级组件 -->

<template lang="html">
  <div class="StarRate" :title="rate+'分'">
    <ul class="starList">
      <li v-for="n in len" class="item">
        <span class="fa-stack">
          <span class="fa fa-star-o fa-stack-1x"></span>
          <span v-if="n <= starNum.starAll" class="fa fa-star fa-stack-1x all"></span>
          <span v-if="starNum.starHalf && n === starNum.starAll + 1" class="fa fa-star-half-o fa-stack-1x half"></span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SatrRate',
  data () {
    return {
      num: '1'
    }
  },
  props: [ 'rate', 'len' ],
  computed: {
    starNum: function () {
      var up = this.rate * 10 % 10 / 10
      var all = Math.floor(this.rate);
      var half = 0
      if (up > 0.7) {
        all += 1
      } else if (up > 0.2) {
        half = 1
      }
      return { starAll: all, starHalf: half }
    }
  }
}
</script>

<style lang="css">
.starList {
  font-size: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.starList .item {
  display: block;
  color: #ccc;
  display: flex;
  align-items: center;
}
.fa-stack {
  width: 1em;
  height: 1em;
  line-height: 1em;
}
.starList .item .all, .starList .item .half {
  color: orange;
}
</style>
