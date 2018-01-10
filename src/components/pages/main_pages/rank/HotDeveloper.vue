<!-- 热门开发者 -->
<template lang="html">
  <div class="HotDeveloper">
    <ul class="itemList">
      <li class="item"
      v-for="(item, index) in hotDeveloperData"
      @click="linkTo(item.name)">
        <div class="num" :class="'_' + index">
          {{index + 1}}
        </div>
        <div class="icon">
          <img :src="item.icon" :alt="item.name" :title="item.name">
        </div>
        <div class="info">
          <div class="name">
            {{item.name}}
          </div>
          <div class="rate">
            <StarRate :rate="item.rate" :len="5"></StarRate><span>{{item.rate}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRate from '@/components/common/StarRate'
export default {
  name: 'HotDeveloper',
  components: { StarRate },
  data () {
    return {
      hotDeveloperData: [
        {
          "id": "001",
          "name": "King",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_10648371_1481025136/96",
          "rate": "3.8"
        },
        {
          "id": "002",
          "name": "Gameloft",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_52396754_1484133647/96",
          "rate": "3.4"
        },
        {
          "id": "003",
          "name": "Supercell",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_12030278_1513695423/96",
          "rate": "4.6"
        },
        {
          "id": "004",
          "name": "SEGA",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_10383069_21252062_1433944556/96",
          "rate": "3.3"
        },
        {
          "id": "005",
          "name": "Tencent Games",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_10170898_1495903430/96",
          "rate": "3.7"
        },
        {
          "id": "006",
          "name": "Kiloo",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_273948_1514456727/96",
          "rate": "3.9"
        },
        {
          "id": "007",
          "name": "Moonton",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_11274809_1492678613/96",
          "rate": "4.9"
        },
        {
          "id": "008",
          "name": "Critical Force Ltd",
          "icon": "http://pp.myapp.com/ma_icon/0/icon_2582_1506335374/96",
          "rate": "4.2"
        }
      ]
    }
  },
  methods: {
    linkTo (params) {
      this.$router.push({ name: 'ListPage', params: { classify: params, className: params } })
    }
  }
}
</script>

<style lang="css" scoped>
.HotDeveloper {
  width: 100%;
}
.itemList {
  width: 100%;
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  background-color: #fff;
}
.item {
  width: 100%;
  height: 7rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.num {
  padding: 0 1rem;
}
.num._0 {
  font-size: 1.5em;
  color: red;
}
.num._1 {
  font-size: 1.5em;
  color: orange;
}
.num._2 {
  font-size: 1.5em;
  color: skyblue;
}
.icon {
  width: 5rem;
  height: 5rem;
  overflow: hidden;
}
.icon img {
  width: 100%;
  height: 100%;
}
.info {
  height: 5rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.info .name {
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info .rate {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

</style>
