import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

import Carri from './components/Carri.vue'
import Carri2 from './components/Carri2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Carri
        },
        {
            path: '/2',
            component: Carri2
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
