<template>
  <h1>Input 输入框</h1>
  <h2>基本使用</h2>

  <p>基本使用</p>
  <tyh-input v-model="text1" />
  <highlightjs autodetect :code="inp1" />

  <p>密码框</p>
  <p>inpType 属性可以规定文本框类型</p>
  <tyh-input inpType="text" v-model="text2" />
  <tyh-input inpType="password" v-model="text3" />
  <highlightjs autodetect :code="inp2" />

  <p>不同尺寸</p>
  <p>size 属性可以配置文本框尺寸</p>
  <tyh-input size="big" v-model="text4" />
  <tyh-input size="medium" v-model="text5" />
  <tyh-input size="small" v-model="text6" />
  <tyh-input size="mini" v-model="text7" />
  <highlightjs autodetect :code="inp3" />

  <p>带有清空按钮</p>
  <p>clear 属性可以配置带有清空按钮的文本框</p>
  <tyh-input v-model="text8" clear />
  <highlightjs autodetect :code="inp4" />

  <p>其他图标</p>
  <p>showIcon 属性可以配置文本框带有其他图标，直接传递 icon 的名字传递即可</p>
  <tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" />
  <highlightjs autodetect :code="inp5" />

  <p>禁用状态</p>
  <p>prohibit 属性可以配置文本框禁用状态</p>
  <tyh-input v-model="text10" prohibit />
  <highlightjs autodetect :code="inp6" />
</template>

<script>
import { ref } from 'vue'
import index from './index'
export default {
  name: '',
  setup () {
    const text1 = ref('')
    const text2 = ref('')
    const text3 = ref('')
    const text4 = ref('')
    const text5 = ref('')
    const text6 = ref('')
    const text7 = ref('')
    const text8 = ref('')
    const text9 = ref('')
    const text10 = ref('')
    const { inp1, inp2, inp3, inp4, inp5, inp6 } = index.input
    return {
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      text10,
      inp1,
      inp2,
      inp3,
      inp4,
      inp5,
      inp6
    }
  }
}
</script>

<style scoped>
</style>
