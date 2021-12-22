<template>
  <h1 class="title">Menu 导航栏</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>导航栏的基本使用</p>
  <tyh-menu>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men1" />

  <h3 class="Subtitle">颜色配置</h3>
  <p>通过 background 属性可以配置导航栏背景色</p>
  <p>通过 color 属性可以配置子菜单颜色</p>
  <tyh-menu background="#eee">
    <tyh-menu-item color="#000">首页</tyh-menu-item>
    <tyh-menu-item color="#000">内容</tyh-menu-item>
    <tyh-menu-item color="#000">设置</tyh-menu-item>
    <tyh-menu-item color="#000">回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men2" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>通过 prohibit 属性可以配置子组件链接是否禁用</p>
  <tyh-menu>
    <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
    <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men3" />

  <h3 class="Subtitle">带有 icon</h3>
  <tyh-menu>
    <tyh-menu-item url="/home">
      <tyh-icon icon="tyh-ui-shouye-xianxing" color="#fff" />
      首页
    </tyh-menu-item>
    <tyh-menu-item url="/abc">
      <tyh-icon icon="tyh-ui-training" color="#fff" />
      内容
    </tyh-menu-item>
    <tyh-menu-item url="">
      <tyh-icon icon="tyh-ui-setting-filling" color="#fff" />
      设置
    </tyh-menu-item>
    <tyh-menu-item url="">
      <tyh-icon icon="tyh-ui-discount" color="#fff" />
      标签
    </tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men4" />

  <h3 class="Subtitle">tyh-menu 配置项</h3>
  <tyh-table zebra align="center" :data="configures" :columns="columns" />

  <h3 class="Subtitle">tyh-menu-item 配置项</h3>
  <tyh-table zebra align="center" :data="configures2" :columns="columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/input">
      Input 输入框
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/division">
      Division 分割线
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import index from './index'
import table from './table'
const { columns } = table
const { men1, men2, men3, men4 } = index.menu
const configures = [
  { param: 'background', explain: '导航栏背景色', type: 'string', value: '——', default: '——' },
  { param: 'shadow', explain: '底部是否显示阴影', type: 'boolean', value: '——', default: 'false' }
]
const configures2 = [
  { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
  { param: 'prohibit', explain: '是否禁用', type: 'boolean', value: '——', default: '——' },
  { param: 'color', explain: '文字颜色', type: 'string', value: '——', default: '#fff' }
]
</script>
