<template>
  <tyh-menu theme="light">
    <template v-slot:left>
      <div class="logoLink" url="/" @click="$router.push('/')">
        <img draggable="false" class="logo" src="./images/tyh-ui2-logo.svg" />
        <span class="name">Tyh UI</span>
      </div>
    </template>
    <tyh-menu-item to="/">首页</tyh-menu-item>
    <tyh-menu-item to="/component">组件</tyh-menu-item>
    <tyh-menu-item to="/about">关于</tyh-menu-item>
  </tyh-menu>

  <div id="content">
    <router-view />
  </div>

  <el-drawer v-model:visible="drawer" direction="rtl">
    <Sidebar phone />
  </el-drawer>
</template>

<script setup>
import { ElDrawer } from 'element3'
import Sidebar from '@/components/Sidebar.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const { layoutList, highLightStyle, drawer } = layoutOptions()
function layoutOptions () {
  const layoutList = [
    { title: '首页', url: '/' },
    { title: '组件', url: '/component' },
    { title: '关于', url: '/about' },
  ]
  const route = useRoute()
  const highLightStyle = url => {
    const path = route.path
    if (path === '/') return url === path ? '#3a6ff4' : '#000'
    const res = path.match(/\/[a-zA-Z]+/gi)[0]
    return url === res ? '#3a6ff4' : '#000'
  }
  const drawer = ref(false)
  watch(() => route.path, () => {
    drawer.value = false
  })
  return { layoutList, highLightStyle, drawer }
}
</script>

<style scoped>
.tyh-menu {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 200;
  display: flex;
}
.tyh-menu .logoLink {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
}
.tyh-menu .logoLink .logo {
  height: 36px;
}
.tyh-menu .logoLink .name {
  font-size: 20px;
  color: #6c63ff;
  font-weight: 600;
  margin-left: 10px;
}
/* .tyh-menu .card {
  margin-right: 30px;
} */
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
  overflow-y: auto !important;
  width: 200px !important;
}
</style>

<style src="element3/lib/theme-chalk/drawer.css"></style>
