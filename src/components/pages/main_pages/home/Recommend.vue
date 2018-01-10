<template lang="html">
  <div class="Recommend">
    <Carousel class="carousel-game" :dataInfo="convertData(carouselGame)"></Carousel>
    <div class="game-hot part">
      <div class="title">
        <div class="name">
          热门更新游戏
        </div>
        <div class="more">
          <router-link :to="{ name: 'ListPage', params: {classify: 'hotGame', className: '热门更新游戏'} }">
            更多 &rsaquo;
          </router-link>
        </div>
      </div>
      <ul class="item-list">
        <li class="item" v-for="n in 9">
          <AppItem :itemIfo="appDataAll[gameHotData[n]]"></AppItem>
        </li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
      </ul>
    </div>
    <div class="game-new part">
      <div class="title">
        <div class="name">
          新品游戏
        </div>
        <div class="more">
          <router-link :to="{ name: 'ListPage', params: {classify: 'newGame', className: '新品游戏'} }">
            更多 &rsaquo;
          </router-link>
        </div>
      </div>
      <ul class="item-list">
        <li class="item" v-for="n in 9">
          <AppItem :itemIfo="appDataAll[gameNewData[n]]"></AppItem>
        </li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
      </ul>
    </div>
    <Carousel class="carousel-app" :dataInfo="convertData(carouselApp)"></Carousel>
    <div class="app-hot part">
      <div class="title">
        <div class="name">
          热门更新应用
        </div>
        <div class="more">
          <router-link :to="{ name: 'ListPage', params: {classify: 'hotApp', className: '热门更新应用'} }">
            更多 &rsaquo;
          </router-link>
        </div>
      </div>
      <ul class="item-list">
        <li class="item" v-for="n in 9">
          <AppItem :itemIfo="appDataAll[appHotData[n]]"></AppItem>
        </li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
      </ul>
    </div>
    <div class="app-new part">
      <div class="title">
        <div class="name">
          新品应用
        </div>
        <div class="more">
          <router-link :to="{ name: 'ListPage', params: {classify: 'newApp', className: '新品应用'} }">
            更多 &rsaquo;
          </router-link>
        </div>
      </div>
      <ul class="item-list">
        <li class="item" v-for="n in 9">
          <AppItem :itemIfo="appDataAll[appNewData[n]]"></AppItem>
        </li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
        <li class="empty item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/common/Carousel'
import AppItem from '@/components/common/AppItem'

export default {
  name: 'Recommend',
  components: {Carousel, AppItem},
  data () {
    return {
      appDataAll: this.store.appData.app,
      gameHotData: this.store.appData.hotGame,
      gameNewData: this.store.appData.newGame,
      appHotData: this.store.appData.hotApp,
      appNewData: this.store.appData.newApp,
      carouselApp: this.store.appData.carouselApp,
      carouselGame: this.store.appData.carouselGame
    }
  },
  methods: {
    convertData (data) {
      var targetData = []
      for (var i = 0; i < data.length; i++) {
        targetData[i] = this.appDataAll[data[i]]
      }
      return targetData
    }
  }
}
</script>

<style lang="css" scoped>
.Recommend {
  width: 100%;
}
.carousel-game {
  width: 100%;
  height: 12rem;
}
.carousel-app {
  margin-top: .7rem;
  width: 100%;
  height: 10rem;
}
.part {
  width: 100%;
  margin-top: .7rem;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.part .title {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.part .title .name {
  color: #000;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 1.5rem;
}
.part .title .more {
  color: #999;
  margin-right: 1.5rem;
}
.item-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.item-list .empty {
  height: 0;
  width: 10rem;
  margin: 0;
}
.item {
  display: block;
  margin: .5rem 1.5rem;
}
</style>
