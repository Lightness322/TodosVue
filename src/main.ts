import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { icons } from '@/components/UI/icons'
import { componentsUI } from '@/components/UI/componentsUI'

addIcons(...icons)

const app = createApp(App)

componentsUI.forEach((componentUI) => app.component(componentUI.name, componentUI))

app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
