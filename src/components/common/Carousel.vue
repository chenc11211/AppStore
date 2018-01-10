<!-- 轮播图组件 -->
<template lang="html">
  <div class="Carousel" @mouseover="stop()"
  @mouseout="move()">
    <div class="container">
      <div class="imgList">
        <transition name="left" v-for="(item, index) in dataInfo" :key="index">
          <div class="item" v-show="current===index" :class="{active: current===index}">
            <router-link :to="'/detail/' + item.id">
              <img :src="item.img[0]" alt="">
            </router-link>
          </div>
        </transition>
      </div>
      <ul class="indicator">
        <li v-for="(item, index) in dataInfo" :class="{active: current===index}" @click="click(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      current: 0,
      timer: null
    }
  },
  props: ['dataInfo'],
  computed: {
    len: function () {
      return this.dataInfo.length
    }
  },
  methods: {
    stop: function () {
      clearInterval(this.timer)
    },
    move: function () {
      this.setTimer()
    },
    isActive: function (index) {
      return index === this.current
    },
    click: function (index) {
      this.current = index
      this.setTimer()
    },
    setTimer: function () {
      clearInterval(this.timer)
      var len = this.len
      var _this = this
      this.timer = setInterval(function () {
        if (_this.current === len - 1) {
          _this.current = 0
        } else {
          _this.current++
        }
      }, 3000)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.setTimer()
    })
  }
}
</script>

<style lang="css" scoped>
.Carousel {
  overflow: hidden;
  position: relative;
}
.imgList {
  width: 100%;
}
.imgList .item {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
.imgList img {
  width: 100%;
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  right: -9999px;
  left: -9999px;
  margin: auto;
}
.indicator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: .5rem;
  margin: 0 auto;
  text-align: center;
}
.indicator li {
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  display: inline-block;
  margin: 0 .2rem;
  background-color: rgba(255,255,255,0.6);
  cursor: pointer;
}
.indicator li.active {
  background-color: #fff;
}

.left-enter-active {
  transition: all 1s;
}
.left-leave-active {
  transition: all 1s;
}

</style>
