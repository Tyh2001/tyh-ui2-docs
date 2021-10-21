<template>
  <h1>快速上手</h1>
  <h2>安装</h2>
  <p>推荐使用 npm 的方式安装</p>
  <highlightjs autodetect :code="ins1" />

  <p>在 main.js 中引入下面内容</p>
  <highlightjs autodetect :code="ins2" />
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const { ins1, ins2 } = index.install
    return { ins1, ins2 }
  }
}
</script>

<style scoped>
</style>
