import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from 'tyh-ui2'
import 'tyh-ui2/style/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(app => {
  app.directive('highlight', {
    mounted (el) {
      let blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightElement(blocks[i])
      }
    }
  })
})
app.use(router)
app.use(tyhUi2)
app.mount('#app')
