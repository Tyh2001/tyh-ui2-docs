<template>
  <div id="top-list">
    <img draggable="false" class="logo" src="./images/logo.png" alt="" />
    <h1 class="MainTitle">Tyh UI</h1>
    <p class="Subtitle">
      tyh-ui 的下一代 ui 组件库，基于 vue3.0 版本，全面拥抱 vue3.0
    </p>

    <div class="btnBox">
      <tyh-button type="primary" round @click="$router.push('/component')">
        快速开始
      </tyh-button>

      <a target="_back" href="https://github.com/Tyh2001/tyh-ui-next">
        <tyh-button round icon="tyh-ui-githublogo">Github</tyh-button>
      </a>
    </div>

    <!-- 概述 -->
    <div class="summary">
      <div class="summary-left">
        <h2 class="summary-title">
          <tyh-icon icon="tyh-ui-huojian-01" size="22" color="#67a1ff" />
          简洁至上
        </h2>
        <p class="summary-content">
          tyh-ui
          整体非常简洁明了，虽没有很多高级的组件，但它是使用最简单的方式达到实用的效果。
        </p>
      </div>
      <div class="summary-right">
        <h2 class="summary-title">
          <tyh-icon icon="tyh-ui-channel-01" size="22" color="#bd34fe" />
          轻量容易
        </h2>
        <p class="summary-content">
          使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
        </p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Footer
  }
}
</script>

<style lang='less' scoped>
#top-list {
  width: 800px;
  padding-bottom: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 220px;
    user-select: none;
  }
  // 主标题
  .MainTitle {
    text-align: center;
    color: #515a6e;
    margin-top: 20px;
    font-size: 40px;
  }
  // 副标题
  .Subtitle {
    text-align: center;
    color: #515a6e;
    margin-top: 20px;
    font-size: 22px;
  }
  // 开始按钮
  .btnBox {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tyh-button {
      width: 200px;
      height: 50px;
      margin: 20px;
      /deep/ .tyh-ui-github {
        color: #606266 !important;
      }
    }
  }
  // 概述
  .summary {
    width: 800px;
    border-top: 1px solid rgb(219, 219, 219);
    margin: auto;
    display: flex;
    margin-top: 50px;
    .summary-left,
    .summary-right {
      flex: 1;
      padding: 25px;
      box-sizing: border-box;
      .summary-title {
        line-height: 60px;
        color: #2d3035;
        font-weight: 500;
      }
      .summary-content {
        color: #515a6e;
        line-height: 25px;
      }
    }
  }
}
</style>
