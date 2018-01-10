<!-- 应用评论 -->
<template lang="html">
  <div class="comment">
    <div class="grade">
      <div class="container">
        <div class="current-score">
          {{appInfo.rate}}
        </div>
        <div class="user-grade" @mouseout="setGrade(0)">
          <div class="" v-for="n in 5" @mouseover="setGrade(n)">
            <span class="fa-stack">
              <span class="off fa fa-star fa-stack-1x"></span>
              <span class="on fa fa-star fa-stack-1x" v-show="grade >= n"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-list">
      <div class="title">
        评论
      </div>
      <ul class="list-item">
        <li class="item" v-for="(item, index) in appInfo.comment" :key="index">
          <CommentItem :commentItem="item" :appName="appInfo.name" :appId="appInfo.id"></CommentItem>
        </li>
      </ul>
    </div>
    <div class="end-info">
      没有更多了
    </div>
    <WidgetBar class="widget-bar"></WidgetBar>
  </div>
</template>

<script>
import CommentItem from '@/components/common/CommentItem'
import WidgetBar from '@/components/common/WidgetBar'

export default {
  name: 'Comment',
  components: { CommentItem, WidgetBar },
  data () {
    return {
      grade: 0
    }
  },
  props: [ 'appInfo' ],
  methods: {
    setGrade (score) {
      this.grade = score
    }
  }
}
</script>

<style lang="css"  scoped>
.comment {
  width: 100%;
}
.grade {
  height: 10rem;
  width: 100%;
  box-sizing: border-box;
  padding: .7rem 0;
  background-color: #f5f5f5;
}
.grade .container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.grade .current-score {
  font-size: 2.5em;
  color: #000;
}
.grade .user-grade {
  font-size: 2.5em;
  display: flex;
  justify-content: center;
}
.grade .user-grade .off {
  color: #ccc;
}
.grade .user-grade .on {
  color: orange;
}
.comment-list .title {
  line-height: 2.5rem;
  text-align: left;
  text-indent: 1rem;
}
.comment-list .item {
  border-bottom: 1px solid #eee;
}
.end-info {
  text-align: center;
  line-height: 3rem;
  color: #bbb;
}
.widget-bar {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;
}
</style>
