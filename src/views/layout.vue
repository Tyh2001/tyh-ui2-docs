<template>
  <tyh-menu background="#f8faff" shadow>
    <div class="logoLink" url="/" @click="$router.push('/')">
      <img
        draggable="false"
        class="logo"
        src="./images/tyh-ui2-logo.svg"
        alt="logo"
      />
      <span class="name">Tyh UI</span>
    </div>
    <tyh-icon icon="tyh-ui-menu" @click="drawer = true" />

    <div class="card">
      <tyh-menu-item
        v-for="(list, index) in layoutList"
        :color="highLightStyle(list.url)"
        :key="index"
        :url="list.url"
      >
        {{ list.title }}
      </tyh-menu-item>
    </div>
  </tyh-menu>

  <div id="content">
    <router-view />
  </div>

  <el-drawer v-model="drawer" size="200px" direction="ltr">
    <Sidebar phone />
  </el-drawer>
</template>

<script setup>
import { ElDrawer } from 'element-plus'
import Sidebar from '@/components/Sidebar.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const layoutList = [
  { title: '首页', url: '/' },
  { title: '组件', url: '/component' },
  { title: '关于', url: '/about' },
]
// 导航栏高亮显示
const route = useRoute()
function highLightStyle (url) {
  const path = route.path
  if (path === '/') return url === path ? '#3a6ff4' : '#000'
  const res = path.match(/\/[a-zA-Z]+/gi)[0]
  return url === res ? '#3a6ff4' : '#000'
}
const drawer = ref(false)
watch(() => route.path, () => {
  drawer.value = false
})
</script>

<style lang='less' scoped>
.tyh-menu {
  justify-content: space-between;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 200;
  .logoLink {
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
#content {
  margin-top: 120px;
}
.showSidebar {
  position: fixed;
  width: 200px;
  top: 60px;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
// 手机端
@media screen and (max-width: 700px) {
  .tyh-menu {
    width: 100vw;
  }
  .card {
    display: none;
  }
  .tyh-ui-menu {
    display: block;
  }
  .showSidebar {
    display: v-bind(showSidebar);
  }
}
@media screen and (min-width: 700px) {
  .tyh-ui-menu {
    display: none;
  }
  .showSidebar {
    display: none;
  }
}
</style>

<style>
.el-drawer {
  overflow-y: auto;
}
</style>
