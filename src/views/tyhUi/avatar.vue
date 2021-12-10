<template>
  <h1 class="title">Avatar 头像</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>头像的基本使用</p>
  <p>src 属性可以添加图片路径</p>
  <p>size 可以配置头像大小</p>
  <tyh-avatar
    size="10"
    src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
  />
  <highlightjs autodetect :code="ava1" />

  <h3 class="Subtitle">配置圆角</h3>
  <p>round 属性配置头像的圆角</p>
  <tyh-avatar round src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg" />
  <highlightjs autodetect :code="ava2" />

  <h3 class="Subtitle">如何适应容器框</h3>
  <p>
    fit 属性配置图片如何适应到容器框，同原生
    <tyh-link
      url="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
      type="primary"
      target="_blank"
    >
      object-fit
    </tyh-link>
  </p>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-avatar
        round
        src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
  <highlightjs autodetect :code="ava3" />

  <h3 class="Subtitle">配置边框</h3>
  <p>border 属性配置头像的边框</p>
  <tyh-avatar border src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg" />
  <tyh-avatar
    border
    round
    src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
  />
  <highlightjs autodetect :code="ava4" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/image">
      Image 头像
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/text">
      Text 文字
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const { ava1, ava2, ava3, ava4 } = index.avatar
const configures = [
  { param: 'src', explain: '图片路径', type: 'string', value: '——', default: '——' },
  { param: 'size', explain: '图片大小', type: 'string / number', value: '——', default: '8(计算方式：(size*10)px)' },
  { param: 'round', explain: '圆角', type: 'boolean', value: '——', default: 'false' },
  { param: 'border', explain: '边框', type: 'boolean', value: '——', default: 'false' },
  { param: 'fit', explain: '确定图片如何适应容器框', type: 'string', value: '——', default: '——' },
  { param: 'alt', explain: '原生 alt 属性', type: 'string', value: '——', default: '——' },
  { param: 'select', explain: '是否可以选择', type: 'boolean', value: '——', default: 'false' },
  { param: 'draggable', explain: '是否可以拖动', type: 'boolean', value: '——', default: 'false' }
]
</script>

<style scoped>
.fitBox {
  display: flex;
}
.fitBox .item {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fitBox .item .text {
  color: #333333;
  margin-bottom: 20px;
}
</style>
