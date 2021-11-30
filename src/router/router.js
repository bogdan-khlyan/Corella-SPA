import {createRouter, createWebHistory} from 'vue-router'

import {loginPageRoutes} from '@/app/auth/loginPage/login-page.router'

const routes = [{
    path: '/login',
    name: 'login-page',
    component: () => import('@/app/auth/loginPage/LoginPage'),
    children: loginPageRoutes
}, {
    path: '/',
    name: 'main-wrapper',
    component: () => import('@/app/common/MainWrapper'),
    children: [{
        path: '/',
        name: 'project-list',
        component: () => import('@/app/projects/projectList/ProjectList')
    }, {
        path: '/:projectId/board',
        name: 'board',
        component: () => import('@/app/projects/board/Board')
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

export default router
