<template lang="html">
  <div class="Classify">
    <div class="game">
      <div class="class-title">
        <span class="icon fa fa-gamepad fa-3x"></span>
        <span class="name">游戏</span>
      </div>
      <ul class="item-list">
        <li class="item" @click="linkTo('action', '动作')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_12127266_1514285017/96" alt="动作">
          </div>
          <div class="name">
            动作
          </div>
        </li>
        <li class="item" @click="linkTo('adventure', '冒险')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_12079348_1510826002/96" alt="冒险">
          </div>
          <div class="name">
            冒险
          </div>
        </li>
        <li class="item" @click="linkTo('arcade', '街机')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_12151672_1509610172/96" alt="街机">
          </div>
          <div class="name">
            街机
          </div>
        </li>
        <li class="item" @click="linkTo('chess', '桌面和棋类')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_97949_1513672522/96" alt="桌面和棋类">
          </div>
          <div class="name">
            桌面和棋类
          </div>
        </li>
        <li class="item" @click="linkTo('card', '卡牌')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_1105393_1513047120/96" alt="卡牌">
          </div>
          <div class="name">
            卡牌
          </div>
        </li>
        <li class="item" @click="linkTo('gamble', '赌博')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10125368_1514949050/96" alt="赌场">
          </div>
          <div class="name">
            赌场
          </div>
        </li>
        <li class="item" @click="linkTo('arder', '休闲')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_11242973_1508829959/96" alt="休闲">
          </div>
          <div class="name">
            休闲
          </div>
        </li>
        <li class="item" @click="linkTo('education', '教育')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_42286397_1513936565/96" alt="教育">
          </div>
          <div class="name">
            教育
          </div>
        </li>
        <li class="item" @click="linkTo('music', '音乐')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10170898_1495903430/96" alt="音乐">
          </div>
          <div class="name">
            音乐
          </div>
        </li>
        <li class="item" @click="linkTo('knowledge', '益智')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10309451_1510731506/96" alt="益智">
          </div>
          <div class="name">
            益智
          </div>
        </li>
        <li class="item" @click="linkTo('speed', '竞速')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10346629_1439972053/96" alt="竞速">
          </div>
          <div class="name">
            竞速
          </div>
        </li>
        <li class="item" @click="linkTo('character', '角色扮演')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_12214927_1493299307/96" alt="角色扮演">
          </div>
          <div class="name">
            角色扮演
          </div>
        </li>
        <li class="item" @click="linkTo('simulate', '模拟')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_52430355_1513597409/96" alt="模拟">
          </div>
          <div class="name">
            模拟
          </div>
        </li>
        <li class="item" @click="linkTo('sports', '体育')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_42345568_1511336279/96" alt="体育">
          </div>
          <div class="name">
            体育
          </div>
        </li>
        <li class="item" @click="linkTo('tactics', '策略')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_1168629_1494835286/96" alt="策略">
          </div>
          <div class="name">
            策略
          </div>
        </li>
        <li class="item" @click="linkTo('question', '知识问答')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10549229_1445243827/96" alt="知识问答">
          </div>
          <div class="name">
            知识问答
          </div>
        </li>
        <li class="item empty"></li>
        <li class="item empty"></li>
        <li class="item empty"></li>
        <li class="item empty"></li>
        <li class="item empty"></li>
      </ul>
    </div>
    <div class="application">
      <div class="class-title">
        <span class="icon fa fa-google fa-3x"></span>
        <span class="name">应用</span>
      </div>
      <ul class="item-list">
        <li class="item" @click="linkTo('tool', '工具')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_5177_1514356040/96" alt="工具">
          </div>
          <div class="name">
            工具
          </div>
        </li>
        <li class="item" @click="linkTo('social', '社交')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10910_1514528190/96" alt="社交">
          </div>
          <div class="name">
            社交
          </div>
        </li>
        <li class="item" @click="linkTo('appointment', '交友约会')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10604320_1514270693/96" alt="交友约会">
          </div>
          <div class="name">
            交友约会
          </div>
        </li>
        <li class="item" @click="linkTo('books', '图书与工具')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_5712_1514364376/96" alt="图书与工具书">
          </div>
          <div class="name">
            图书与工具书
          </div>
        </li>
        <li class="item" @click="linkTo('media', '影音娱乐')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_7720_1514356724/96" alt="影音娱乐">
          </div>
          <div class="name">
            影音娱乐
          </div>
        </li>
        <li class="item" @click="linkTo('tour', '旅游出行')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_1268114_1514426867/96" alt="旅游出行">
          </div>
          <div class="name">
            旅游出行
          </div>
        </li>
        <li class="item" @click="linkTo('shopping', '购物')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_7193_1514951677/96" alt="购物">
          </div>
          <div class="name">
            购物
          </div>
        </li>
        <li class="item" @click="linkTo('weather', '天气')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10114966_1515037018/96" alt="天气">
          </div>
          <div class="name">
            天气
          </div>
        </li>
        <li class="item" @click="linkTo('finance', '财务')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_10527_1515056012/96" alt="财务">
          </div>
          <div class="name">
            财务
          </div>
        </li>
        <li class="item" @click="linkTo('audio', '音乐')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_1168851_1514479711/96" alt="音乐">
          </div>
          <div class="name">
            音乐
          </div>
        </li>
        <li class="item" @click="linkTo('custom', '个性化')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_6896_1513846794/96" alt="个性化">
          </div>
          <div class="name">
            个性化
          </div>
        </li>
        <li class="item" @click="linkTo('system', '系统工具')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_277813_1478669355/96" alt="系统工具">
          </div>
          <div class="name">
            系统工具
          </div>
        </li>
        <li class="item" @click="linkTo('photo', '摄影')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_1176832_1514534873/96" alt="摄影">
          </div>
          <div class="name">
            摄影
          </div>
        </li>
        <li class="item" @click="linkTo('navigation', '地图导航')">
          <div class="icon">
            <img src="http://pp.myapp.com/ma_icon/0/icon_7678_1512373185/96" alt="地图导航">
          </div>
          <div class="name">
            地图导航
          </div>
        </li>
        <li class="item empty"></li>
        <li class="item empty"></li>
        <li class="item empty"></li>
        <li class="item empty"></li>
        <li class="item empty"></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Classify',
  data () {
    return {

    }
  },
  methods: {
    linkTo (classify, className) {
      this.$router.push({name: 'ListPage', params: {classify: classify, className: className}})
    }
  }
}
</script>

<style lang="css" scoped>
.Classify {
  width: 100%;
}
.game, .application {
  width: 100%;
  margin-bottom: .7rem;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
}
.class-title {
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.class-title .icon {
  color: green;
  margin-left: 1rem;
}
.class-title .name {
  color: #000;
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 1rem;
}
.item-list {
  width: 100%;
  box-sizing: border-box;
  padding: 0 1.5rem 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  transition: all 0.3s;
}
.item:hover {
  background-color: #f5f5f5;
}
.item .icon {
  height: 3rem;
  width: 3rem;
  overflow: hidden;
}
.icon img {
  width: 100%;
  height: 100%
}
.item .name {
  min-width: 7rem;
  color: #666;
  text-align: left;
  margin-left: 1rem;
}
.item.empty {
  width: 11rem;
  height: 0;
}

</style>
