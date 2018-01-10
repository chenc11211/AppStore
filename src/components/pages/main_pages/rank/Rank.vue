<template>
  <div class="rank">
    <div class="nav">
      <ul>
        <li :class="{ active: routerState.rank === 'HotApp'}" @click="click('HotApp')">热门应用</li>
        <li :class="{ active: routerState.rank === 'NewApp'}" @click="click('NewApp')">最新上架</li>
        <li :class="{ active: routerState.rank === 'HotGame'}" @click="click('HotGame')">热门游戏</li>
        <li :class="{ active: routerState.rank === 'HotDeveloper'}" @click="click('HotDeveloper')">热门开发者</li>
      </ul>
    </div>
    <div class="container" ref="container">
      <transition :name="animation">
        <router-view class="content-rank"></router-view>
      </transition>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Rank',
    data () {
      return {
        routerState: this.store.routerState,
        animation: 'left',
        order: {
          HotApp: 1,
          NewApp: 2,
          HotGame: 3,
          HotDeveloper: 4
        }
      }
    },
    methods: {
      click: function (index) {
        switch (index) {
          case 'HotApp':
            this.$router.push({name: 'HotApp'})
            break;
          case 'NewApp':
            this.$router.push({name: 'NewApp'})
            break;
          case 'HotGame':
            this.$router.push({name: 'HotGame'})
            break;
          case 'HotDeveloper':
            this.$router.push({name: 'HotDeveloper'})
            break;
          default:
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
        //组件内切换时，滚动到顶部，防止滚动共享
        this.$refs.container.scrollTo(0,0)
      }
    }
  }
</script>

<style scoped>
  .rank {
    width: 100%;
    background-color: #fbfbfb;
  }
  .nav {
    height: 3rem;
    background-color: skyblue;
    color: #eee;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
  }
  .nav ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .nav ul li {
    display: inline-block;
    line-height: 3rem;
    text-align: center;
    flex-grow: 1;
    position: relative;
    cursor: pointer;
  }
  .nav ul li.active{
    color: #fff;
  }
  .nav ul li.active::after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  .content-rank {
    position: absolute;
    margin-top: .7rem;
    padding-bottom: 8rem;
  }
</style>
