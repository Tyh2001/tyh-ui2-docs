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
  <highlightjs language="javascript" :code="menu.men1" />

  <h3 class="Subtitle">主题配置</h3>
  <p>通过 theme 属性可以配置主题</p>
  <tyh-menu theme="dark">
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <tyh-menu theme="light">
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs language="javascript" :code="menu.men2" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>通过 prohibit 属性可以配置子组件链接是否禁用</p>
  <tyh-menu>
    <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
    <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs language="javascript" :code="menu.men3" />

  <h3 class="Subtitle">不同排列状态</h3>
  <p>mode 属性可以配置不同的排列状态</p>
  <div style="display: flex">
    <tyh-menu theme="dark" mode="vertical" style="width: 200px">
      <tyh-menu-item>首页</tyh-menu-item>
      <tyh-menu-item>内容</tyh-menu-item>
      <tyh-menu-item>设置</tyh-menu-item>
      <tyh-menu-item>回收站</tyh-menu-item>
    </tyh-menu>

    <tyh-menu theme="light" mode="vertical" style="width: 200px">
      <tyh-menu-item>首页</tyh-menu-item>
      <tyh-menu-item>内容</tyh-menu-item>
      <tyh-menu-item>设置</tyh-menu-item>
      <tyh-menu-item>回收站</tyh-menu-item>
    </tyh-menu>
  </div>
  <highlightjs language="javascript" :code="menu.men4" />

  <h3 class="Subtitle">tyh-menu Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">tyh-menu-item Attributes</h3>
  <tyh-table align="center" :data="configures2" :columns="table.columns" />

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
import { menu } from './index'
import table from './table'
const configures = [
  { param: 'theme', explain: '主题颜色', type: 'string', value: 'dark / light', default: 'dark' },
  { param: 'shadow', explain: '底部是否显示阴影', type: 'boolean', value: '——', default: 'false' },
  { param: 'mode', explain: '排列方式', type: 'string', value: 'horizontal / vertical', default: 'horizontal' },
]
const configures2 = [
  { param: 'to', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
  { param: 'prohibit', explain: '是否禁用', type: 'boolean', value: '——', default: '——' }
]
</script>
