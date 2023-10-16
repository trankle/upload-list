import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 导入组件库
import mxdmUI from '../packages'

const app = createApp(App)

app.use(createPinia())
app.use(mxdmUI)

app.mount('#app')
