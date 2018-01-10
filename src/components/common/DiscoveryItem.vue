<template lang="html">
  <router-link :to="'/detail/' + itemData.id">
    <div class="item">
      <div class="app">
        <div class="icon">
          <img :src="itemData.icon" alt="">
        </div>
        <div class="name">
          {{itemData.name}}
        </div>
      </div>
      <div class="cover">
        <img :src="itemData.img[0]" alt="">
      </div>
      <div class="detail">
        <p>{{itemData.info}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'DiscoveryItem',
  data () {
    return {

    }
  },
  props: ['itemData'],
  methods: {

  }
}
</script>

<style lang="css" scoped>
.item {
  width: 100%;
  margin-bottom: .7rem;
  overflow: hidden;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  background-color: #fff;
}
.app {
  height: 3.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.app .icon {
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 1rem;
  overflow: hidden;
}
.app .icon img {
  width: 100%;
  height: 100%;
}
.app .name {
  height: 2rem;
  font-size: 1.2em;
  line-height: 2rem;
  text-indent: .5rem;
  overflow: hidden;
}
.cover {
  width: 100%;
  height: 15rem;
  overflow: hidden;
  position: relative;
}
.cover img {
  width: 100%;
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
}
.detail {
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  padding: .5rem .5rem;
  line-height: 1.5;
}
.detail p {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
