<!-- 我的关注 -->
<template lang="html">
  <div class="Favorite">
    <div class="outLine" v-if="!login">
      <div class="content">
        <p>我的关注</p>
        <p>请登陆后查看</p>
        <div class="login" @click="toLogin()">
          登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorite',
  data () {
    return {
      login: false
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style lang="css" scoped>
.Favorite {
  width: 100%;
}
.outLine {
  width: 100%;
  min-height: 100%;
  text-align: center;
}
.outLine .content {
  margin: 10rem auto;
  color: #666;
}
.login {
  display: inline-block;
  line-height: 2.5rem;
  padding: 0 2rem;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid skyblue;
  border-radius: 3px;
  background-color: #fff;
  color: skyblue;
  cursor: pointer;
}
.login:hover {
  background-color: skyblue;
  color: #fff;
}

</style>
