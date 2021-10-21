const data = {
  // 安装
  install: {
    ins1: 'npm i tyh-ui-next',
    ins2: `
import { createApp } from 'vue'
import App from './App.vue'
import tyhUi from 'tyh-ui-next/src'

createApp(App).use(tyhUi).mount('#app')
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
<tyh-button icon="tyh-ui-setting-01" type="primary"></tyh-button>
<tyh-button icon="tyh-ui-phone-01" type="success"></tyh-button>
<tyh-button icon="tyh-ui-huojian-01" type="danger">火箭</tyh-button>
<tyh-button icon="tyh-ui-PaperPlane-01" type="warning">飞机</tyh-button>
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
    `
  },
  // 列表
  list: {
    lis1: `
<template>
  <tyh-list :content="arr" iskey="name" />
</template>

<script>
export default {
  setup () {
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
    return {
      arr
    }
  }
}
</script>
    `,
    lis2: `
<template>
  <tyh-list :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
</template>

<script>
export default {
  setup () {
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
    return {
      arr
    }
  }
}
</script>
        `,
    lis3: `
<template>
  <tyh-list zebra num :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
</template>

<script>
export default {
  setup () {
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
    return {
      arr
    }
  }
}
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
  }
}

export default data
