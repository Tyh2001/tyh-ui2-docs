<template>
  <div id="conponentIndex">
    <!-- 左侧列表 -->
    <div class="contentList">
      <ul ref="ulList">
        <li v-for="(item, index) in listPush" :key="index">
          <router-link :to="item.url" :style="highLightStyle(item)">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: '',
  setup () {
    const listPush = [
      { name: '快速上手', url: '/component/install' },
      { name: 'Button 按钮', url: '/component/button' },
      { name: 'List 列表', url: '/component/list' },
      { name: 'Card 卡片', url: '/component/card' },
      { name: 'Tag 标签', url: '/component/tag' },
      { name: 'Link 链接', url: '/component/link' },
      { name: 'Input 输入框', url: '/component/input' },
      { name: 'Menu 导航栏', url: '/component/menu' },
      { name: 'Division 分割线', url: '/component/division' },
      { name: 'Icon 图标', url: '/component/icon' },
      { name: 'Crumbs 面包屑', url: '/component/crumbs' }
    ]

    // 高亮显示
    const route = useRoute()
    function highLightStyle (item) {
      if (item.url === route.path) {
        return { color: '#409eff' }
      }
    }
    return {
      listPush,
      highLightStyle
    }
  }
}
</script>

<style lang='less' scoped>
#conponentIndex {
  display: flex;
  width: 1100px;
  margin: auto;
  position: relative;
  // 列表
  .contentList {
    width: 200px;
    border-right: 1px solid #eee;
    overflow: auto;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    top: 60px;
    padding-top: 60px;
    bottom: 0px;
    z-index: 100;
    user-select: none;
    ul {
      padding-bottom: 150px;
      li {
        list-style: none;
        line-height: 40px;
        a {
          padding-left: 20px;
          width: 100%;
          display: inline-block;
          text-decoration: none;
          color: #333;
          font-size: 14px;
          &:hover {
            background: rgb(247, 247, 247);
          }
        }
      }
    }
  }
  // 内容
  .content {
    padding: 24px;
    box-sizing: border-box;
    width: 900px;
    position: absolute;
    right: 0px;
    z-index: 50;
  }
}
</style>
