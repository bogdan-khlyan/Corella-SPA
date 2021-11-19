import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'ProjectList',
    //   component: () => import('@/views/projectList/Index')
    // },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login'),
        children: [{
            path: '/',
            name: '_login',
            component: () => import('@/views/login/views/Login')
        }, {
            path: '/restore',
            name: 'restore',
            component: () => import('@/views/login/views/Restore')
        }]
    },
    {
        path: '/',
        name: 'sidebar-wrapper',
        component: () => import('@/components/MainWrapper'),
        children: [
            {
                path: '/',
                name: 'project-list',
                component: () => import('@/views/projectList/ProjectList'),
            },
            {
                path: '/projects/:id',
                name: 'project-by-id',
                component: () => import('@/views/project/Project'),
                children: [{
                    path: 'board',
                    name: 'board',
                    component: () => import('@/views/project/components/board/Board.vue')
                }, {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('@/views/project/components/settings/Settings')
                }, {
                    path: 'hotfixes',
                    name: 'hotfixes',
                    component: () => import('@/views/project/components/hotfixes/Hotfixes')
                }]
                // component: () => import('@/views/project/Index'),
            },
            {
                path: '/projects/:id/hotfixes',
                name: 'hotfixes',
                component: () => import('@/views/project/Project'),
            },
            {
                path: '/admin/user-management',
                name: 'user-management',
                component: () => import('@/views/userManagement/UserManagement'),
            },
        ],
        meta: {
            requiresAuth: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
