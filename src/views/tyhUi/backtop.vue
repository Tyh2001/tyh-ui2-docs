<template>
  <h1 class="title">BackTop 回到顶部</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>回到顶部的基础用法</p>
  <tyh-back-top>Top</tyh-back-top>
  <highlightjs autodetect :code="back1" />

  <h3 class="Subtitle">位置偏移</h3>
  <p>bottom 和 right 属性可以配置距离右边和下边的距离</p>
  <tyh-backTop bottom="150" right="120">Go</tyh-backTop>
  <highlightjs autodetect :code="back2" />

  <h3 class="Subtitle">插入 Icon</h3>
  <tyh-backTop bottom="100">
    <tyh-icon icon="tyh-ui-top" color="#409eff" />
  </tyh-backTop>
  <highlightjs autodetect :code="back3" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/crumbs">
      Turnpage 分页
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/message">
      Message 提示框
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
export default {
  components: {
    ConfigTable
  },
  setup () {
    const { back1, back2, back3 } = index.back
    const configures = [
      { param: 'bottom', explain: '距离下面的距离', type: 'string', value: '——', default: '50' },
      { param: 'right', explain: '距离右面的距离', type: 'string', value: '——', default: '50' }
    ]

    return { back1, back2, back3, configures }
  }
}
</script>
