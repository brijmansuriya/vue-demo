import IndexPage from './components/IndexPage.vue'
import AddUser from './components/AddUser.vue'
import MyHome from './components/MyHome.vue'

import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        name:"IndexPage",
        component:IndexPage,
        path:'/'
    },
    {
        name:"AddUser",
        component:AddUser,
        path:'/adduser'
    },
    {
        name:"MyHome",
        component:MyHome,
        path:'/myhome'
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})

export default router