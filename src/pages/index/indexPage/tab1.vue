<template>
  <div>
    <el-button type="success" plain disabled>
      {{ msg }}
    </el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'tab1 页 详细内容'
      }
    }
  }
</script>

