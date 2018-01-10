<!-- 应用详情 -->
<template lang="html">
  <div class="detail">
    <div class="img-list">
      <ul class="list-item">
        <li class="item" v-for="(item, index) in appInfo.img" :key="index">
          <img :src="item" alt="" @click="openImg(item)">
        </li>
      </ul>
    </div>
    <div class="description">
      <div class="title">
        应用描述
      </div>
      <article class="content">
        {{appInfo.info}}
      </article>
    </div>
    <div class="recommend">
      <div class="title">
        猜你喜欢
      </div>
      <ul class="app-list">
        <li class="app-item" v-for="n in 9" :key="n">
          <AppItem :itemIfo="appDataAll[recommendApp[n]]"></AppItem>
        </li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
        <li class="app-item empty"></li>
      </ul>
    </div>
    <div class="end-info">
      <span class="btn">
        <span class="fa fa-flag"></span> 举报内容
      </span>
    </div>
    <div v-if="imgView" class="img-view"
    @click="closeImg()">
    <span class="close-img fa fa-close" @click="closeImg()"></span>
    <img :src="imgViewCurrent" alt="" @click.stop.prevent>
    </div>
  </div>
</template>

<script>
import AppItem from '@/components/common/AppItem'
export default {
  name: 'Detail',
  components: { AppItem },
  data () {
    return {
      imgView: false,
      imgViewCurrent: '',
      appDataAll: this.store.appData.app,
      recommendApp: this.store.appData.recommendApp
    }
  },
  props: [ 'appInfo' ],
  methods: {
    openImg (url) {
      this.imgViewCurrent = url
      this.imgView = true
    },
    closeImg () {
      this.imgView = false
    }
  }
}
</script>

<style lang="css" scoped>
.detail {
  width: 100%;
}
.img-list {
  width: 100%;
  height: 12rem;
  padding: .7rem 0;
  overflow-x: auto;
  background-color: #f5f5f5;
}
.list-item {
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.item {
  display: block;
  height: 100%;
  margin: 0 .5rem;
  flex-grow: 1;
}
.item img {
  height: 100%;
  display: block;
  margin: 0 auto;
}
.description {
  width: 100%;
  box-sizing: border-box;
  padding: .5rem 1.5rem 2rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.title {
  font-size: 1.2em;
  line-height: 2.5rem;
  color: #000;
}
.img-view {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.img-view .close-img {
  position: absolute;
  top: 2rem;
  z-index: 1;
  right: 2rem;
  color: #fbfbfb;
  font-size: 2em;
  cursor: pointer;
}
.img-view img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
}
.recommend {
  width: 100%;
  box-sizing: border-box;
  padding: .5rem 1.5rem 2rem 1.5rem;
}
.app-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.app-item {
  display: block;
  padding: .5rem;
}
.app-item.empty {
  width: 8rem;
  height: 0;
}
.end-info {
  background-color: #f5f5f5;
  color: #999;
  padding-left: 1rem;
  text-align: left;
  line-height: 2;
}
end-info .btn {
  cursor: pointer;
}
</style>
