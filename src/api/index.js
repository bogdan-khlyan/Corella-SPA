import http from '../utils/http'

import authModule from './modules/auth'
import projectsModule from './modules/projects'
import usersModule from './modules/users'

export const useApi = () => ({
  auth: authModule(http),
  projects: projectsModule(http),
  users: usersModule(http),
})
