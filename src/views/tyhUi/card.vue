<template>
  <h1>Card 卡片</h1>
  <h2>基本使用</h2>

  <p>基本使用</p>
  <p>title 自定义卡片的主标题</p>
  <p>subtitle 自定义卡片的副标题</p>
  <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
  <highlightjs autodetect :code="car1" />

  <p>简约卡片</p>
  <p>simple 属性可以配置简约卡片</p>
  <tyh-card simple>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
  <highlightjs autodetect :code="car2" />

  <p>阴影显示时机</p>
  <p>shadow 属性可以配置阴影显示时机</p>
  <tyh-card shadow="always">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>总是显示阴影</p>
  </tyh-card>
  <tyh-card shadow="hover">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>鼠标移入显示</p>
  </tyh-card>
  <tyh-card shadow="noShadow">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>从不显示</p>
  </tyh-card>
  <highlightjs autodetect :code="car3" />
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const { car1, car2, car3 } = index.card
    return { car1, car2, car3 }
  }
}
</script>

<style scoped>
</style>
