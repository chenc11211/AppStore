<!-- 应用讨论组 -->
<template lang="html">
  <div class="Group">
    <div class="followed">
      <div class="title">
        已关注
      </div>
      <div class="content-follow">

      </div>
      <div class="tip">
        还没有关注
      </div>
    </div>
    <div class="look-history">
      <div class="bar">
        <span class="title">浏览历史</span>
        <span class="clear-btn fa fa-trash-o" @click="modelBox = true"></span>
      </div>
      <div class="list-item">
        <div class="item" v-for="(item, index) in lookHistory" :key="index" @click="routeTo(item)">
          <div class="icon">
            <img :src="appDataAll[item].icon" alt="">
          </div>
          <div class="name">
            {{appDataAll[item].name}}
          </div>
        </div>
      </div>
    </div>
    <div class="model-confirm" v-if="modelBox" @click="modelBox = false">
      <div class="model-box" @click.stop.prevent>
        <div class="model-content">
          是否清除历史浏览记录？
        </div>
        <div class="model-btn">
          <div class="cancel-btn" @click="modelBox = false">
            取消
          </div>
          <div class="confirm-btn" @click="clearHistory()">
            确认
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Group',
  data () {
    return {
      appDataAll: this.store.appData.app,
      lookHistory: JSON.parse(localStorage.getItem('lookHistory')),
      modelBox: false
    }
  },
  methods: {
    clearHistory () {
      localStorage.removeItem('lookHistory')
      this.lookHistory = {}
      this.modelBox = false
    },
    routeTo (id) {
      this.$router.push({ name: 'DetailPage', params: { id: id } })
    }
  }
}
</script>

<style lang="css" scoped>
.Group {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
  padding-left: .3rem;
  padding-right: .3rem;
}
.followed {
  width: 100%;
  min-height: 12rem;
  box-sizing: border-box;
  padding: .5rem 1rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.title {
  color: #000;
  font-size: 1.2rem;
}
.followed .tip {
  color: #999;
  text-align: center;
}
.look-history {
  width: 100%;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: .5rem 1rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.look-history .bar {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
}
.clear-btn {
  cursor: pointer;
}
.list-item {

}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem 0;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
}
.item:last-child {
  border-bottom: none;
}
.item .icon {
  height: 4rem;
  width: 4rem;
  overflow: hidden;
}
.icon img {
  height: 100%;
  width: 100%;
}
.item .name {
  margin-left: 1rem;
}
.model-confirm {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -7rem;
  left: 0;
}
.model-box {
  width: 80%;
  position: fixed;
  top: 14rem;
  left: 50%;
  margin-left: -40%;
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.model-content {
  color: #000;
  font-size: 1.2em;
  margin-bottom: 2rem;
}
.model-btn {
  text-align: center;
  display: flex;
  justify-content: flex-end;
}
.cancel-btn, .confirm-btn {
  height: 2.5rem;
  width: 5rem;
  line-height: 2.5rem;
  border: 1px solid skyblue;
  border-radius: 3px;
  margin-left: 2rem;
  cursor: pointer;
}
.confirm-btn {
  background-color: skyblue;
  color: #fbfbfb;
}
</style>
