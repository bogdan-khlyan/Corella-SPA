export const loginPageRoutes = [{
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
