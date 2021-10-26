<template>
  <h1 class="title">Icon 图标</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>icon 的基本使用</p>
  <p>通过 icon 属性来给 icon 添加类名，来显示不同的图标</p>
  <tyh-icon icon="tyh-ui-tyhui" />
  <tyh-icon icon="tyh-ui-huojian-01" />
  <tyh-icon icon="tyh-ui-PaperPlane-01" />
  <highlightjs autodetect :code="icon1" />

  <h3 class="Subtitle">配置颜色</h3>
  <p>color 属性改变 icon 的颜色</p>
  <tyh-icon color="skyblue" icon="tyh-ui-tyhui" />
  <tyh-icon color="orange" icon="tyh-ui-huojian-01" />
  <tyh-icon color="pink" icon="tyh-ui-PaperPlane-01" />
  <highlightjs autodetect :code="icon2" />

  <h3 class="Subtitle">配置大小</h3>
  <p>size 属性可以改变 icon 的大小</p>
  <p>这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位</p>
  <tyh-icon size="50" icon="tyh-ui-tyhui" />
  <tyh-icon size="40" icon="tyh-ui-huojian-01" />
  <tyh-icon size="30" icon="tyh-ui-PaperPlane-01" />
  <highlightjs autodetect :code="icon3" />

  <h3 class="Subtitle">配置项</h3>
  <ConfigTable :configures="configures" />

  <h3 class="Subtitle">Icon 集合</h3>
  <p>点击即可复制代码</p>
  <div id="allIcon">
    <ul class="allIcon-ui">
      <li
        class="allIcon-li"
        v-for="(icon, index) in iconList"
        :key="index"
        :data-clipboard-text="icon"
        @click="copy"
      >
        <tyh-icon size="34" :icon="icon" />
        <p class="iconTitle">{{ icon }}</p>
      </li>
    </ul>
  </div>

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/division">
      Division 分割线
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/crumbs">
      Crumbs 面包屑
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script>
import index from './index'
import ConfigTable from '@/components/ConfigTable.vue'
import Clipboard from 'clipboard'
export default {
  components: {
    ConfigTable
  },
  setup () {
    const { icon1, icon2, icon3 } = index.icon
    const iconList = [
      'tyh-ui-tyhui',
      'tyh-ui-huojian-01',
      'tyh-ui-home-01',
      'tyh-ui-right-01',
      'tyh-ui-top-01',
      'tyh-ui-bottom-01',
      'tyh-ui-left-01',
      'tyh-ui-close-01',
      'tyh-ui-add-01',
      'tyh-ui-sub-01',
      'tyh-ui-top-02',
      'tyh-ui-bottom-02',
      'tyh-ui-left-02',
      'tyh-ui-right-02',
      'tyh-ui-setting-01',
      'tyh-ui-phone-01',
      'tyh-ui-PaperPlane-01',
      'tyh-ui-trash-01',
      'tyh-ui-primary-01',
      'tyh-ui-success-01',
      'tyh-ui-danger-01',
      'tyh-ui-warning-01',
      'tyh-ui-github',
      'tyh-ui-close-03',
      'tyh-ui-color-01',
      'tyh-ui-channel-01',
      'tyh-ui-type-01',
      'tyh-ui-series-01',
      'tyh-ui-shangchuan-01',
      'tyh-ui-wenjian-01',
      'tyh-ui-wenjian-02',
      'tyh-ui-shouji-01',
      'tyh-ui-dianhua-01',
      'tyh-ui-xiazai-01',
      'tyh-ui-shop-01',
      'tyh-ui-yonghu-01',
      'tyh-ui-xiexian-01',
      'tyh-ui-nan-01',
      'tyh-ui-nv-01',
      'tyh-ui-suotou-01',
      'tyh-ui-diannao-01',
      'tyh-ui-wifi-01',
      'tyh-ui-aixin-01',
      'tyh-ui-yueliang-01',
      'tyh-ui-xingxing-01',
      'tyh-ui-taiyang-01',
      'tyh-ui-dianzan-01',
      'tyh-ui-pinglun-01',
      'tyh-ui-biaoqing-01',
      'tyh-ui-jihao-01',
      'tyh-ui-zhaopian-01'
    ]
    const configures = [
      { param: 'icon', explain: 'icon 的类名', type: 'string', value: '——', default: '——' },
      { param: 'color', explain: 'icon 的颜色', type: 'string', value: '——', default: '#606266' },
      { param: 'size', explain: 'icon 的尺寸', type: 'string', value: '——', default: '——' }
    ]
    // 复制
    function copy () {
      const clipboard = new Clipboard('.allIcon-li')
      // 复制成功
      clipboard.on('success', e => {
        clipboard.destroy()
      })
    }
    return { icon1, icon2, icon3, iconList, configures, copy }
  }
}
</script>

<style lang='less' scoped>
#allIcon {
  width: 100%;
  .allIcon-ui {
    display: flex;
    flex-wrap: wrap;
    .allIcon-li {
      width: 140px;
      height: 120px;
      border: 1px solid #eee;
      list-style: none;
      cursor: pointer;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconTitle {
        margin-top: 10px;
        font-size: 12px;
        color: rgb(138, 138, 138);
      }
      &:hover {
        transition: background 0.3s;
        background: #eef5fd;
      }
    }
  }
}
</style>
