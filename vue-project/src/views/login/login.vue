<template>
  <div class="login">
    <div class="header">
      <div>登录</div>
      <div class="close"><mt-button @click.native="closePage">X</mt-button></div>
    </div>
    <div>
      <div class="user-login">
        <mt-field class="input-c" placeholder="手机号/用户名" v-model="username"></mt-field>
        <mt-field class="input-c" placeholder="密码" type="password" v-model="password"></mt-field>
      </div>
      <mt-button class="login-btn" @click.native="startLogin" type="primary">登录</mt-button>
      <div class="pass-opt"><span>忘记密码</span><span>手机注册</span></div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'homePage',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        startLogin() {
            this.$messagebox('提示', '登录');
        },
        closePage() {
            this.$router.push({
                path:'/'
            })
        }
    }
};

</script>
<style lang="less" scoped>
.pass-opt{
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    font-size: 28px;
    padding:0 10px;
    color:#333333;
}
.user-login{
    margin-top:15vh;
}
.header {
  height: 88px;
  font-size: 36px;
  color: #333333;
  display: flex;
  justify-content: center;
  position: relative;

  /deep/.close {
    position: absolute;
    min-width: 88px;
    right: -20px;
    button{
        background: #fff;
        box-shadow: none;
    }
  }

  &>div {
    height: 88px;
    line-height: 88px;
  }
}
/deep/.input-c{
    margin-top: 30px;
    background: #f2f2f2;
    border-radius: 5px;
    input{
        background: #f2f2f2;
    }
}
.login-btn{
    margin-top: 60px;
    background: #E50834;
    width: 100%;
}
.login {
  min-height: 100vh;
  width: 100vw;
  padding: 0 32px;
}

</style>
