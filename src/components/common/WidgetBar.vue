<template lang="html">
  <div class="Bar">
    <div class="btn" :class="{active: isActive}" @click="click">
      <span>+</span>
    </div>
    <transition name="share">
      <div class="shareBtn" v-show="isActive">
        <span class="icon fa fa-paper-plane"></span>
        <span class="tip">分享应用</span>
      </div>
    </transition>
    <transition name="comment">
      <div class="commentBtn" v-show="isActive">
        <span class="icon fa fa-pencil"></span>
        <span class="tip">评论</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WidgetBar',
  data () {
    return {
      isActive: false
    }
  },
  methods :{
    click: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="css" scoped>
.bar {

}
.btn {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: skyblue;
  transition: all .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fbfbfb;
  user-select: none;
}
.btn.active {
  transform: rotate(135deg);
}
.menu {

}
.shareBtn, .commentBtn {
  position: absolute;
  left: .5rem;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  transition: all .3s;
}
.shareBtn {
  top: -8rem;
}
.commentBtn {
  top: -4rem;
}
.tip {
  position: absolute;
  right: 4rem;
  height: 2rem;
  padding: 0 1rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fbfbfb;
}
.shareBtn .tip {
  width: 4rem;
}
.commentBtn .tip {
  width: 2rem;
}

.share-enter, .comment-enter {
  top: .5rem;
  opacity: 0;
}
.share-leave-to, .comment-leave-to {
  top: .5rem;
  opacity: 0;
}



</style>
