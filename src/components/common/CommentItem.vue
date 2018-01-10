<template lang="html">
  <div class="comment-item">
    <div class="user">
      <div class="icon">
        <img src="../../assets/user.png" alt="">
      </div>
      <div class="info">
        <div class="name">
          {{commentItem.user}}
        </div>
        <div class="time">
          {{commentItem.timer}}
        </div>
      </div>
    </div>
    <div class="content">
      <p>{{commentItem.content}}</p>
    </div>
    <div class="operation">
      <router-link :to="{ name: 'DetailPage', params: { id: appId } }">
        <div class="origin">
          {{appName}}
        </div>
      </router-link>
      <div class="bar">
        <div class="up">
          <span class="fa fa-thumbs-o-up"></span>
        </div>
        <div class="down">
          <span class="fa fa-thumbs-o-down"></span>
        </div>
        <div class="reply">
          <span class="fa fa-comment-o"></span> 0
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  data () {
    return {

    }
  },
  props: [ 'commentItem', 'appName', 'appId' ]
}
</script>

<style lang="css" scoped>
.comment-item {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  text-align: left;
}
.user {
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.user .icon {
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
  cursor: pointer;
}
.icon img {
  height: 100%;
  width: 100%;
}
.user .info {
  height: 2.5rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.info .name {
  color: #666;
  cursor: pointer;
}
.info .time {
  color: #999;
  font-size: .8em;
}
.content {
  line-height: 1.5;
  padding: .5rem 0;
}
.operation {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.operation .bar {
  color: #999;
  display: flex;
  justify-content: space-around;
}
.operation .origin {
  color: skyblue;
}
.operation .bar>div {
  margin: 0 1rem;
  cursor: pointer;
}
</style>
