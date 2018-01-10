<template>
<div class="header">
  <div class="icon">
    <img src="../../assets/logo.png" alt="">
  </div>
  <div class="menu">
    <router-link :to="{ name: 'SearchPage'}">
      <span class="fa fa-search fa-2x"></span>
    </router-link>
    <span class="fa fa-bars fa-2x"></span>
  </div>
</div>
</template>

<script>

export default {
  name: "AppHeader",
  data () {
    return {

    }
  }
}

</script>

<style scoped>

.header {
  width: 100%;
  background-color: skyblue;
}
.header::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.icon {
  margin-left: .5rem;
  float: left;
  height: 100%;
  overflow: hidden;
}
.icon img{
  height: 100%;
}
.menu {
  float: right;
  width: 8rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}
.menu span {
  color: #fff;
  cursor: pointer;
}

</style>
