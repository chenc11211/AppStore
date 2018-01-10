<template lang="html">
  <div class="Discovery">
    <DiscoveryItem v-for="item in discoveryData" :itemData="appDataAll[item]" :key="item.id"></DiscoveryItem>
    <div class="is-all">
      没有更多了
    </div>
  </div>
</template>

<script>
import DiscoveryItem from '@/components/common/DiscoveryItem'

export default {
  name: 'Discovery',
  components: { DiscoveryItem },
  data () {
    return {
      appDataAll: this.store.appData.app,
      discoveryData: this.store.appData.discovery
    }
  }
}
</script>

<style lang="css" scoped>
.Discovery {

}
.is-all {
  text-align: center;
  color: #999;
}
</style>
