<!-- 应用项目上下方形布局 -->
<template lang="html">
  <router-link :to="'/detail/'+itemIfo.id">
    <div class="AppItem" >
      <div class="icon">
        <img :src="itemIfo.icon" alt="">
      </div>
      <div class="info">
        <div class="name">
          {{itemIfo.name}}
        </div>
        <div class="rate">
          <StarRate :rate="itemIfo.rate" :len="5"></StarRate>
        </div>
        <div class="size">
          {{itemIfo.size}}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import StarRate from './StarRate'
export default {
  name: 'AppItem',
  components: { StarRate },
  data () {
    return {

    }
  },
  props: [ 'itemIfo' ],
  methods: {

  }
}
</script>

<style lang="css" scoped>

.icon {
  width: 7rem;
  height: 7rem;
  overflow: hidden;
}
.icon img {
  width: 100%;
  height: 100%;
}
.info {
  line-height: 2;
}
.name, .size {
  text-align: center;
  text-wrap: none;
  text-overflow: ellipsis;
}
.rate {
  display: flex;
  justify-content: center;
}


</style>
