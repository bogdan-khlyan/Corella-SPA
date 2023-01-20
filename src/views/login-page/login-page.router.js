export const loginPageRoutes = [
  {
    path: '',
    name: 'login-form',
    component: () => import('@/views/login-page/components/forms/LoginForm'),
  },
  {
    path: 'register',
    name: 'register-form',
    component: () => import('@/views/login-page/components/forms/RegisterForm'),
  },
  {
    path: 'recover',
    name: 'recovery-form',
    component: () =>
      import('@/views/login-page/components/forms/RecoveryPasswordForm'),
  },
]
