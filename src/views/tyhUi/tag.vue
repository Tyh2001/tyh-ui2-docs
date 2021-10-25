<template>
  <h1 class="title">Tag 标签</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>标签的基本使用</p>
  <tyh-tag>标签一</tyh-tag>
  <tyh-tag color="primary">标签二</tyh-tag>
  <tyh-tag color="success">标签三</tyh-tag>
  <tyh-tag color="danger">标签四</tyh-tag>
  <tyh-tag color="warning">标签五</tyh-tag>
  <highlightjs autodetect :code="tag1" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>size 属性可以配置不同的尺寸</p>
  <tyh-tag color="primary">标签</tyh-tag>
  <tyh-tag size="small" color="primary">标签</tyh-tag>
  <tyh-tag size="mini" color="primary">标签</tyh-tag>
  <highlightjs autodetect :code="tag2" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />
</template>

<script>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
export default {
  components: {
    ConfigTable
  },
  setup () {
    const { tag1, tag2 } = index.tag
    const configures = [
      { param: 'color', explain: '标签的颜色类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
      { param: 'size', explain: '标签的尺寸', type: 'string', value: ' — / small / mini', default: '最大尺寸' }
    ]
    return { tag1, tag2, configures }
  }
}
</script>

<style scoped>
.tyh-tag {
  margin-right: 13px;
}
</style>
