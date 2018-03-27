<template>
  <div>
    <el-button type="primary" plain disabled>
      {{ msg }}
    </el-button>
    <el-button type='info' @click='showInfo()'>点击vuex</el-button>
    <el-button type="info" @click="addmsg()"> 增加</el-button>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        msg: 'tab2 页 详细内容'
      }
    },
    methods: {
      // ...mapMutations()['addStr'],
      showInfo () {
        console.log(this.$store.state.msg)
      },
      addmsg () {
        this.$store.commit('addStr', 111)
      }
    }
  }
</script>

