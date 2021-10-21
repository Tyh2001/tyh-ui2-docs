<template>
  <h1>Link 链接</h1>
  <h2>基本使用</h2>

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
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const { lin1, lin2, lin3 } = index.link
    return { lin1, lin2, lin3 }
  }
}
</script>

<style scoped>
</style>
