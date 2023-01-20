import http from '../utils/http'
import authModule from './modules/auth'
import projectsModule from './modules/projects'

export const useApi = () => ({
  auth: authModule(http),
  projects: projectsModule(http),
})
