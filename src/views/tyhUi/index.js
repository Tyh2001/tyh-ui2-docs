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
  <tyh-tag v-show="show1" isclose @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" color="primary" isclose @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" color="success" isclose @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" color="danger" isclose @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" color="warning" isclose @close="show5 = false">
    标签五
  </tyh-tag>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const show1 = ref(true)
    const show2 = ref(true)
    const show3 = ref(true)
    const show4 = ref(true)
    const show5 = ref(true)

    return {
      show1,
      show2,
      show3,
      show4,
      show5
    }
  }
}
</script>
    `
  },
  // 链接
  link: {
    lin1: `
<tyh-link url="">链接一</tyh-link>
<tyh-link url="" color="primary">链接二</tyh-link>
<tyh-link url="" color="success">链接三</tyh-link>
<tyh-link url="" color="danger">链接四</tyh-link>
<tyh-link url="" color="warning">链接五</tyh-link>
    `,
    lin2: `
<tyh-link underline>链接一</tyh-link>
<tyh-link underline color="primary">链接二</tyh-link>
<tyh-link underline color="success">链接三</tyh-link>
<tyh-link underline color="danger">链接四</tyh-link>
<tyh-link underline color="warning">链接五</tyh-link>
    `,
    lin3: `
<tyh-link hoverline>链接一</tyh-link>
<tyh-link hoverline color="primary">链接二</tyh-link>
<tyh-link hoverline color="success">链接三</tyh-link>
<tyh-link hoverline color="danger">链接四</tyh-link>
<tyh-link hoverline color="warning">链接五</tyh-link>
    `
  },
  // 文本框
  input: {
    inp1: `
<template>
  <tyh-input v-model="text1" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const text1 = ref('')
    
    return { text1 }
  }
}
</script>
    `,
    inp2: `
<template>
  <tyh-input inpType="text" v-model="text2" />
  <tyh-input inpType="password" v-model="text3" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const text2 = ref('')
    const text3 = ref('')
    return { text2, text3 }
  }
}
</script>
    `,
    inp3: `
<template>
  <tyh-input size="big" v-model="text4" />
  <tyh-input size="medium" v-model="text5" />
  <tyh-input size="small" v-model="text6" />
  <tyh-input size="mini" v-model="text7" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const text4 = ref('')
    const text5 = ref('')
    const text6 = ref('')
    const text7 = ref('')
    return {
      text4,
      text5,
      text6,
      text7
    }
  }
}
</script>
    `,
    inp4: `
<template>
  <tyh-input v-model="text8" clear />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const text8 = ref('')
    return { text8 }
  }
}
</script>
    `,
    inp5: `
<template>
  <tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const text9 = ref('')
    return { text9 }
  }
}
</script>
    `,
    inp6: `
<template>
  <tyh-input v-model="text10" prohibit" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const text10 = ref('')
    return { text10 }
  }
}
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
    <tyh-icon icon="tyh-ui-home-01" color="#fff" />
    首页
  </tyh-menu-item>
  <tyh-menu-item url="/abc">
    <tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" />
    内容
  </tyh-menu-item>
  <tyh-menu-item url="">
    <tyh-icon icon="tyh-ui-setting-01" color="#fff" />
    设置
  </tyh-menu-item>
  <tyh-menu-item url="">
    <tyh-icon icon="tyh-ui-trash-01" color="#fff" />
    回收站
  </tyh-menu-item>
</tyh-menu>
    `,
  },
  // 分割线
  division: {
    div1: `<tyh-division>这是分割线</tyh-division>`,
    div2: `
<tyh-division position="left">这是左边文字</tyh-division>
<tyh-division position="center">这是中间文字</tyh-division>
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
<tyh-crumbs separator="tyh-ui-right-02">
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>`,
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
<tyh-icon icon="tyh-ui-huojian-01" />
<tyh-icon icon="tyh-ui-PaperPlane-01" />
    `,
    icon2: `
<tyh-icon color="skyblue" icon="tyh-ui-tyhui" />
<tyh-icon color="orange" icon="tyh-ui-huojian-01" />
<tyh-icon color="pink" icon="tyh-ui-PaperPlane-01" />`,
    icon3: `
<tyh-icon size="50" icon="tyh-ui-tyhui" />
<tyh-icon size="40" icon="tyh-ui-huojian-01" />
<tyh-icon size="30" icon="tyh-ui-PaperPlane-01" />
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
  <tyh-icon icon="tyh-ui-huojian-01" color="#409eff" />
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

<script>
import TyhMessage from 'tyh-ui2/packages/message'
export default {
  setup () {
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

    return {
      change1,
      change2,
      change3,
      change4,
      change5,
    }
  }
}
</script>
    `,
    mes2: `
<template>
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
</template>

<script>
import TyhMessage from 'tyh-ui2/packages/message'
export default {
  setup () {
    function change6 () {
      Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
    }

    return { change6 }
  }
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

<script>
import TyhMessage from 'tyh-ui2/packages/message'
export default {
  setup () {
    function change7 () {
      Message({ message: '主要提示', type: 'primary', iconClass: 'tyh-ui-primary-01' })
    }
    function change8 () {
      Message({ message: '成功提示', type: 'success', iconClass: 'tyh-ui-success-01' })
    }
    function change9 () {
      Message({ message: '危险提示', type: 'danger', iconClass: 'tyh-ui-danger-01' })
    }
    function change10 () {
      Message({ message: '警告提示', type: 'warning', iconClass: 'tyh-ui-warning-01' })
    }

    return {
      change7,
      change8,
      change9,
      change10
    }
  }
}
</script>
    `
  }
}

export default data
