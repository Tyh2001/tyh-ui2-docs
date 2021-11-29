<template>
  <h1 class="title">Rate 评分</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>评分的基本使用</p>
  <p>v-model 绑定评分值</p>
  <tyh-rate v-model="value1" />
  <highlightjs autodetect :code="rate1" />

  <h3 class="Subtitle">配置颜色</h3>
  <p>color 属性可以配置选中的 icon 颜色</p>
  <p>voidColor 属性可以配置未选中的 icon 颜色</p>
  <tyh-rate v-model="value2" />
  <tyh-rate v-model="value2" color="red" voidColor="#eee" />
  <highlightjs autodetect :code="rate2" />

  <h3 class="Subtitle">辅助文字</h3>
  <p>showText 属性可以配置是否显示辅助文字</p>
  <p>SayText 属性可以配置辅助文字数组</p>
  <tyh-rate v-model="value3" showText />
  <tyh-rate v-model="value3" showText :SayText="[1, 2, 3, 4, 5]" />
  <highlightjs autodetect :code="rate3" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <h3 class="Subtitle">事件</h3>
  <EventsTable :events="configEvt" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/alert">
      Alert 提示
    </tyh-turn-page-item>
    <!-- <tyh-turn-page-item direction="right" url="/component/skeleton">
      Skeleton 骨架
    </tyh-turn-page-item> -->
  </tyh-turn-page>
</template>

<script setup>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
import EventsTable from '@/components/EventsTable.vue'
import { ref } from 'vue'
const value1 = ref(null)
const value2 = ref(2)
const value3 = ref(2)
const { rate1, rate2, rate3 } = index.rate
const configures = [
  { param: 'v-model', explain: '绑定的值', type: 'number', value: '——', default: '——' },
  { param: 'color', explain: '选中的 icon 颜色', type: 'string', value: '', default: '#fbcc30' },
  { param: 'voidColor', explain: '未选中的 icon 颜色', type: 'string', value: '——', default: '#C6D1DE' },
  { param: 'showText', explain: '是否显示辅助文字', type: 'boolean', value: '——', default: 'false' },
  { param: 'SayText', explain: '自定义辅助文字数组', type: 'boolean', value: '——', default: "['极差', '失望', '一般', '惊喜', '满意']" }
]
const configEvt = [
  { name: 'change', explain: '分值改变时触发', param: '——' }
]
</script>
