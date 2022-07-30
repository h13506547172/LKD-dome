<template>
  <div class="login-page">
    <div class="main">
      <img src="../../assets/image/logo.595745bd.png" alt="" class="login-img">
      <div class="login-form">
        <!-- 登录区域 -->
        <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- 手机号 -->
          <el-form-item prop="name">
            <el-input v-model="ruleForm.username">
              <i slot="prefix" class="el-icon-mobile-phone" />
            </el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="name">
            <el-input v-model="ruleForm.password" :type="type" class="passwordIpt">
              <i slot="prefix" class="el-icon-lock" />
              <i slot="suffix" :class="{'el-icon-view': type === 'password','el-icon-key': type !== 'password'}" @click="clickEyeFn" />
            </el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="name">
            <el-input v-model="ruleForm.username" placeholder="请输入验证码">
              <i slot="prefix" class="el-icon-circle-check" />
              <template #suffix>
                <img src="https://likede2-java.itheima.net/api/user-service/user/imageCode/wheORyjlezP3w2Ivm4Hxpo6PuY04mKcW" alt="" class="yzm">
              </template>
            </el-input>
          </el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: 'admin'
      },
      // 密码框类型
      type: 'password'
    }
  },

  created() {},

  methods: {
    clickEyeFn() {
      this.type === 'password' ? this.type = 'text' : this.type = 'password'
    }
  }
}
</script>

<style lang='less' scoped>
.login-page{
  width: 100%;
  height: 100%;
  background: url('~@/assets/image/background.be4fae7d.png') no-repeat;
  background-size:cover;
  .main {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    border-radius: 10px;
    .login-img {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    }
    // 表单区域
    /deep/ .el-form-item__content{
      margin-left: 0!important;
      height: 52px;
      .el-input__inner {
        height: 52px;
        padding-left: 40px;
      }
    }
    /deep/ i {
    font-size:16px;
    margin: 18px 5px 6px 10px
    }
    .yzm {
      height: 100%;
      position: relative;
      right: -5px;
    }
    .el-button {
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg,#2e50e1,#6878f0);
      opacity: .91;
      border-radius: 8px;
      color: #fff;
    }
  }
}
</style>
