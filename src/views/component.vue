<template>
  <div id="conponentIndex">
    <!-- 左侧列表 -->
    <div class="contentList">
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
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
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
    const router = useRouter()
    const route = useRoute()
    // 点击跳转
    function listPushClick (index) {
      router.push(listPush[index].url)
    }

    // 高亮显示
    function highLightStyle (index) {
      if (listPush[index].url === route.path) {
        return { color: '#409eff' }
      }
    }

    return {
      listPush,
      highLightStyle,
      listPushClick
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
