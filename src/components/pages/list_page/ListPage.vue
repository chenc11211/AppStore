<!-- 应用列表 -->
<template lang="html">
  <transition name="leftOver">
    <div class="listPage">
      <div class="header">
        <div class="backBtn">
          <router-link :to="backUrl">
            <span class="fa fa-chevron-left"></span>
          </router-link>
        </div>
        <div class="title">
          {{$route.params.className}}
        </div>
      </div>
      <div class="content">
        <ul class="list-item">
          <li class="item" v-for="(item, index) in shuffle(appAll)" :key="index">
            <AppRankItem :rankItemData="appDataAll[item]" :index="index"></AppRankItem>
          </li>
        </ul>
        <div class="end-info">
          没有更多了
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AppRankItem from '@/components/common/AppRankItem'
export default {
  name: 'listPage',
  components: { AppRankItem },
  data () {
    return {
      backUrl: '/',
      appDataAll: this.store.appData.app,
      appAll: this.store.appData.appAll
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === 'DetailPage') {
        return
      }
      vm.backUrl = from.path
    })
  },
  methods: {
    shuffle (array) {
      array = array.concat()
      var result = [], n, len = array.length
      for (var i = len; i > 0; i--) {
        n = Math.floor(Math.random() * i)
        result.push(array[n])
        array.splice(n, 1)
      }
      return result
    }
  }
}
</script>

<style lang="css" scoped>
.listPage {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fbfbfb;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.header {
  width: 100%;
  height: 4rem;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: skyblue;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header .backBtn {
  margin-left: 1rem;
  font-size: 2rem;
}
.backBtn span {
  color: #fbfbfb;
}
.header .title {
  height: 100%;
  font-size: 1.6em;
  overflow: hidden;
  line-height: 4rem;
  margin-left: 2rem;
  color: #fbfbfb;
}
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 4rem;
  overflow-y: auto;
}
.list-item {
  margin-top: .7rem;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.item {
  display: block;
  border-bottom: 1px solid #eee;
}
.item:last-child {
  border-bottom: none;
}
.end-info {
  line-height: 2;
  color: #999;
  text-align: center;
}
/* 组件过渡左覆盖动画 */
.leftOver-enter-active {
  transition: all .3s;
}
.leftOver-leave-active {
  transition: all .3s;
}
.leftOver-enter {
  transform: translateX(100%);
}
.leftOver-leave-to {
  transform: translateX(100%);
}

</style>
