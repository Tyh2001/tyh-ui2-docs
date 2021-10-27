import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from 'tyh-ui2'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"

const app = createApp(App)
app.use(router)
app.use(tyhUi2)
app.use(hljsVuePlugin)
app.mount('#app')
