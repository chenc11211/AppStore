import Vue from 'vue'
import App from './App'
import router from './router'

import appdata from '@/assets/appdata'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.prototype.store = {
  appData: appdata,
  routerState: {
    main: 'Home',
    home: 'Recommend',
    rank: 'HotApp',
    focus: 'Popular'
  }
}
var store = Vue.prototype.store.routerState

router.beforeEach((to, from, next) => {
  var nodes = to.path.split('/')
  nodes.shift()
  for (var i = 0; i < nodes.length-1; i++) {
    try {
      store[nodes[i]] = to.matched[i+1].name
    } catch (e) {
      next();
      return
    }
  }
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
