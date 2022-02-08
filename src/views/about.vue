<template>
  <div id="about">
    <div class="logoBox">
      <img
        draggable="false"
        class="logo"
        src="./images/tyh-ui2-logo.svg"
        alt="logo"
      />
    </div>
    <h3 class="about_title">关于 tyh-ui2</h3>
    <p>tyh-ui 的下一代 ui 组件库，基于 vue3.0 版本，全面拥抱 vue3.0。</p>
    <h3 class="about_title">开发靠个人</h3>
    <tyh-text>
      tyh-ui 是由
      <tyh-link target="_blank" url="https://github.com/Tyh2001" type="primary">
        tyh2001
      </tyh-link>
      独立开发的一款基于 Vue 3.0 的桌面端轻量级 UI 组件库。
    </tyh-text>
    <h3 class="about_title">简洁至上</h3>
    <tyh-text>
      tyh-ui
      整体非常简洁明了，虽没有很多高级的组件，但它是使用最简单的方式达到实用的效果。
    </tyh-text>
    <h3 class="about_title">轻量容易</h3>
    <tyh-text>
      使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
    </tyh-text>

    <h3 class="about_title">赞助我</h3>
    <tyh-text>开发不易，欢迎大家赞助！</tyh-text>
    <div id="sponsor">
      <img draggable="false" src="./images/weixin.jpg" alt="微信二维码" />
      <img draggable="false" src="./images/zhifubao.jpg" alt="支付宝二维码" />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
#about {
  max-width: 800px;
  margin: auto;
  padding: 22px;
  box-sizing: border-box;
  padding-bottom: 99px;
}
#about .logoBox {
  width: 220px;
  height: 300px;
  margin: auto;
  user-select: none;
}
#about .logoBox .logo {
  width: 220px;
}
#about .about_title {
  margin: 40px 0 20px 0;
  font-weight: 600;
  color: #515a6e;
}
#about #sponsor {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#about #sponsor img {
  max-width: 280px;
  user-select: none;
}
@media screen and (max-width: 700px) {
  #about #sponsor {
    flex-wrap: wrap;
  }
}
</style>
