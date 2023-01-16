export const loginPageRoutes = [{
  path: '',
  name: 'login-form',
  component: () => import('@/app/auth/loginPage/components/forms/LoginForm'),
}, {
  path: 'register',
  name: 'register-form',
  component: () => import('@/app/auth/loginPage/components/forms/RegisterForm'),
}, {
  path: 'recover',
  name: 'recover-form',
  component: () => import('@/app/auth/loginPage/components/forms/RecoveryPasswordForm'),
}]
