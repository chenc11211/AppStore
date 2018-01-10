<template>
  <div class="home">
    <div class="nav">
      <ul>
        <li :class="{ active: routerState.home==='Recommend' }" @click="select('Recommend')">精选</li>
        <li :class="{ active: routerState.home==='Discovery' }" @click="select('Discovery')">最新发现</li>
        <li :class="{ active: routerState.home==='Classify' }" @click="select('Classify')">分类</li>
      </ul>
    </div>
    <div class="container" ref="container">
      <transition :name="animation">
        <router-view class="content-home"></router-view>
      </transition>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Home',
    data () {
      return {
        routerState: this.store.routerState,
        animation: 'left',
        order: {
          Recommend: 1,
          Discovery: 2,
          Classify: 3
        }
      }
    },
    methods: {
      select (index) {
        switch (index) {
          case 'Recommend':
            this.$router.push({name: 'Recommend'})
            break;
          case 'Discovery':
            this.$router.push({name: 'Discovery'})
            break;
          case 'Classify':
            this.$router.push({name: 'Classify'})
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
  .home {
    width: 100%;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  .content-home {
    position: absolute;
    padding-bottom: 8rem;
    margin-top: .7rem;
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
</style>
