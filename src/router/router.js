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
        path: '/project/:projectId/projectBoard',
        name: 'project-board',
        component: () => import('@/app/projects/projectBoard')
    }, {
        path: '/project/:projectId/board',
        name: 'board',
        component: () => import('@/app/projects/projectBoard')
    }, {
        path: '/project/:projectId/create-task',
        name: 'create-task',
        component: () => import('@/app/projects/tasks/createTask/CreateTask')
    }, {
        path: '/admin/user-management',
        name: 'user-management',
        component: () => import('@/app/userManagement/UserManagement')
    }, {
        path: '/:pathMatch(.*)*',
        name: 'page-404',
        component: () => import('@/app/common/Page404')
    }],
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
