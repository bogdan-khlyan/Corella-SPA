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
    name: 'base-wrapper',
    component: () => import('@/app/common/baseWrapper/BaseWrapper'),
    children: [{
        path: '/',
        name: 'project-list',
        component: () => import('@/app/projects/projectList/ProjectList')
    }, {
        path: '/project/:projectId/board',
        name: 'board',
        component: () => import('@/app/projects/projectBoard/ProjectBoard')
    }, {
        path: '/project/create',
        name: 'create-project',
        component: () => import('@/app/projects/projectEditor/ProjectEditor')
    }, {
        path: '/project/:projectId/settings',
        name: 'project-settings',
        component: () => import('@/app/projects/projectEditor/ProjectEditor')
    }, {
        path: '/project/:projectId/task/:taskId',
        name: 'task',
        component: () => import('@/app/projects/tasks/task/Task')
    }, {
        path: '/project/:projectId/create-task',
        name: 'create-task',
        component: () => import('@/app/projects/tasks/editTask/EditTask')
    }, {
        path: '/project/:projectId/task/:taskId/edit',
        name: 'edit-task',
        component: () => import('@/app/projects/tasks/editTask/EditTask')
    }, {
        path: '/admin/user-management',
        name: 'user-management',
        component: () => import('@/app/userManagement/UserManagement')
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import('@/app/profile/ProfileView')
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
