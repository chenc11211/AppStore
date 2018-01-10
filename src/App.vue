<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  width: 100%;
  font-size: 10px;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
body {
  width: 100%;
  overflow-x: hidden;
  background-color: #fbfbfb;
}
input {
  outline: none;
}
html::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* 路由滑动动画 */
.left-enter-active {
  transition: all .3s;
}
.left-leave-active {
  transition: all .3s;
}
.left-enter {
  transform: translateX(100%);
}
.left-leave-to {
  transform: translateX(-100%);
}
.right-enter-active {
  transition: all .3s;
}
.right-leave-active {
  transition: all .3s;
}
.right-enter {
  transform: translateX(-100%);
}
.right-leave-to {
  transform: translateX(100%);
}

/* 媒体查询 */
@media (min-width: 330px) and (max-width: 375px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 376px) and (max-width: 419px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 420px) and (max-width: 639px) {
  html {
    font-size: 14px;
  }
}
@media (min-width: 640px) and (max-width: 719px) {
  html {
    font-size: 20px;
  }
}
@media (min-width: 720px) and (max-width: 749px) {
  html {
    font-size: 22.5px;
  }
}
@media (min-width: 750px) and (max-width: 799px) {
  html {
    font-size: 23.5px;
  }
}
@media (min-width: 800px) {
  html {
    font-size: 25px;
  }
}

</style>
