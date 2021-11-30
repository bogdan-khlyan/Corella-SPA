const projectListButton = {
    top: true, // TODO
    path: '/',
    route: 'project-list',
    label: 'Projects',
    icon: require('@/assets/images/icons/sidebar/icon-projects.svg')
}

const userManagementButton = {
    top: true, // TODO
    path: '/admin/user-management',
    route: 'user-management',
    label: 'User Management',
    icon: require('@/assets/images/icons/sidebar/icon-user-managament.svg')
}

const menuTitle = {
    type: 'TITLE',
    title: 'menu'
}

const boardButton = {
    path: '/{currentProjectId??}/board',
    route: 'board',
    label: 'Board',
    icon: require('@/assets/images/icons/sidebar/icon-board.svg')
}

const bottomButton = new Map()
    .set('project-list', {
        label: 'Create New Project',
        path: '/create-project'
    })
    .set('board', {
        label: 'Create New Task',
        path: '/1/create-task' // TODO id
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
