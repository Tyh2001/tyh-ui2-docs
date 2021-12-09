import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from 'tyh-ui2'
import 'tyh-ui2/style/index.css'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(tyhUi2)
app.use(hljsVuePlugin)
app.mount('#app')
