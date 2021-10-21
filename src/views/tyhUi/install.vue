<template>
  <h1 class="title">快速上手</h1>
  <h3 class="Subtitle">安装</h3>
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
