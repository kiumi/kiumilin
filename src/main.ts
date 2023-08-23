import './assets/main.scss'

import "@fontsource/jua"
import "animate.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vScrollPlugin from './plugins/vScroll'

const app = createApp(App)

app.use(vScrollPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
