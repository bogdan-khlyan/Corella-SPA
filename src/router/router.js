import {createRouter, createWebHistory} from 'vue-router'

import {loginPageRoutes} from '@/app/auth/loginPage/login-page.router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

const routes = [{
    path: '/login',
    name: 'login-page',
    component: () => import('@/app/auth/loginPage/LoginPage'),
    children: loginPageRoutes
}, {
    path: '/',
    name: 'main-wrapper',
    component: () => import('@/app/common/components/MainWrapper'),
    children: [{
        path: '/',
        name: 'project-list',
        component: () => import('@/app/projects/projectList/ProjectList')
    }, {
        path: '/:projectId/project-board',
        name: 'project-board',
        component: () => import('@/app/projects/project-board')
    }]
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    //finish nprogress
    NProgress.done()
})

export default router
