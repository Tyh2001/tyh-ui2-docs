<template>
  <table id="table">
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    <tr v-for="(configure, index) in configures" :key="index">
      <td>{{ configure.param }}</td>
      <td>{{ configure.explain }}</td>
      <td>{{ configure.type }}</td>
      <td>{{ configure.value }}</td>
      <td>{{ configure.default }}</td>
    </tr>
  </table>
</template>

<script setup>
defineProps({
  configures: {
    type: Array,
    required: true
  }
})
</script>

<style lang='less' scoped>
#table {
  user-select: text;
  width: 100%;
  color: #606266;
  border-collapse: collapse;
  tr {
    height: 50px;
    border-bottom: 1px solid #dcdfe6;
    text-align: center;
    td,
    th {
      border-bottom: 1px solid #dcdfe6;
    }
  }
}
</style>
