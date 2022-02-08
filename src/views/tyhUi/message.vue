<template>
  <h1 class="title">Message 提示框</h1>
  <tyh-alert
    type="danger"
    message="该组件尚未完善！目前存在 Bug，正在修复中，谨慎使用！！！"
  />

  <h3 class="Subtitle">使用前</h3>
  <p>使用前，你必须先引入它</p>
  <highlightjs autodetect :code="mes4" />

  <h3 class="Subtitle">基本使用</h3>
  <p>提示框的基本使用</p>
  <p>通过引入 message 方法，接收一个对象，可以使用 message 定义内容</p>
  <p>type 属性可以定义提示框类型</p>
  <tyh-button @click="change1">默认提示</tyh-button>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
  <tyh-button type="success" @click="change3">成功提示</tyh-button>
  <tyh-button type="danger" @click="change4">危险提示</tyh-button>
  <tyh-button type="warning" @click="change5">警告提示</tyh-button>
  <highlightjs autodetect :code="mes1" />

  <h3 class="Subtitle">显示时长</h3>
  <p>time 属性可以配置提示框的显示时长，并在 xxxx 毫秒后消失</p>
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
  <highlightjs autodetect :code="mes2" />

  <h3 class="Subtitle">带有 icon</h3>
  <p>iconClass 属性可以配置 icon 的类名进行配置</p>
  <tyh-button type="primary" @click="change7">主要提示</tyh-button>
  <tyh-button type="success" @click="change8">成功提示</tyh-button>
  <tyh-button type="danger" @click="change9">危险提示</tyh-button>
  <tyh-button type="warning" @click="change10">警告提示</tyh-button>
  <highlightjs autodetect :code="mes3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/backtop">
      BackTop 回到顶部
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/skeleton">
      Skeleton 骨架
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import Message from 'tyh-ui2/packages/message'
import index from './index'
import table from './table'
const { columns } = table
const { mes1, mes2, mes3, mes4 } = index.msg
const configures = [
  { param: 'message', explain: '显示文字', type: 'string', value: '——', default: '——' },
  { param: 'type', explain: '提示框的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
  { param: 'time', explain: '展示的时间', type: 'number', value: '——', default: '2000' },
  { param: 'iconClass', explain: '展示的 icon', type: 'string', value: '——', default: '——' }
]

function change1 () {
  Message({ message: '默认提示' })
}
function change2 () {
  Message({ message: '主要提示', type: 'primary' })
}
function change3 () {
  Message({ message: '成功提示', type: 'success' })
}
function change4 () {
  Message({ message: '危险提示', type: 'danger' })
}
function change5 () {
  Message({ message: '警告提示', type: 'warning' })
}
function change6 () {
  Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
}
function change7 () {
  Message({ message: '主要提示', type: 'primary', iconClass: 'tyh-ui-smile' })
}
function change8 () {
  Message({ message: '成功提示', type: 'success', iconClass: 'tyh-ui-success-filling' })
}
function change9 () {
  Message({ message: '危险提示', type: 'danger', iconClass: 'tyh-ui-prompt' })
}
function change10 () {
  Message({ message: '警告提示', type: 'warning', iconClass: 'tyh-ui-warning-filling' })
}
</script>

<style scoped>
.tyh-button {
  margin-right: 13px;
  margin-bottom: 13px;
}
</style>
