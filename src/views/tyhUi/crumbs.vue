<template>
  <h1 class="title">Crumbs 面包屑</h1>
  <h3 class="Subtitle">基本使用</h3>

  <p>基本使用</p>
  <tyh-crumbs>
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item>学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
  <highlightjs autodetect :code="cru1" />

  <p>不同的分隔符</p>
  <p>通过给父组件separator 属性可以配置不同的分隔符，使用 icon 类名</p>
  <tyh-crumbs separator="tyh-ui-right-02">
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item>学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
  <highlightjs autodetect :code="cru2" />

  <p>跳转</p>
  <p>
    通过给子组件to
    属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示
  </p>
  <tyh-crumbs>
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
  <highlightjs autodetect :code="cru3" />

  <h3 class="Subtitle">tyh-Crumbs 组件</h3>
  <ConfiguresTable :configures="configures" />

  <h3 class="Subtitle">tyh-Crumbs-Item 子组件</h3>
  <ConfigTable :configures="configures2" />
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
      { param: 'separator', explain: '分隔符，icon 的类名', type: 'string', value: '——', default: 'tyh-ui-xiexian-01' }
    ]
    const configures2 = [
      { param: 'to', explain: '跳转的路径', type: 'string', value: '——', default: '——' }
    ]
    const { cru1, cru2, cru3 } = index.crumbs
    return { cru1, cru2, cru3, configures, configures2 }
  }
}
</script>
