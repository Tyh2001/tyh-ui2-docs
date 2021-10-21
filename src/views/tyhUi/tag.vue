<template>
  <h1 class="title">Tag 标签</h1>
  <h3 class="Subtitle">基本使用</h3>

  <p class="Subtitle">基本使用</p>
  <tyh-tag>标签一</tyh-tag>
  <tyh-tag color="primary">标签二</tyh-tag>
  <tyh-tag color="success">标签三</tyh-tag>
  <tyh-tag color="danger">标签四</tyh-tag>
  <tyh-tag color="warning">标签五</tyh-tag>
  <highlightjs autodetect :code="tag1" />

  <p>不同尺寸</p>
  <p>size 属性可以配置不同的尺寸</p>
  <tyh-tag color="primary">标签</tyh-tag>
  <tyh-tag size="small" color="primary">标签</tyh-tag>
  <tyh-tag size="mini" color="primary">标签</tyh-tag>
  <highlightjs autodetect :code="tag2" />
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const { tag1, tag2 } = index.tag
    return { tag1, tag2 }
  }
}
</script>

<style scoped>
.tyh-tag {
  margin-left: 10px;
}
</style>
