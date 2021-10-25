<template>
  <h1 class="title">Tag 标签</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>标签的基本使用</p>
  <tyh-tag>标签一</tyh-tag>
  <tyh-tag color="primary">标签二</tyh-tag>
  <tyh-tag color="success">标签三</tyh-tag>
  <tyh-tag color="danger">标签四</tyh-tag>
  <tyh-tag color="warning">标签五</tyh-tag>
  <highlightjs autodetect :code="tag1" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>size 属性可以配置不同的尺寸</p>
  <tyh-tag color="primary">标签</tyh-tag>
  <tyh-tag size="small" color="primary">标签</tyh-tag>
  <tyh-tag size="mini" color="primary">标签</tyh-tag>
  <highlightjs autodetect :code="tag2" />

  <h3 class="Subtitle">圆角标签</h3>
  <p>round 属性可以配置圆角显示</p>
  <tyh-tag round>标签一</tyh-tag>
  <tyh-tag round color="primary">标签二</tyh-tag>
  <tyh-tag round color="success">标签三</tyh-tag>
  <tyh-tag round color="danger">标签四</tyh-tag>
  <tyh-tag round color="warning">标签五</tyh-tag>
  <highlightjs autodetect :code="tag3" />

  <h3 class="Subtitle">可关闭</h3>
  <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
  <tyh-tag v-show="show1" @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" color="primary" @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" color="success" @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" color="danger" @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" color="warning" @close="show5 = false">
    标签五
  </tyh-tag>
  <highlightjs autodetect :code="tag4" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />
</template>

<script>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
import { ref } from 'vue'
export default {
  components: {
    ConfigTable
  },
  setup () {
    const show1 = ref(true)
    const show2 = ref(true)
    const show3 = ref(true)
    const show4 = ref(true)
    const show5 = ref(true)
    const { tag1, tag2, tag3, tag4 } = index.tag
    const configures = [
      { param: 'color', explain: '标签的颜色类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
      { param: 'size', explain: '标签的尺寸', type: 'string', value: ' — / small / mini', default: '最大尺寸' },
      { param: 'round', explain: '配置圆角显示', type: 'Boolean', value: '', default: 'false' },
      { param: 'close', explain: '关闭 Tag 时触发的事件', type: '——', value: '——', default: '——' },
    ]
    return {
      show1,
      show2,
      show3,
      show4,
      show5,
      tag1,
      tag2,
      tag3,
      tag4,
      configures
    }
  }
}
</script>

<style scoped>
.tyh-tag {
  margin-right: 13px;
}
</style>
