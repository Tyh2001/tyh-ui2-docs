import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi from 'tyh-ui-next/src'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"

const app = createApp(App)
app.use(router)
app.use(tyhUi)
app.use(hljsVuePlugin)
app.mount('#app')
