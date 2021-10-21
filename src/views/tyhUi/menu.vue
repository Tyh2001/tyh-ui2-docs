<template>
  <h1 class="title">Menu 导航栏</h1>
  <h3 class="Subtitle">基本使用</h3>

  <p>基本使用</p>
  <tyh-menu>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men1" />

  <p>配置颜色</p>
  <p>通过 backgroundColor 属性可以配置导航栏背景色</p>
  <p>通过 color 属性可以配置子菜单颜色</p>
  <tyh-menu backgroundColor="#eee">
    <tyh-menu-item color="#000">首页</tyh-menu-item>
    <tyh-menu-item color="#000">内容</tyh-menu-item>
    <tyh-menu-item color="#000">设置</tyh-menu-item>
    <tyh-menu-item color="#000">回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men2" />

  <p>禁用状态</p>
  <p>通过 prohibit 属性可以配置子组件链接是否禁用</p>
  <tyh-menu>
    <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
    <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men3" />

  <p>带有 icon 的</p>
  <tyh-menu>
    <tyh-menu-item url="/home">
      <tyh-icon icon="tyh-ui-home-01" color="#fff" />
      首页
    </tyh-menu-item>
    <tyh-menu-item url="/abc">
      <tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" />
      内容
    </tyh-menu-item>
    <tyh-menu-item url="">
      <tyh-icon icon="tyh-ui-setting-01" color="#fff" />
      设置
    </tyh-menu-item>
    <tyh-menu-item url="">
      <tyh-icon icon="tyh-ui-trash-01" color="#fff" />
      回收站
    </tyh-menu-item>
  </tyh-menu>
  <highlightjs autodetect :code="men4" />
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const { men1, men2, men3, men4 } = index.menu
    return { men1, men2, men3, men4 }
  }
}
</script>
