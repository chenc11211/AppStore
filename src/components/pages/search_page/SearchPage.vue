<!-- 搜索页 -->
<template lang="html">
  <transition name="topOver">
    <div class="SearchPage">
      <div class="header">
        <div class="back">
          <router-link :to="backUrl">
            <span class="btn fa fa-chevron-left fa-2x"></span>
          </router-link>
        </div>
        <div class="search-box">
          <input type="text" name="search" placeholder="搜索应用"
          v-focus v-model="searchContent"
          @keydown.enter="search(searchContent)">
        </div>
        <div class="start-search">
          <div class="qr-search">
            <span class="btn fa fa-qrcode fa-2x"></span>
          </div>
          <div class="enter-search">
            <span class="btn fa fa-search fa-2x"
            @click="search(searchContent)"></span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="hot-search">
          <div class="title">
            <span class="fa fa-line-chart fa-lg"></span>
            <span class="name">热门搜索</span>
          </div>
          <ul class="hot-list">
            <li class="item" v-for="(item, index) in hotSearch" :key="index"
            @click="searchContent = item">{{item}}</li>
          </ul>
        </div>
        <hr style="border: .3rem solid #f1f1f1;"/>
        <div class="history">
          <div class="title">
            <span class="fa fa-history fa-2x"></span>
            <span class="name">搜索历史</span>
          </div>
          <ul class="history-list">
            <li class="item" v-for="(item, index) in searchHistory" :key="index"
            @click.self="searchContent = item">
            {{item}}
            <span class="delete fa fa-remove"
            @click="deleteHistoryItem(index)"></span></li>
          </ul>
          <div class="clear-history"
          @click.stop.prevent="clearHistory()">
            清空历史记录
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      backUrl: '/main/home/recommend',
      hotSearch: [ "微信", "vpn", "网易云音乐", "qq", "fate/grand order", "google", "爱奇艺", "bilibili", "纪念碑谷" ],
      searchContent: '',
      searchHistory: []
    }
  },
  methods: {
    setHistoryLocalStorage (history) {
      localStorage.setItem('searchHistory', JSON.stringify(history))
    },
    search (content) {
      if (!content) {
        return
      }
      this.searchHistory.unshift(content)
      this.setHistoryLocalStorage(this.searchHistory)
    },
    clearHistory () {
      this.searchHistory = []
      this.setHistoryLocalStorage(this.searchHistory)
    },
    deleteHistoryItem (index) {
      this.searchHistory.splice(index, 1);
      this.setHistoryLocalStorage(this.searchHistory)
    }
  },
  mounted: function () {
    if (localStorage.getItem('searchHistory')) {
      this.searchHistory = JSON.parse(localStorage.getItem('searchHistory'))
    }
  },
  directives: {
    focus: {
      inserted (el, binding) {
        el.focus()
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(function (vm) {
      vm.backUrl = from.path
    })
  }
}
</script>

<style lang="css" scoped>
.SearchPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: #666;
}
.header {
  height: 4rem;
  background-color: skyblue;
  color: #fbfbfb;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  width: 100%;
  height: 100%;
  padding-bottom: 4rem;
  box-sizing: border-box;
  overflow-y: scroll;
}
.header .btn {
  color: #fff;
}
.back {
  margin-left: 1.5rem;
}
.search-box {
  margin-left: 3rem;
  margin-right: 1.5rem;
  border-right: 1px solid #fff;
  flex-grow: 1;
}
.search-box input {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.5em;
  color: #fbfbfb;
  border: none;
  background-color: transparent;
  outline: none;
}
/* 输入框占位符样式 */
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #fff;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #fff;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #fff;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #fff;
}

.start-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.qr-search, .enter-search {
  margin-right: 1.5rem;
  cursor: pointer;
}
.hot-search {
  padding: 1rem;
  margin-bottom: 1rem;
}
.hot-search .title {

}
.title {
  font-size: 1.2em;
  color: skyblue;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title .name {
  margin-left: 1rem;
}
.hot-search .hot-list {
  margin-top: .5rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.hot-search .hot-list .item {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 1rem;
  margin: .5rem 0 0 .5rem;
  display: block;
  background-color: #eee;
  border: 1px solid #bbb;
  border-radius: 5px;
  cursor: pointer;
}
.history {
  text-align: center;
}
.history .title {
  border-bottom: 1px solid #eee;
  padding: .5rem 1rem;
}
.history-list {
  padding: 0 1rem;
}
.history-list .item {
  display: block;
  line-height: 2.5rem;
  text-align: left;
  text-indent: 2rem;
  padding-right: 2rem;
  border-bottom: 1px solid #eee;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: default;
  position: relative;
}
.history-list .item:last-child {
  border: none;
}
.history-list .item .delete {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 2.5rem;
  margin-right: .5rem;
  color: #ccc;
  cursor: pointer;
}
.clear-history {
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 2rem;
  margin: 1rem;
  text-align: center;
  border: 1px solid skyblue;
  border-radius: 3px;
  cursor: pointer;
  color: skyblue
}
.clear-history:hover {
  background-color: skyblue;
  color: #fff;
}

/* 组件过渡上滑动画 */
.topOver-enter-active {
  transition: all .2s cubic-bezier(0.1,0.6,0.1,0.6);
}
.topOver-leave-active {
  transition: all .2s cubic-bezier(0.6,0.1,0.6,0.1);
}
.topOver-enter {
  transform: translateY(5rem);
  opacity: 0;
}
.topOver-leave-to {
  transform: translateY(5rem);
  opacity: 0;
}

</style>
