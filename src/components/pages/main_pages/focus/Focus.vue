<template>
  <div class="Focus">
    <div class="nav">
      <ul>
        <li :class="{ active: routerState.focus === 'Favorite'}" @click="click('Favorite')">关注</li>
        <li :class="{ active: routerState.focus === 'Popular'}" @click="click('Popular')">精选</li>
        <li :class="{ active: routerState.focus === 'Group'}" @click="click('Group')">小组</li>
      </ul>
    </div>
    <div class="container" ref="container">
      <transition :name="animation">
        <router-view class="content-focus"></router-view>
      </transition>
    </div>
    <WidgetBar class="widget-bar"></WidgetBar>
  </div>
</template>

<script type="text/javascript">
  import WidgetBar from '@/components/common/WidgetBar'
  export default {
    name: 'Focus',
    components: { WidgetBar },
    data () {
      return {
        routerState: this.store.routerState,
        animation: 'left',
        order: {
          Favorite: 1,
          Popular: 2,
          Group: 3
        }
      }
    },
    methods: {
      click: function (index) {
        switch (index) {
          case 'Favorite':
            this.$router.push({name: 'Favorite'})
            break;
          case 'Popular':
            this.$router.push({name: 'Popular'})
            break;
          case 'Group':
            this.$router.push({name: 'Group'})
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
  .Focus {
    position: absolute;
    width: 100%;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  .content-focus {
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
  /* 小部件 */
  .widget-bar {
    position: fixed;
    right: 1rem;
    bottom: 5.5rem;
    z-index: 2;
  }
</style>
