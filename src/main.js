import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import * as VueRouter from 'vue-router'
import routes from './assets/routes.js'

import { createPinia } from 'pinia'
import piniaCurUser from './util/piniaCurUser.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const pinia = createPinia()

pinia.use(piniaCurUser)

createApp(App)

.use(router)

.use(pinia)

.mount('#app')
