<template>
  <h1 class="title">Skeleton 骨架</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>骨架的基本使用</p>
  <tyh-skeleton />
  <tyh-skeleton />
  <tyh-skeleton />
  <highlightjs autodetect :code="ske1" />

  <h3 class="Subtitle">圆角的</h3>
  <p>round 属性可以配置圆角</p>
  <tyh-skeleton round />
  <tyh-skeleton round />
  <tyh-skeleton round />
  <highlightjs autodetect :code="ske2" />

  <h3 class="Subtitle">自定义宽高</h3>
  <p>width 属性可以配置宽度</p>
  <p>height 属性可以配置高度</p>
  <tyh-skeleton width="75%" />
  <br />
  <tyh-skeleton width="150px" />
  <br />
  <tyh-skeleton width="100px" height="100px" />
  <highlightjs autodetect :code="ske3" />

  <h3 class="Subtitle">启用动画</h3>
  <p>animation 属性可以配置显示动画</p>
  <tyh-skeleton animation />
  <tyh-skeleton animation />
  <tyh-skeleton animation />
  <highlightjs autodetect :code="ske4" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/message">
      Message 提示框
    </tyh-turn-page-item>
    <!-- <tyh-turn-page-item direction="right" url="/component/skeleton">
      Skeleton 骨架
    </tyh-turn-page-item> -->
  </tyh-turn-page>
</template>

<script>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
export default {
  components: {
    ConfigTable
  },
  setup () {
    const { ske1, ske2, ske3, ske4 } = index.skeleton
    const configures = [
      { param: 'round', explain: '圆角', type: 'boolean', value: '——', default: 'false' },
      { param: 'width', explain: '宽度', type: 'string', value: '——', default: '100%' },
      { param: 'height', explain: '高度', type: 'string', value: '——', default: '15px' },
      { param: 'animation', explain: '是否启用动画', type: 'boolean', value: '——', default: 'false' }
    ]
    return { ske1, ske2, ske3, ske4, configures }
  }
}
</script>

<style scoped>
.tyh-skeleton {
  margin-top: 20px;
}
</style>
