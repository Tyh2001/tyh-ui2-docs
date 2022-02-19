<template>
  <h1 class="title">快速上手</h1>
  <h3 class="Subtitle">安装</h3>
  <p>推荐使用 npm 的方式安装</p>
  <pre v-highlight><code class="shell">{{ install.ins1 }}</code></pre>

  <p>在 main.js 中引入下面内容</p>
  <pre v-highlight><code class="js">{{ install.ins2 }}</code></pre>

  <h3 class="Subtitle">按需引入</h3>
  <p>为了减小体积，你只希望引入部分组件，比如 Button，那么引入方式如下</p>
  <pre v-highlight><code class="js">{{ install.ins3 }}</code></pre>

  <h3 class="Subtitle">完整引入</h3>
  <p>完整组件列表和引入方式</p>
  <pre v-highlight><code class="js">{{ install.ins4 }}</code></pre>

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/" icon="tyh-ui-shouye-xianxing">
      首页
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/color">
      Color 色彩
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { install } from './index'
</script>
