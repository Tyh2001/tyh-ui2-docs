<template>
  <tyh-menu backgroundColor="#f8faff" buttomShadow>
    <div class="logolink" url="/" @click="$router.push('/')">
      <img draggable="false" class="logo" src="./images/logo.png" alt="logo" />
      <span class="name">Tyh UI</span>
    </div>

    <!-- 导航栏选项 -->
    <div class="card">
      <tyh-menu-item
        v-for="(list, index) in layoutList"
        :color="highLightStyle(list.url)"
        :key="index"
        :url="list.url"
      >
        {{ list.title }}
      </tyh-menu-item>
      <tyh-link
        target="_blank"
        href="https://github.com/Tyh2001/tyh-ui2/blob/master/CHANGELOG.md"
      >
        <tyh-menu-item color="#000">更新日志</tyh-menu-item>
      </tyh-link>
      <tyh-link target="_blank" url="https://tianyuhao.icu/tyhui">
        <tyh-menu-item color="#000">v2</tyh-menu-item>
      </tyh-link>
    </div>
  </tyh-menu>

  <div id="content">
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const layoutList = [
  { title: '首页', url: '/' },
  { title: '组件', url: '/component' }
]

// 导航栏高亮显示
const route = useRoute()
function highLightStyle (url) {
  const path = route.path
  if (path === '/') return url === path ? '#3a6ff4' : '#000'
  const res = path.match(/\/[a-zA-Z]+/gi)[0]
  return url === res ? '#3a6ff4' : '#000'
}
</script>

<style lang='less' scoped>
.tyh-menu {
  justify-content: space-between;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 800;
  .logolink {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;
    .logo {
      height: 36px;
    }
    .name {
      font-size: 20px;
      color: #6c63ff;
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .card {
    margin-right: 30px;
  }
}
// 内容出口
#content {
  margin-top: 120px;
}
@media screen and (max-width: 700px) {
  .tyh-menu {
    width: 100vw;
  }
  .logolink {
    .logo {
      width: 25px;
      height: 25px !important;
    }
    .name {
      display: none;
    }
  }
  .tyh-menu-item-span {
    font-size: 12px !important;
  }
}
</style>

<style>
@media screen and (max-width: 700px) {
  .tyh-menu-item-span {
    font-size: 12px !important;
    padding: 0 12px;
    width: auto;
  }
  .card {
    margin-right: 0 !important;
  }
}
</style>

