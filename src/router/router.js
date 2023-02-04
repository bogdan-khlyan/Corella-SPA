import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress' // progress bar
import { loginPageRoutes } from '@/views/login-page/login-page.router'

import 'nprogress/nprogress.css'
import { userInstanceState } from '@/app/userInstance/user-instance.state' // progress bar style
import { useUserStore } from '@/store/modules/user'

const routes = [
  {
    path: '/login-page',
    name: 'login-page',
    component: () => import('@/views/login-page/LoginPage'),
    children: loginPageRoutes,
  },
  {
    path: '/',
    name: 'base-wrapper',
    component: () => import('@/components/base-wrapper/BaseWrapper'),
    children: [
      {
        path: '/',
        name: 'project-list',
        component: () => import('@/views/projects/project-list/ProjectList'),
        meta: { requiresAuth: true },
      },
      {
        path: '/project/:projectId/board',
        name: 'board',
        component: () => import('@/views/projects/project-board/ProjectBoard'),
        meta: { requiresAuth: true },
      },
      {
        path: '/project/create',
        name: 'create-project',
        component: () =>
          import('@/views/projects/project-editor/ProjectSettings'),
        meta: { requiresAuth: true },
      },
      {
        path: '/project/:projectId/settings',
        name: 'project-settings',
        component: () =>
          import('@/views/projects/project-editor/ProjectSettings'),
        meta: { requiresAuth: true },
      },
      {
        path: '/project/:projectId/task/:taskId',
        name: 'task',
        component: () => import('@/views/projects/tasks/task/Task'),
        meta: { requiresAuth: true },
      },
      {
        path: '/project/:projectId/create-task',
        name: 'create-task',
        component: () => import('@/views/projects/tasks/edit-task/EditTask'),
        meta: { requiresAuth: true },
      },
      {
        path: '/project/:projectId/task/:taskId/edit',
        name: 'edit-task',
        component: () => import('@/views/projects/tasks/edit-task/EditTask'),
        meta: { requiresAuth: true },
      },
      {
        path: '/admin/user-management',
        name: 'user-management',
        component: () => import('@/views/user-management/UserManagement'),
        meta: { requiresAuth: true },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/app/userInstance/profile/ProfilePage'),
        meta: { requiresAuth: true },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'page-404',
        component: () => import('@/app/common/Page404'),
        meta: { requiresAuth: true },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  const { loggedIn } = useUserStore()

  if (
    to.matched.some((record) => record.meta.requiresAuth) ||
    to.matched.some((record) => record.meta.requiresAdminAuth)
  ) {
    if (!loggedIn) {
      next('/login-page')
    } else {
      next()
    }
  } else if (to.path === '/login-page') {
    if (loggedIn) {
      next('/')
    } else {
      next()
    }
  } else {
    next('/')
  }
})

router.afterEach(() => {
  // finish nprogress
  NProgress.done()
})

export default router
