import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
    path: '/login',
    name: 'login-page',
    component: () => import('@/app/auth/loginPage/LoginPage'),
    children: [{
        path: '',
        name: 'login-form',
        component: () => import('@/app/auth/loginPage/forms/LoginForm')
    }, {
        path: 'register',
        name: 'register-form',
        component: () => import('@/app/auth/loginPage/forms/RegisterForm')
    }, {
        path: 'recover',
        name: 'recover-form',
        component: () => import('@/app/auth/loginPage/forms/RecoveryPasswordForm')
    }]
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
