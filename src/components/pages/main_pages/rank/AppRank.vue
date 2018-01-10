<!-- 应用排行 -->
<template lang="html">
  <div class="AppRank" :key="name">
    <ul class="rankList">
      <li v-for="(item, index) in appRankData[name]">
        <AppRankItem :rankItemData="appDataAll[item]" :index="index"></AppRankItem>
      </li>
    </ul>
    <div class="end-info">
      没有更多了
    </div>
  </div>
</template>

<script>
import AppRankItem from '@/components/common/AppRankItem'
export default {
  name: 'AppRank',
  data () {
    return {
      appDataAll: this.store.appData.app,
      appRankData:{
        "hotApp": this.store.appData.hotAppRank,
        "newApp": this.store.appData.newRank,
        "hotGame": this.store.appData.hotGameRank
      }
    }
  },
  props: [ 'name' ],
  components: { AppRankItem }
}
</script>

<style lang="css" scoped>
.AppRank {
  width: 100%;
}
.rankList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.rankList li {
  display: block;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.end-info {
  line-height: 2;
  text-align: center;
  color: #ccc;
}
</style>
