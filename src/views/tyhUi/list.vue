<template>
  <h1 class="title">List 列表</h1>
  <h3 class="Subtitle">基本使用</h3>

  <p>基本使用</p>
  <p>content 属性可以绑定需要展示的数组元素</p>
  <p>iskey 属性可以绑定数组中每个元素的键值</p>
  <tyh-list :content="arr" iskey="name" />
  <highlightjs autodetect :code="lis1" />

  <p>有表头和页脚的列表</p>
  <p>header 表头内容</p>
  <p>footer 页脚内容</p>
  <tyh-list :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
  <highlightjs autodetect :code="lis2" />

  <p>有斑马纹和序号</p>
  <p>zebra 是否显示斑马纹</p>
  <p>num 是否显示序号</p>
  <tyh-list
    zebra
    num
    :content="arr"
    iskey="name"
    header="这是头部"
    footer="这是页脚"
  />
  <highlightjs autodetect :code="lis3" />
</template>

<script>
import index from './index'
export default {
  name: '',
  setup () {
    const arr = [
      { name: '小明1', age: 11 },
      { name: '小明2', age: 12 },
      { name: '小明3', age: 13 },
      { name: '小明4', age: 14 },
      { name: '小明5', age: 15 },
      { name: '小明6', age: 16 },
      { name: '小明7', age: 17 },
      { name: '小明8', age: 18 }
    ]
    const { lis1, lis2, lis3 } = index.list
    return { arr, lis1, lis2, lis3 }
  }
}
</script>
