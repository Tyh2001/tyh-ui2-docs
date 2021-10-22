<template>
  <h1 class="title">Link 链接</h1>
  <h3 class="Subtitle">基本使用</h3>

  <p>基本使用</p>
  <tyh-link url="">链接一</tyh-link>
  <tyh-link url="" color="primary">链接二</tyh-link>
  <tyh-link url="" color="success">链接三</tyh-link>
  <tyh-link url="" color="danger">链接四</tyh-link>
  <tyh-link url="" color="warning">链接五</tyh-link>
  <highlightjs autodetect :code="lin1" />

  <p>带有下划线</p>
  <p>underline 属性可以配置带有下划线</p>
  <tyh-link underline>链接一</tyh-link>
  <tyh-link underline color="primary">链接二</tyh-link>
  <tyh-link underline color="success">链接三</tyh-link>
  <tyh-link underline color="danger">链接四</tyh-link>
  <tyh-link underline color="warning">链接五</tyh-link>
  <highlightjs autodetect :code="lin2" />

  <p>鼠标移入带有下划线</p>
  <p>hoverline 属性可以配置鼠标移入带有下划线</p>
  <tyh-link hoverline>链接一</tyh-link>
  <tyh-link hoverline color="primary">链接二</tyh-link>
  <tyh-link hoverline color="success">链接三</tyh-link>
  <tyh-link hoverline color="danger">链接四</tyh-link>
  <tyh-link hoverline color="warning">链接五</tyh-link>
  <highlightjs autodetect :code="lin3" />

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
    const { lin1, lin2, lin3 } = index.link
    const configures = [
      { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
      { param: 'color', explain: '链接的字体颜色', type: 'string', value: 'primary / success / danger / warning', default: '——' },
      { param: 'underline', explain: '下划线', type: 'boolean', value: '——', default: 'fasle' },
      { param: 'hoverline', explain: '鼠标移入下划线', type: 'boolean', value: '——', default: 'fasle' },
      { param: 'target', explain: '以新的窗口打开', type: 'string', value: '同原生 target 属性 _blank', default: '——' }
    ]
    return { lin1, lin2, lin3, configures }
  }
}
</script>

<style scoped>
.tyh-link {
  margin-left: 10px;
}
</style>
