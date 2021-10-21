<template>
  <h1>快速上手</h1>
  <h2>安装</h2>
  <p>推荐使用 npm 的方式安装</p>
  <highlightjs autodetect :code="ins1" />
</template>

<script>
export default {
  name: '',
  setup () {
    const { ins1 } = index.install
    const { ins2 } = index.install
    return {
      ins1,
      ins2
    }
  }
}
</script>

<style scoped>
</style>
