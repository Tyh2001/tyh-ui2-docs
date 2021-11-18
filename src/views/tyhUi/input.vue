<template>
  <h1 class="title">Input 输入框</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>输入框的基本用法</p>
  <tyh-input v-model="text1" />
  <highlightjs autodetect :code="inp1" />

  <h3 class="Subtitle">输入框类型</h3>
  <p>inpType 属性可以规定文本框类型</p>
  <tyh-input inpType="text" v-model="text2" /><br />
  <tyh-input class="size-input" inpType="password" v-model="text3" />
  <highlightjs autodetect :code="inp2" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>size 属性可以配置文本框尺寸</p>
  <tyh-input size="big" v-model="text4" /><br />
  <tyh-input class="size-input" size="medium" v-model="text5" /><br />
  <tyh-input class="size-input" size="small" v-model="text6" /><br />
  <tyh-input class="size-input" size="mini" v-model="text7" /><br />
  <highlightjs autodetect :code="inp3" />

  <h3 class="Subtitle">可清空</h3>
  <p>clear 属性可以配置带有清空按钮的文本框</p>
  <tyh-input v-model="text8" clear />
  <highlightjs autodetect :code="inp4" />

  <h3 class="Subtitle">带有 icon</h3>
  <p>showIcon 属性可以配置文本框带有其他图标，直接传递 icon 的名字传递即可</p>
  <tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" />
  <highlightjs autodetect :code="inp5" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>prohibit 属性可以配置文本框禁用状态</p>
  <tyh-input v-model="text10" prohibit />
  <highlightjs autodetect :code="inp6" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/link">
      Link 链接
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/menu">
      Menu 导航栏
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { ref } from 'vue'
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
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
const configures = [
  { param: 'v-model', explain: '绑定值', type: 'string / number', value: '——', default: '——' },
  { param: 'inpType', explain: '类型', type: 'string', value: 'text / password / success / danger / warning', default: 'text' },
  { param: 'innerText', explain: '输入框占位文本', type: 'string', value: '——', default: '——' },
  { param: 'size', explain: '文本框尺寸', type: 'string', value: 'big / medium / small / mini', default: 'medium' },
  { param: 'max', explain: '最大输入上限', type: 'string', value: '——', default: '——' },
  { param: 'clear', explain: '是否可以清空文本框', type: 'boolean', value: '——', default: 'fasle' },
  { param: 'showIcon', explain: '左侧显示的图标', type: 'string', value: '——', default: '——' },
  { param: 'prohibit', explain: '是否禁用', type: 'boolean', value: '——', default: 'fasle' },
  { param: 'autofocus', explain: '是否自动获取焦点', type: 'boolean', value: '——', default: 'fasle' },
  { param: 'name', explain: '原生 name 属性', type: 'string', value: '——', default: '——' }
]
</script>

<style scoped>
.tyh-input {
  width: 200px;
}
.size-input {
  margin-top: 8px;
}
</style>
