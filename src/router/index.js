import Vue from 'vue'
import Router from 'vue-router'

import MainPages from '@/components/pages/main_pages/MainPages'
// 首页组件及其子组件
import Home from '@/components/pages/main_pages/home/Home'
import Recommend from '@/components/pages/main_pages/home/Recommend'
import Discovery from '@/components/pages/main_pages/home/Discovery'
import Classify from '@/components/pages/main_pages/home/Classify'
// 排行组件及其子组件
import Rank from '@/components/pages/main_pages/rank/Rank'
import AppRank from '@/components/pages/main_pages/rank/AppRank'
import HotDeveloper from '@/components/pages/main_pages/rank/HotDeveloper'
// 关注组件及其子组件
import Focus from '@/components/pages/main_pages/focus/Focus'
import Favorite from '@/components/pages/main_pages/focus/Favorite'
import Popular from '@/components/pages/main_pages/focus/Popular'
import Group from '@/components/pages/main_pages/focus/Group'

// 详情页组件
import DetailPage from '@/components/pages/detail_page/DetailPage'

// 搜索页组件
import SearchPage from '@/components/pages/search_page/SearchPage'

// 列表页组件
import ListPage from '@/components/pages/list_page/ListPage'

//登录页组件
import LoginPage from '@/components/pages/login_page/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'MainPages',
      component: MainPages,
      children: [
        {
          path: 'home', name: 'Home', component: Home,
          children: [
            { path: 'recommend', name: 'Recommend', component: Recommend, props: { name: 'recommend', order: '1' } },
            { path: 'discovery', name: 'Discovery', component: Discovery, props: { name: 'discovery', order: '2' } },
            { path: 'classify', name: 'Classify', component: Classify, props: { name: 'classify', order: '3' } }
          ]
        },
        {
          path: 'rank', name: 'Rank', component: Rank,
          children: [
            { path: 'hotapp', name: 'HotApp', component: AppRank, props: {name: 'hotApp'} },
            { path: 'newapp', name: 'NewApp', component: AppRank, props: {name: 'newApp'} },
            { path: 'hotgame', name: 'HotGame', component: AppRank, props: {name: 'hotGame'} },
            { path: 'hotdeveloper', name: 'HotDeveloper', component: HotDeveloper, props: {name: 'hotDeveloper'} }
          ]
        },
        {
          path: 'focus', name: 'Focus', component: Focus,
          children: [
            { path: 'favorite', name: 'Favorite', component: Favorite },
            { path: 'popular', name: 'Popular', component: Popular },
            { path: 'group', name: 'Group', component: Group }
          ]
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/list/:className',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/',
      redirect: '/main/home/recommend'
    }
  ]
})
