<template>
<div class="AppFooter">
  <router-link :to="{ name: routerState.home, params: {footer: 1} }">
    <div class="item">
      <div class="icon">
        <span class="fa fa-home fa-2x"></span>
      </div>
      <div class="name">
        首页
      </div>
    </div>
  </router-link>
  <router-link :to="{ name: routerState.rank, params: {footer: 2} }">
    <div class="item">
      <div class="icon">
        <span class="fa fa-list-ol fa-2x"></span>
      </div>
      <div class="name">
        排行
      </div>
    </div>
  </router-link>
  <router-link :to="{ name: routerState.focus, params: {footer: 3} }">
    <div class="item">
      <div class="icon">
        <span class="fa fa-star-o fa-2x"></span>
      </div>
      <div class="name">
        关注
      </div>
    </div>
  </router-link>
  <router-link :to="{ name: 'LoginPage' }">
    <div class="item">
      <div class="icon">
        <span class="fa fa-user-circle-o fa-2x"></span>
      </div>
      <div class="name">
        我的
      </div>
    </div>
  </router-link>
</div>

</template>

<script type="text/javascript">
  export default {
    name: 'AppFooter',
    data () {
      return {
        routerState: this.store.routerState
      }
    }
  }
</script>

<style scoped>

.AppFooter {
  height: 4.5rem;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #eee;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.item {
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #bbb;
}
.router-link-active .item{
  color: skyblue;
}

</style>
