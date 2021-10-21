<template>
  <h1>Division 分割线</h1>
  <h2>基本使用</h2>

  <p>基本使用</p>
  <tyh-division>这是分割线</tyh-division>
  <highlightjs autodetect :code="div1" />

  <p>position 属性可以配置文字的位置</p>
  <tyh-division position="left">这是左边文字</tyh-division>
  <tyh-division position="center">这是中间文字</tyh-division>
  <tyh-division position="right">这是右边文字</tyh-division>
  <highlightjs autodetect :code="div2" />
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const { div1, div2 } = index.division
    return { div1, div2 }
  }
}
</script>

<style scoped>
</style>
