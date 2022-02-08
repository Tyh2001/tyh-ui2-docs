<template>
  <div id="home">
    <img
      draggable="false"
      class="logo"
      src="./images/tyh-ui2-logo.svg"
      alt="logo"
    />
    <h1 class="MainTitle">
      Tyh UI
      <span class="version">v&nbsp;{{ tyhUi2.version }}</span>
    </h1>
    <p class="Subtitle">一个轻量级组件库，基于 vue3.0 版本，全面拥抱 vue3.0</p>

    <div class="btnBox">
      <tyh-button type="primary" round @click="$router.push('/component')">
        快速开始
      </tyh-button>

      <a target="_back" href="https://github.com/Tyh2001/tyh-ui2">
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

<script setup>
import tyhUi2 from 'tyh-ui2'
import Footer from '@/components/Footer.vue'
</script>

<style lang='less' scoped>
#home {
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
    align-items: center;
    position: relative;
    .version {
      text-align: center;
      position: absolute;
      font-size: 18px;
      display: inline-block;
      background: #3a6ff4;
      color: #fff;
      border-radius: 10px;
      padding: 3px 10px;
      left: 140px;
      top: 0px;
    }
  }
  // 副标题
  .Subtitle {
    text-align: center;
    color: #515a6e;
    margin-top: 20px;
    font-size: 22px;
    padding: 0 19px;
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
      .tyh-ui-github {
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
@media screen and (max-width: 700px) {
  #home {
    width: 100%;
    display: flex;
    .logo {
      width: 150px;
      height: 150px;
    }
    .summary {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .btnBox {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
