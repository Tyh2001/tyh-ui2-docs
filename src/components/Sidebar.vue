<template>
  <ul>
    <li v-for="(item, index) in listPush" :key="index">
      <p
        class="urlPush"
        :style="highLightStyle(index)"
        @click="listPushClick(index)"
      >
        {{ item.name }}
      </p>
    </li>
  </ul>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const listPush = [
  { name: '快速上手', url: '/component/install' },
  { name: 'Color 色彩', url: '/component/color' },
  { name: 'Container 布局容器', url: '/component/container' },
  { name: 'Button 按钮', url: '/component/button' },
  { name: 'List 列表', url: '/component/list' },
  { name: 'Card 卡片', url: '/component/card' },
  { name: 'Tag 标签', url: '/component/tag' },
  { name: 'Link 链接', url: '/component/link' },
  { name: 'Input 输入框', url: '/component/input' },
  { name: 'Menu 导航栏', url: '/component/menu' },
  { name: 'Division 分割线', url: '/component/division' },
  { name: 'Icon 图标', url: '/component/icon' },
  { name: 'Crumbs 面包屑', url: '/component/crumbs' },
  { name: 'TurnPage 翻页', url: '/component/turnpage' },
  { name: 'BackTop 回到顶部', url: '/component/backtop' },
  { name: 'Message 提示框', url: '/component/message' },
  { name: 'Skeleton 骨架', url: '/component/skeleton' },
  { name: 'Alert 提示', url: '/component/alert' },
  { name: 'Rate 评分', url: '/component/rate' },
  { name: 'Image 图片', url: '/component/image' },
  { name: 'Avatar 头像', url: '/component/avatar' },
]
const router = useRouter()
const route = useRoute()
// 点击跳转
function listPushClick (index) {
  router.push(listPush[index].url)
}
// 高亮显示
function highLightStyle (index) {
  if (listPush[index].url === route.path) {
    return { color: '#3a6ff4', borderLeft: '4px solid #3a6ff4' }
  }
}
</script>

<style lang='less' scoped>
ul {
  padding-bottom: 150px;
  li {
    list-style: none;
    line-height: 40px;
    .urlPush {
      padding-left: 20px;
      width: 100%;
      display: inline-block;
      text-decoration: none;
      color: #333;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background: rgb(247, 247, 247);
      }
    }
  }
}
</style>
