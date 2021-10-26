<template>
  <h1 class="title">快速上手</h1>
  <h3 class="Subtitle">安装</h3>
  <p>推荐使用 npm 的方式安装</p>
  <highlightjs autodetect :code="ins1" />

  <p>在 main.js 中引入下面内容</p>
  <highlightjs autodetect :code="ins2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/" icon="tyh-ui-home-01">
      首页
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/button">
      Button 按钮
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script>
import index from './index'
export default {
  setup () {
    const { ins1, ins2 } = index.install
    return { ins1, ins2 }
  }
}
</script>
