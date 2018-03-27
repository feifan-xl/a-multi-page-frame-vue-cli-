<template>
  <div id="app">
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <a href="index.html">转到index页面</a>
    <router-link to='/eletest'>跳转ele</router-link>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
      color: red;
  }
}
</style>
