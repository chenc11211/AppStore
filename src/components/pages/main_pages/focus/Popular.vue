<!-- 精选 -->
<template lang="html">
  <div class="Popular">
    <ul class="list-item">
      <li class="item" v-for="(item, index) in appDataAll" :key="index">
        <CommentItem :commentItem="item.comment[0]" :appName="item.name" :appId="item.id"></CommentItem>
      </li>
    </ul>
    <div class="end-info">
      没有更多了
    </div>
  </div>
</template>

<script>
import CommentItem from '@/components/common/CommentItem'
export default {
  name: 'Popular',
  components: { CommentItem },
  data () {
    return {
      appDataAll: this.store.appData.app
    }
  }
}
</script>

<style scoped>
.Popular {
  width: 100%;
  background-color: #f5f5f5;
}
.list-item {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
}
.item {
  display: block;
  border-bottom: 1px solid #eee;
}
.item:last-child {
  border-bottom: none;
}
.end-info {
  text-align: center;
  line-height: 2;
  color: #999;
}
</style>
