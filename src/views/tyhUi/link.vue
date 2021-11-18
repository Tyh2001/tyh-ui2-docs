<template>
  <h1 class="title">Link 链接</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>链接的基本使用</p>
  <tyh-link url="">链接一</tyh-link>
  <tyh-link url="" type="primary">链接二</tyh-link>
  <tyh-link url="" type="success">链接三</tyh-link>
  <tyh-link url="" type="danger">链接四</tyh-link>
  <tyh-link url="" type="warning">链接五</tyh-link>
  <highlightjs autodetect :code="lin1" />

  <h3 class="Subtitle">带有下划线</h3>
  <p>underline 属性可以配置带有下划线</p>
  <tyh-link underline>链接一</tyh-link>
  <tyh-link underline type="primary">链接二</tyh-link>
  <tyh-link underline type="success">链接三</tyh-link>
  <tyh-link underline type="danger">链接四</tyh-link>
  <tyh-link underline type="warning">链接五</tyh-link>
  <highlightjs autodetect :code="lin2" />

  <h3 class="Subtitle">hover 下划线</h3>
  <p>hoverline 属性可以配置鼠标移入带有下划线</p>
  <tyh-link hoverline>链接一</tyh-link>
  <tyh-link hoverline type="primary">链接二</tyh-link>
  <tyh-link hoverline type="success">链接三</tyh-link>
  <tyh-link hoverline type="danger">链接四</tyh-link>
  <tyh-link hoverline type="warning">链接五</tyh-link>
  <highlightjs autodetect :code="lin3" />

  <h3 class="Subtitle">禁用链接</h3>
  <p>prohibit 属性可以禁用链接标签</p>
  <tyh-link url="" prohibit>禁用链接一</tyh-link>
  <tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
  <tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
  <tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
  <tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
  <highlightjs autodetect :code="lin4" />

  <h3 class="Subtitle">带有 Icon</h3>
  <p>iconClass 属性可以配置 icon</p>
  <tyh-link url="" iconClass="tyh-ui-type-01">链接一</tyh-link>
  <tyh-link url="" iconClass="tyh-ui-series-01" type="primary">
    链接二
  </tyh-link>
  <tyh-link url="" iconClass="tyh-ui-wenjian-01" type="success">
    链接三
  </tyh-link>
  <tyh-link url="" iconClass="tyh-ui-xingxing-01" type="danger">
    链接四
  </tyh-link>
  <tyh-link url="" iconClass="tyh-ui-aixin-01" type="warning">
    链接五
  </tyh-link>
  <highlightjs autodetect :code="lin5" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/tag">
      Tag 标签
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/input">
      Input 输入框
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
const { lin1, lin2, lin3, lin4, lin5 } = index.link
const configures = [
  { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
  { param: 'type', explain: '链接的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
  { param: 'underline', explain: '下划线', type: 'boolean', value: '——', default: 'fasle' },
  { param: 'hoverline', explain: '鼠标移入下划线', type: 'boolean', value: '——', default: 'fasle' },
  { param: 'target', explain: '以新的窗口打开', type: 'string', value: '同原生 target 属性 _blank', default: '——' },
  { param: 'iconClass', explain: 'icon', type: 'string', value: '——', default: '——' },
  { param: 'prohibit', explain: '禁用状态', type: 'boolean', value: '——', default: 'false' },
]
</script>

<style scoped>
.tyh-link {
  margin-right: 13px;
}
</style>
