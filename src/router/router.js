import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
    path: '/login',
    name: 'login',
    component: () => import('@/app/auth/login/LoginPage')
}, {
    path: '/',
    name: 'main-wrapper',
    component: () => import('@/app/common/MainWrapper'),
    children: [{
        path: '/',
        name: 'project-list',
        component: () => import('@/app/projectList/ProjectList')
    }]
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
