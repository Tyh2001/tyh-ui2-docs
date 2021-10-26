<template>
  <h1 class="title">Division 分割线</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>分割线的基本使用</p>
  <tyh-division>这是分割线</tyh-division>
  <highlightjs autodetect :code="div1" />

  <h3 class="Subtitle">文字位置</h3>
  <p>position 属性可以配置文字的位置</p>
  <tyh-division position="left">这是左边文字</tyh-division>
  <tyh-division position="center">这是中间文字</tyh-division>
  <tyh-division position="right">这是右边文字</tyh-division>
  <highlightjs autodetect :code="div2" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/menu">
      Menu 导航栏
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/icon">
      Icon 图标
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
    const configures = [
      { param: 'position', explain: '文字位置', type: 'string', value: 'left / center / right', default: 'left' }
    ]
    const { div1, div2 } = index.division
    return { div1, div2, configures }
  }
}
</script>
