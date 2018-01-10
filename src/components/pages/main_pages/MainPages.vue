<template>
  <transition name="static">
    <div class="MainPages">
      <AppHeader class="header"/>
      <transition :name="animation">
        <router-view class="content"></router-view>
      </transition>
      <AppFooter class="footer"/>
    </div>
  </transition>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import AppFooter from '@/components/common/AppFooter'

export default {
  name: 'MainPages',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      animation: 'left',
      order: {
        Home: 1,
        Recommend: 1,
        Discovery: 1,
        Classify: 1,
        Rank: 2,
        HotApp: 2,
        NewApp: 2,
        HotGame: 2,
        HotDeveloper: 2,
        Focus: 3,
        Favorite: 3,
        Popular: 3,
        Group: 3
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.order[to.name] < this.order[from.name]) {
        this.animation = 'right'
      } else {
        this.animation = 'left'
      }
    }
  }
}
</script>

<style scoped>
.MainPages {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.content {
  height: 100%;
  width: 100%;
  top: 3.9rem;
  left: 0;
  box-sizing: border-box;
  padding-bottom: 4rem;
  position: absolute;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
/* 组件静止出动画 */
.static-enter-active {
  transition: all .3s;
}
.static-leave-active {
  transition: all .3s;
}
.static-enter {
  /* opacity: 0; */
}
.static-leave-to {
  /* opacity: 0; */
}
</style>
