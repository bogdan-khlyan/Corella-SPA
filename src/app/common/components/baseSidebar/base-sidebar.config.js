const projectListButton = {
    id: 1,
    top: true,
    path: '/',
    route: 'project-list',
    label: 'Projects',
    icon: require('@/assets/images/icons/sidebar/icon-projects.svg')
}

const userManagementButton = {
    id: 2,
    top: true,
    path: '/admin/user-management',
    route: 'user-management',
    label: 'User Management',
    icon: require('@/assets/images/icons/sidebar/icon-user-managament.svg')
}

const menuTitle = {
    id: 3,
    type: 'TITLE',
    title: 'menu'
}

const boardButton = {
    id: 4,
    getPath: (context) => `/${context.$route.params.projectId}/board`,
    route: 'board',
    label: 'Board',
    icon: require('@/assets/images/icons/sidebar/icon-board.svg')
}

const bottomButton = new Map()
    .set('project-list', {
        id: 5,
        label: 'Create New Project',
        path: '/create-project'
    })
    .set('board', {
        id: 6,
        label: 'Create New Task',
        getPath: (context) => `/${context.$route.params.projectId}/create-task`
    })

export const baseSidebarConfig = new Map()
    .set('default', [
        projectListButton,
        userManagementButton
    ])
    .set('project-list', [
        projectListButton,
        userManagementButton
    ])
    .set('board', [
        projectListButton,
        userManagementButton,
        menuTitle,
        boardButton
    ])
    .set('bottomButton', bottomButton)
