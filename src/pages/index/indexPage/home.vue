<template>
  <div>
    <router-link to="Tab1">
      <el-button type="primary">tab1</el-button>
    </router-link>
    <router-link to="Tab2">
      <el-button type="primary">tab2</el-button>
    </router-link>
    <router-view></router-view>
    <br>
    <hello-world></hello-world>   
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: "IndexHome",
  data() {
    return {

    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped lang="less">
div {
  p {
    color: red;
  }
}
</style>
