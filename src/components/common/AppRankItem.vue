<!-- 应用项目左右长型布局 -->

<template lang="html">
  <router-link :to="'/detail/'+rankItemData.id">
    <div class="AppRankItem">
      <div class="item-app">
        <span class="order" :class="'_'+index">{{index + 1}}</span>
        <div class="icon">
          <img :src="rankItemData.icon" :alt="rankItemData.name" :title="rankItemData.name">
        </div>
        <div class="info">
          <div class="name">
            {{rankItemData.name}}
          </div>
          <div class="rate">
            <StarRate :rate="rankItemData.rate" :len="5"></StarRate>
          </div>
          <div class="size-comment">
            <div class="size">
              {{rankItemData.size}}
            </div>
            <div class="comment">
              <span class="fa fa-comment-o"></span>
              {{rankItemData.comment.length}}
            </div>
          </div>
        </div>
      </div>
      <div class="item-download">
        <button type="button" name="download" @click.prevent="install">安装</button>
      </div>
    </div>
  </router-link>
</template>

<script>
import StarRate from './StarRate'
export default {
  name: 'AppRankItem',
  components: { StarRate },
  data () {
    return {

    }
  },
  props: [ 'rankItemData', 'index'],
  methods: {
    install () {

    }
  }
}
</script>

<style lang="css" scoped>
.AppRankItem {
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.item-app {
  height: 100%;
  text-align: left;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.order {
  width: 1rem;
  font-weight: bold;
  text-align: center;
}
.order._0 {
  font-size: 1.5em;
  color: red;
}
.order._1 {
  font-size: 1.5em;
  color: orange;
}
.order._2 {
  font-size: 1.5em;
  color: skyblue;
}
.icon {
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  overflow: hidden;
}
.icon img {
  height: 100%;
  width: 100%;
}
.info {
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
}
.info .name {
  width: 100%;
  font-size: 1.2em;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info .size-comment {
  width: 8em;
  color: #666;
  display: flex;
  justify-content: space-between;
}
.item-download {
  height: 100%;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-download button {
  height: 2.5rem;
  width: 5rem;
  background-color: #fff;
  color: skyblue;
  font-size: 1em;
  border: 1px solid skyblue;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all .3s
}
.item-download button:hover {
  background-color: skyblue;
  color: #fff;
}

</style>
