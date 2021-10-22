<template>
  <h1 class="title">Button 按钮</h1>
  <h3 class="Subtitle">基本使用</h3>

  <p>基本使用</p>
  <tyh-button>默认按钮</tyh-button>
  <tyh-button type="primary">主要按钮</tyh-button>
  <tyh-button type="success">成功按钮</tyh-button>
  <tyh-button type="danger">危险按钮</tyh-button>
  <tyh-button type="warning">警告按钮</tyh-button>
  <highlightjs autodetect :code="btn1" />

  <p>朴素的按钮</p>
  <p>simple 属性可以配置朴素的按钮</p>
  <tyh-button simple type="primary">主要按钮</tyh-button>
  <tyh-button simple type="success">成功按钮</tyh-button>
  <tyh-button simple type="danger">危险按钮</tyh-button>
  <tyh-button simple type="warning">警告按钮</tyh-button>
  <highlightjs autodetect :code="btn2" />

  <p>图标按钮</p>
  <p>icon 属性可以配置图标按钮</p>
  <tyh-button icon="tyh-ui-setting-01" type="primary"></tyh-button>
  <tyh-button icon="tyh-ui-phone-01" type="success"></tyh-button>
  <tyh-button icon="tyh-ui-huojian-01" type="danger">火箭</tyh-button>
  <tyh-button icon="tyh-ui-PaperPlane-01" type="warning">飞机</tyh-button>
  <highlightjs autodetect :code="btn3" />

  <p>禁用状态</p>
  <p>prohibit 属性可以配置禁用状态</p>
  <tyh-button prohibit>默认按钮</tyh-button>
  <tyh-button prohibit type="primary">主要按钮</tyh-button>
  <tyh-button prohibit type="success">成功按钮</tyh-button>
  <tyh-button prohibit type="danger">危险按钮</tyh-button>
  <tyh-button prohibit type="warning">警告按钮</tyh-button>
  <highlightjs autodetect :code="btn4" />

  <p>圆角按钮</p>
  <p>round 属性可以配置圆角按钮</p>
  <tyh-button round>默认按钮</tyh-button>
  <tyh-button round type="primary">主要按钮</tyh-button>
  <tyh-button round type="success">成功按钮</tyh-button>
  <tyh-button round type="danger">危险按钮</tyh-button>
  <tyh-button round type="warning">警告按钮</tyh-button>
  <highlightjs autodetect :code="btn5" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />
</template>

<script>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
export default {
  components: {
    ConfigTable
  },
  setup () {
    const { btn1, btn2, btn3, btn4, btn5 } = index.button
    const configures = [
      { param: 'type', explain: '按钮的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
      { param: 'round', explain: '是否为圆角按钮', type: 'boolean', value: '——', default: 'false' },
      { param: 'prohibit', explain: '按钮是否禁用', type: 'boolean', value: '——', default: 'false' },
      { param: 'icon', explain: '按钮上的 icon', type: 'string', value: '——', default: '——' },
      { param: 'simple', explain: '是否为朴素按钮', type: 'boolean', value: '——', default: 'fasle' }
    ]
    return { btn1, btn2, btn3, btn4, btn5, configures }
  }
}
</script>

<style scoped>
.tyh-button {
  margin-left: 10px;
}
</style>
