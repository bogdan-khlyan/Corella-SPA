import {createRouter, createWebHistory} from 'vue-router'

import {loginPageRoutes} from '@/app/auth/loginPage/login-page.router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

const routes = [{
    path: '/login',
    name: 'login-page',
    component: () => import('@/app/auth/loginPage'),
    children: loginPageRoutes
}, {
    path: '/',
    name: 'base-wrapper',
    component: () => import('@/app/common/components/baseWrapper/BaseWrapper'),
    children: [{
        path: '/',
        name: 'project-list',
        component: () => import('@/app/projects/projectList')
    }, {
        path: '/project/:projectId/board',
        name: 'board',
        component: () => import('@/app/projects/projectBoard')
    }, {
        path: '/project/create',
        name: 'create-project',
        component: () => import('@/app/projects/createProject/CreateProject')
    }, {
        path: '/project/:projectId/task/:taskId',
        name: 'task',
        component: () => import('@/app/projects/tasks/task')
    }, {
        path: '/project/:projectId/create-task',
        name: 'create-task',
        component: () => import('@/app/projects/tasks/editTask')
    }, {
        path: '/admin/user-management',
        name: 'user-management',
        component: () => import('@/app/userManagement')
    }, {
        path: '/:pathMatch(.*)*',
        name: 'page-404',
        component: () => import('@/app/common/components/Page404')
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
