<!-- 应用详情页 -->
<template lang="html">
  <transition name="leftOver">
    <div class="DetailPage">
      <div class="header">
        <div class="backBtn" @click="$router.go(-1)">
          <span class="icon fa fa-chevron-left"></span>
        </div>
        <div class="operation">
          <div class="share">
            <span class="icon fa fa-share-alt"></span>
          </div>
          <div class="more">
            <span class="icon fa fa-ellipsis-v" @click="menuShow = true"></span>
          </div>
        </div>
      </div>
      <div class="cover">
        <img class="bg" :src="detailData.icon" >
        <div class="container">
          <div class="info">
            <div class="icon">
              <img :src="detailData.icon" alt="">
            </div>
            <div class="info-detail">
              <div class="name">
                {{detailData.name}}
              </div>
              <div class="developer">
                {{detailData.developer}}
              </div>
              <div class="rate">
                <StarRate :rate="detailData.rate" :len="5"></StarRate>
                <span>&nbsp;({{detailData.rate}})</span>
              </div>
            </div>
          </div>
          <div class="bar">
            <div class="add-like">
              <span class="fa fa-heart-o fa-2x"></span>
            </div>
            <div class="download">
              <button type="button" name="download">安装</button>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-comment">
        <div class="detail-btn btn"
        :class="{ active: inActive === 'info' }"
        @click="show('info')">
          <span>详情</span>
        </div>
        <div class="comment-btn btn"
        :class="{ active: inActive === 'comment' }"
        @click="show('comment')">
          <span>评论</span>
        </div>
      </div>
      <div class="content" ref="container">
        <Detail class="content-detail" v-if="inActive === 'info'" :appInfo="detailData"></Detail>
        <Comment class="content-detail" v-if="inActive === 'comment'" :appInfo="detailData"></Comment>
      </div>
      <div class="model-box" v-show="menuShow" @click="menuShow = false">
        <transition name="menu">
          <div class="more-menu" v-show="menuShow" @click.stop.prevent>
            <div class="item to-home" @click="toHome()">
              首页
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import StarRate from '@/components/common/StarRate'
import Detail from './detail/Detail'
import Comment from './comment/Comment'

export default {
  name: 'DetailPage',
  components: { StarRate, Detail, Comment },
  data () {
    return {
      detailData: this.store.appData.app[this.$route.params.id],
      inActive: 'info',
      menuShow: false
    }
  },
  computed: {
    id: function () {
      return this.$route.params.id
    }
  },
  methods: {
    show (tag) {
      this.inActive = tag
    },
    toHome () {
      this.$router.push({path:'/main/home/recommend'})
    }
  },
  mounted () {
    var lookHistory = {}
    if (localStorage.getItem('lookHistory')) {
      lookHistory = JSON.parse(localStorage.getItem('lookHistory'))
    }
    if (!lookHistory[this.id]) {
      lookHistory[this.id] = this.id
      localStorage.setItem('lookHistory', JSON.stringify(lookHistory))
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.backUrl = from.path
    })
  },
  //路由动态参数修改时默认优先复用已渲染组件，手动修改数据以响应变化
  beforeRouteUpdate (to, from, next) {
    this.$refs.container.scrollTo(0, 0) //使滚动回到顶部
    this.detailData = this.store.appData.app[to.params.id]
    next()
  }
}
</script>

<style lang="css" scoped>
.DetailPage {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #fff;
}
.header {
  width: 100%;
  height: 4rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  font-size: 2em;
  color: #fbfbfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .backBtn {
  padding-left: 1.5rem;
}
.header .operation {
  padding-right: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header .operation>div {
  margin-left: 2rem;
}
.header span {
  color: #fbfbfb;
}
.cover {
  width: 100%;
  height: 14rem;
  color: #fbfbfb;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cover .bg {
  width: 100%;
  filter: blur(20px);
}
.cover>.container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0,0,0,.3);
}
.cover .info {
  height: 5rem;
  margin-left: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cover .info .icon {
  height: 6rem;
  width: 6rem;
  overflow: hidden;
}
.icon img {
  height: 100%;
  width: 100%;
}
.cover .info-detail {
  height: 100%;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.cover .info-detail .name {
  font-size: 1.3em;
  font-weight: bold;
}
.cover .info-detail .rate {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cover .bar {
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
}
.cover .bar button {
  height: 2.5rem;
  width: 4rem;
  color: #fff;
  margin: 0 1rem;
  border: none;
  border-radius: 3px;
  background-color: skyblue;
}
.cover .bar .add-like {
  color: pink;
  cursor: pointer;
}
.detail-comment {
  width: 100%;
  height: 3.5rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-comment .btn {
  height: 100%;
  line-height: 2.5rem;
  text-align: center;
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.detail-comment .btn.active {
  color: skyblue;
}
.detail-comment .btn.active::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: skyblue;
  position: absolute;
  left: 0;
  bottom: 0;
}
.detail-comment .btn span {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
}
.detail-comment .detail-btn span {
  border-right: 1px solid #ddd;
}
.content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.content-detail {
  padding-bottom: 17.5rem;
}
.model-box {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.model-box .more-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  background-color: #f5f5f5;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.model-box .more-menu .item {
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  padding-left: 1rem;
  text-align: left;
  line-height: 4rem;
  color: #000;
  font-size: 1.2em;
}
.model-box .more-menu .to-home {

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

/* 菜单动画 */
.menu-enter-active {
  transition: all .3s
}
.menu-leave-avtive {
  transition: all .2s
}
.menu-enter {
  transform: translateX(50%);
  opacity: 0;
}
.menu-leave-to {
  opacity: 0;
}

</style>
