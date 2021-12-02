const data = {
  // 安装
  install: {
    ins1: 'npm i tyh-ui2',
    ins2: `
import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from 'tyh-ui2'

createApp(App).use(tyhUi2).mount('#app')
    `,
  },
  // 按钮
  button: {
    btn1: `
<tyh-button>默认按钮</tyh-button>
<tyh-button type="primary">主要按钮</tyh-button>
<tyh-button type="success">成功按钮</tyh-button>
<tyh-button type="danger">危险按钮</tyh-button>
<tyh-button type="warning">警告按钮</tyh-button>
    `,
    btn2: `
<tyh-button simple type="primary">主要按钮</tyh-button>
<tyh-button simple type="success">成功按钮</tyh-button>
<tyh-button simple type="danger">危险按钮</tyh-button>
<tyh-button simple type="warning">警告按钮</tyh-button>
    `,
    btn3: `
<tyh-button icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
<tyh-button icon="tyh-ui-fabulous" type="success"></tyh-button>
<tyh-button icon="tyh-ui-discount" type="danger"></tyh-button>
<tyh-button icon="tyh-ui-chart-bar" type="warning"></tyh-button>
    `,
    btn4: `
<tyh-button prohibit>默认按钮</tyh-button>
<tyh-button prohibit type="primary">主要按钮</tyh-button>
<tyh-button prohibit type="success">成功按钮</tyh-button>
<tyh-button prohibit type="danger">危险按钮</tyh-button>
<tyh-button prohibit type="warning">警告按钮</tyh-button>
    `,
    btn5: `
<tyh-button round>默认按钮</tyh-button>
<tyh-button round type="primary">主要按钮</tyh-button>
<tyh-button round type="success">成功按钮</tyh-button>
<tyh-button round type="danger">危险按钮</tyh-button>
<tyh-button round type="warning">警告按钮</tyh-button>
    `,
    btn6: `
<tyh-button type="primary">正常大小</tyh-button>
<tyh-button size="small" type="primary">中等按钮</tyh-button>
<tyh-button size="mini" type="primary">小型按钮</tyh-button>
    `,
    btn7: `
<tyh-button big>默认按钮</tyh-button>
<tyh-button big type="primary">主要按钮</tyh-button>
<tyh-button big type="success">成功按钮</tyh-button>
<tyh-button big type="danger">危险按钮</tyh-button>
<tyh-button big type="warning">警告按钮</tyh-button>
    `
  },
  // 列表
  list: {
    lis1: `
<template>
  <tyh-list :content="arr" iskey="name" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
    `,
    lis2: `
<template>
  <tyh-list :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
    `,
    lis3: `
<template>
  <tyh-list zebra num :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
    `,
    lis4: `
<template>
  <tyh-list hoverShow :content="arr" iskey="name" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>  
    `
  },
  // 卡片
  card: {
    car1: `
<tyh-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>
    `,
    car2: `
<tyh-card simple>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>
    `,
    car3: `
<tyh-card shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</tyh-card>

<tyh-card shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</tyh-card>

<tyh-card shadow="noShadow">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</tyh-card>
    `
  },
  // 标签
  tag: {
    tag1: `
<tyh-tag>标签一</tyh-tag>
<tyh-tag color="primary">标签二</tyh-tag>
<tyh-tag color="success">标签三</tyh-tag>
<tyh-tag color="danger">标签四</tyh-tag>
<tyh-tag color="warning">标签五</tyh-tag>
    `,
    tag2: `
<tyh-tag color="primary">标签</tyh-tag>
<tyh-tag size="small" color="primary">标签</tyh-tag>
<tyh-tag size="mini" color="primary">标签</tyh-tag>
    `,
    tag3: `
<tyh-tag round>标签一</tyh-tag>
<tyh-tag round color="primary">标签二</tyh-tag>
<tyh-tag round color="success">标签三</tyh-tag>
<tyh-tag round color="danger">标签四</tyh-tag>
<tyh-tag round color="warning">标签五</tyh-tag>
    `,
    tag4: `
<template>
  <tyh-tag v-show="show1" isclose @onClose="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" color="primary" isclose @onClose="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" color="success" isclose @onClose="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" color="danger" isclose @onClose="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" color="warning" isclose @onClose="show5 = false">
    标签五
  </tyh-tag>
</template>

<script setup>
import { ref } from 'vue'
const show1 = ref(true)
const show2 = ref(true)
const show3 = ref(true)
const show4 = ref(true)
const show5 = ref(true)
</script>
    `
  },
  // 链接
  link: {
    lin1: `
<tyh-link url="">链接一</tyh-link>
<tyh-link url="" type="primary">链接二</tyh-link>
<tyh-link url="" type="success">链接三</tyh-link>
<tyh-link url="" type="danger">链接四</tyh-link>
<tyh-link url="" type="warning">链接五</tyh-link>
    `,
    lin2: `
<tyh-link underline>链接一</tyh-link>
<tyh-link underline type="primary">链接二</tyh-link>
<tyh-link underline type="success">链接三</tyh-link>
<tyh-link underline type="danger">链接四</tyh-link>
<tyh-link underline type="warning">链接五</tyh-link>
    `,
    lin3: `
<tyh-link hoverline>链接一</tyh-link>
<tyh-link hoverline type="primary">链接二</tyh-link>
<tyh-link hoverline type="success">链接三</tyh-link>
<tyh-link hoverline type="danger">链接四</tyh-link>
<tyh-link hoverline type="warning">链接五</tyh-link>
    `,
    lin4: `
<tyh-link url="" prohibit>禁用链接一</tyh-link>
<tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
<tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
<tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
<tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
    `,
    lin5: `
<tyh-link url="" iconClass="tyh-ui-type-01">链接一</tyh-link>
<tyh-link url="" iconClass="tyh-ui-series-01" type="primary">链接二</tyh-link>
<tyh-link url="" iconClass="tyh-ui-wenjian-01" type="success">链接三</tyh-link>
<tyh-link url="" iconClass="tyh-ui-xingxing-01" type="danger">链接四</tyh-link>
<tyh-link url="" iconClass="tyh-ui-aixin-01" type="warning">链接五</tyh-link>
    `
  },
  // 文本框
  input: {
    inp1: `
<template>
  <tyh-input v-model="text1" />
</template>

<script setup>
import { ref } from 'vue'
const text1 = ref('')
</script>
    `,
    inp2: `
<template>
  <tyh-input inpType="text" v-model="text2" />
  <tyh-input inpType="password" v-model="text3" />
</template>

<script setup>
import { ref } from 'vue'
const text2 = ref('')
const text3 = ref('')
</script>
    `,
    inp3: `
<template>
  <tyh-input size="big" v-model="text4" />
  <tyh-input size="medium" v-model="text5" />
  <tyh-input size="small" v-model="text6" />
  <tyh-input size="mini" v-model="text7" />
</template>

<script setup>
import { ref } from 'vue'
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const text7 = ref('')
</script>
    `,
    inp4: `
<template>
  <tyh-input v-model="text8" clear />
</template>

<script setup>
import { ref } from 'vue'
const text8 = ref('')
</script>
    `,
    inp5: `
<template>
  <tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" />
</template>

<script setup>
import { ref } from 'vue'
const text9 = ref('')
</script>
    `,
    inp6: `
<template>
  <tyh-input v-model="text10" prohibit" />
</template>

<script setup>
import { ref } from 'vue'
const text10 = ref('')
</script>
    `
  },
  // 导航栏
  menu: {
    men1: `
<tyh-menu>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
    `,
    men2: `
<tyh-menu backgroundColor="#eee">
  <tyh-menu-item color="#000">首页</tyh-menu-item>
  <tyh-menu-item color="#000">内容</tyh-menu-item>
  <tyh-menu-item color="#000">设置</tyh-menu-item>
  <tyh-menu-item color="#000">回收站</tyh-menu-item>
</tyh-menu>
    `,
    men3: `
<tyh-menu>
  <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
  <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
    `,
    men4: `
<tyh-menu>
  <tyh-menu-item url="/home">
    <tyh-icon icon="tyh-ui-shouye-xianxing" color="#fff" />
    首页
  </tyh-menu-item>
  <tyh-menu-item url="/abc">
    <tyh-icon icon="tyh-ui-training" color="#fff" />
    内容
  </tyh-menu-item>
  <tyh-menu-item url="">
    <tyh-icon icon="tyh-ui-setting-filling" color="#fff" />
    设置
  </tyh-menu-item>
  <tyh-menu-item url="">
    <tyh-icon icon="tyh-ui-discount" color="#fff" />
    标签
  </tyh-menu-item>
</tyh-menu>
    `,
  },
  // 分割线
  division: {
    div1: `
<tyh-division></tyh-division>
<p>这是一段文字</p>
<tyh-division></tyh-division>
  `,
    div2: `
<tyh-division position="left">这是左边文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="center">这是中间文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="right">这是右边文字</tyh-division>
    `,
    div3: `
<tyh-division position="left" textColor="red">这是左边文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="center" textColor="blue">这是中间文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="right" textColor="green">这是右边文字</tyh-division>
    `,
    div4: `
<tyh-division position="left" margin="0px">这是左边文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="center" margin="20px">这是中间文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="right">这是右边文字</tyh-division>
    `
  },
  // 面包屑
  crumbs: {
    cru1: `
<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
    `,
    cru2: `
<tyh-crumbs separator="tyh-ui-link">
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
    `,
    cru3: `
<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>`
  },
  // icon
  icon: {
    icon1: `
<tyh-icon icon="tyh-ui-tyhui" />
<tyh-icon icon="tyh-ui-ashbin" />
<tyh-icon icon="tyh-ui-data-view" />
    `,
    icon2: `
<tyh-icon color="skyblue" icon="tyh-ui-favorite" />
<tyh-icon color="red" icon="tyh-ui-fabulous" />
<tyh-icon color="pink" icon="tyh-ui-good" />
    `,
    icon3: `
<tyh-icon size="50" icon="tyh-ui-hide" />
<tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
<tyh-icon size="30" icon="tyh-ui-huojian" />
    `
  },
  // 翻页
  turnpage: {
    tur1: `
<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="">上一页</tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">下一页</tyh-turn-page-item>
</tyh-turn-page>
    `,
    tur2: `
<tyh-turn-page center>
  <tyh-turn-page-item direction="left" url="">
    上一页 - 居中
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">
    下一页 - 居中
  </tyh-turn-page-item>
</tyh-turn-page>
    `,
    tur3: `
<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="" icon="tyh-ui-home-01">
    首页
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="" icon="tyh-ui-right-01">
    下一页
  </tyh-turn-page-item>
</tyh-turn-page>
    `,
  },
  // 回到顶部
  back: {
    back1: `<tyh-back-top>Top</tyh-back-top>`,
    back2: ` <tyh-backTop bottom="150" right="120">Go</tyh-backTop>`,
    back3: `
<tyh-backTop bottom="100">
  <tyh-icon icon="tyh-ui-top" color="#409eff" />
</tyh-backTop>
    `
  },
  // 提示框
  msg: {
    mes1: `
<template>
  <tyh-button @click="change1">默认提示</tyh-button>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
  <tyh-button type="success" @click="change3">成功提示</tyh-button>
  <tyh-button type="danger" @click="change4">危险提示</tyh-button>
  <tyh-button type="warning" @click="change5">警告提示</tyh-button>
</template>

<script setup>
import TyhMessage from 'tyh-ui2/packages/message'
function change1 () {
  TyhMessage({ message: '默认提示' })
}
function change2 () {
  TyhMessage({ message: '主要提示', type: 'primary' })
}
function change3 () {
  TyhMessage({ message: '成功提示', type: 'success' })
}
function change4 () {
  TyhMessage({ message: '危险提示', type: 'danger' })
}
function change5 () {
  TyhMessage({ message: '警告提示', type: 'warning' })
}
</script>
    `,
    mes2: `
<template>
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
</template>

<script setup>
import TyhMessage from 'tyh-ui2/packages/message'
function change6 () {
  Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
}
</script>
    `,
    mes3: `
<template>
  <tyh-button type="primary" @click="change7">主要提示</tyh-button>
  <tyh-button type="success" @click="change8">成功提示</tyh-button>
  <tyh-button type="danger" @click="change9">危险提示</tyh-button>
  <tyh-button type="warning" @click="change10">警告提示</tyh-button>
</template>

<script setup>
import TyhMessage from 'tyh-ui2/packages/message'
function change7 () {
  Message({ message: '主要提示', type: 'primary', iconClass: 'tyh-ui-smile' })
}
function change8 () {
  Message({ message: '成功提示', type: 'success', iconClass: 'tyh-ui-success-filling' })
}
function change9 () {
  Message({ message: '危险提示', type: 'danger', iconClass: 'tyh-ui-prompt' })
}
function change10 () {
  Message({ message: '警告提示', type: 'warning', iconClass: 'tyh-ui-warning-filling' })
}
</script>
    `,
    mes4: `import Message from 'tyh-ui2/packages/message'`
  },
  // 骨架
  skeleton: {
    ske1: `
<tyh-skeleton />
<tyh-skeleton />
<tyh-skeleton />
    `,
    ske2: `
<tyh-skeleton round />
<tyh-skeleton round />
<tyh-skeleton round />
    `,
    ske3: `
<tyh-skeleton width="75%" />
<tyh-skeleton width="150px" />
<tyh-skeleton width="100px" height="100px" />
    `,
    ske4: `
<tyh-skeleton animation />
<tyh-skeleton animation />
<tyh-skeleton animation />
    `
  },
  // 提示
  alert: {
    ale1: `
<tyh-alert message="这是一个普通提示" />
<tyh-alert type="primary" message="这是一个主要提示" />
<tyh-alert type="success" message="这是一个成功提示" />
<tyh-alert type="danger" message="这是一个危险提示" />
<tyh-alert type="warning" message="这是一个警告提示" />
    `,
    ale2: `
<tyh-alert iconClass="tyh-ui-githublogo" message="这是一个普通提示" />
<tyh-alert iconClass="tyh-ui-home" type="primary" message="这是一个主要提示" />
<tyh-alert iconClass="tyh-ui-history" type="success" message="这是一个成功提示" />
<tyh-alert iconClass="tyh-ui-smile" type="danger" message="这是一个危险提示" />
<tyh-alert iconClass="tyh-ui-warning" type="warning" message="这是一个警告提示" />
    `,
    ale3: `
<template>
  <tyh-alert
    v-show="isShow1"
    close
    type="primary"
    message="点击关闭主要提示"
    @close-alert="isShow1 = false"
  />
  <tyh-alert
    v-show="isShow2"
    close
    type="success"
    message="点击关闭成功提示"
    @close-alert="isShow2 = false"
  />
  <tyh-alert
    v-show="isShow3"
    close
    type="danger"
    message="点击关闭危险提示"
    @close-alert="isShow3 = false"
  />
  <tyh-alert
    v-show="isShow4"
    close
    type="warning"
    message="点击关闭警告提示"
    @close-alert="isShow4 = false"
  />
</template>

<script setup>
import { ref } from 'vue'
const isShow1 = ref(true)
const isShow2 = ref(true)
const isShow3 = ref(true)
const isShow4 = ref(true)
</script>
    `,
    ale4: `
<tyh-alert center message="这是一个普通提示" />
<tyh-alert center type="primary" message="这是一个主要提示" />
<tyh-alert center type="success" message="这是一个成功提示" />
<tyh-alert center type="danger" message="这是一个危险提示" />
<tyh-alert center type="warning" message="这是一个警告提示" />
    `,
    ale5: `
<tyh-alert simple message="简约的普通提示" />
<tyh-alert simple type="primary" message="简约的主要提示" />
<tyh-alert simple type="success" message="简约的成功提示" />
<tyh-alert simple type="danger" message="简约的危险提示" />
<tyh-alert simple type="warning" message="简约的警告提示" />
    `,
  },
  // 评分
  rate: {
    rate1: `
<template>
  <tyh-rate v-model="value1" />
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(2)
</script>
    `,
    rate2: `
<template>
  <tyh-rate v-model="value2" color="blue" voidColor="red" />
</template>

<script setup>
import { ref } from 'vue'
const value2 = ref(2)
</script>
    `,
    rate3: `
<template>
  <tyh-rate v-model="value3" :SayText="['1星', '2星', '3星', '4星', '5星']" />
</template>

<script setup>
import { ref } from 'vue'
const value3 = ref(2)
</script>
    `
  },
  // 图片
  image: {
    img1: `
<tyh-image width="300px" src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg" />
    `,
    img2: `
<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-image
        width="100px"
        height="100px"
        src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
    `
  },
  // 头像
  avatar: {
    ava1: `
<tyh-avatar
  size="10"
  src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
/>
    `,
    ava2: `
<tyh-avatar round src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg" />
    `,
    ava3: `
<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-avatar
        round
        src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
    `,
    ava4: `
<tyh-avatar border src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg" />
<tyh-avatar
  border
  round
  src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
/>
    `
  },
  // 布局
  container: {
    cont1: `
<template>  
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>

  <tyh-container flex>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container flex>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container flex>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>
  </tyh-container>

  <tyh-container flex>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container flex>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>
  </tyh-container>
</template>

<style scoped>
.tyh-header,
.tyh-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tyh-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.tyh-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .tyh-container {
  margin-bottom: 40px;
}

.tyh-container:nth-child(5) .tyh-aside,
.tyh-container:nth-child(6) .tyh-aside {
  line-height: 260px;
}

.tyh-container:nth-child(7) .tyh-aside {
  line-height: 320px;
}
</style>
    `
  }
}

export default data
