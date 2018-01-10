<!-- 登录页 -->
<template lang="html">
  <transition name="topOver">
    <div class="login">
      <div class="header">
        <div class="backBtn">
          <span class="fa fa-chevron-left" @click="$router.go(-1)"></span>
        </div>
        <div class="title">
          登录
        </div>
      </div>
      <div class="content">
        <form class="login-form" action="" method="post">
          <div class="user-name" :class="{ 'in-focus': nameFocus }">
            <input type="text" name="user" value="" v-model="nameValue" @focus="nameFocus = true" @blur="nameFocus = false">
            <label for="user" :class="{ 'in-focus': nameFocus, 'has-content': nameValue }">用户名</label>
            <span class="clear fa fa-times" v-show="nameValue" @click.stop.prevent="nameValue = ''"></span>
          </div>
          <div class="user-key" :class="{ 'in-focus': keyFocus }">
            <input :type="visible" name="key" value="" v-model="keyValue" @focus="keyFocus = true" @blur="keyFocus = false">
            <label for="key" :class="{ 'in-focus': keyFocus, 'has-content': keyValue }">密码</label>
            <span class="visible fa fa-eye" :class="{ 'on-visible': visible === 'text' }" @click="toggleVisible()"></span>
            <span class="clear fa fa-times" v-show="keyValue" @click.stop="keyValue = ''"></span>
          </div>
          <input class="submit" type="submit" name="" value="登录" @submit.stop.prevent @click.stop.prevent>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      visible: 'password',
      nameFocus: false,
      keyFocus: false,
      nameValue: '',
      keyValue: ''
    }
  },
  methods: {
    toggleVisible () {
      if (this.visible === 'password') {
        this.visible = 'text'
      } else {
        this.visible = 'password'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.header {
  width: 100%;
  height: 4rem;
  background-color: skyblue;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.backBtn, .title {
  float: left;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.6em;
  color: #fbfbfb;
}
.backBtn {
  margin-left: 1rem;
}
.title {
  margin-left: 2rem;
}
.content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: #fbfbfb;
}
.login-form {
  width: 80%;
  margin: 5rem auto;
}
.user-name, .user-key {
  width: 100%;
  height: 6rem;
  font-size: 1.2em;
  box-sizing: border-box;
  border-bottom: 1px solid #666;
  position: relative;
}
.user-name.in-focus, .user-key.in-focus {
  border-bottom: 1px solid skyblue;
}
.user-name input, .user-key input {
  height: 3rem;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border: none;
  background-color: transparent;
  padding-bottom: 0;
  line-height: 30px;
  outline: none;
}
.login-form label {
  position: absolute;
  left: 0;
  bottom: 0;
  line-height: 3rem;
  color: #999;
  transition: all .3s;
}
.login-form label.has-content {
  bottom: 2rem;
  color: #999;
  font-size: 1rem;
}
.login-form label.in-focus {
  bottom: 2rem;
  color: skyblue;
  font-size: 1rem;
}
.login-form span {
  position: absolute;
  bottom: 0;
  color: #ccc;
  line-height: 3rem;
}
.visible {
  right: 1rem;
}
.visible.on-visible {
  color: skyblue;
}
.clear {
  right: 3.5rem;
}
.submit {
  height: 3rem;
  width: 100%;
  padding: 0;
  margin-top: 3rem;
  background-color: skyblue;
  font-size: 1.2em;
  color: #fff;
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.submit:hover {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

/* 组件过渡上滑动画 */
.topOver-enter-active {
  transition: all .2s cubic-bezier(0.1,0.6,0.1,0.6);
}
.topOver-leave-active {
  transition: all .2s cubic-bezier(0.6,0.1,0.6,0.1);
}
.topOver-enter {
  transform: translateY(5rem);
  opacity: 0;
}
.topOver-leave-to {
  transform: translateY(5rem);
  opacity: 0;
}
</style>
