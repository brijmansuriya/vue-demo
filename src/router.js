import IndexPage from './components/IndexPage.vue'
import AddUser from './components/AddUser.vue'
import MyHome from './components/MyHome.vue'
import UserLogin from './components/UserLogin.vue'
import UserRegister from './components/UserRegister.vue'

import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        name:"UserLogin",
        component:UserLogin,
        path:'/'
    },
    {
        name:"UserRegister",
        component:UserRegister,
        path:'/'
    },
    {
        name:"IndexPage",
        component:IndexPage,
        path:'/aaaa'
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