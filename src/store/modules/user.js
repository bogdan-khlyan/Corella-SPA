import { defineStore } from 'pinia'
import { useApi } from '@/api'
import { useCookies } from '@vueuse/integrations/useCookies'

const api = useApi()
const cookies = useCookies()

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    user: null,
    loadUserPromise: null,
    loggedIn: !!cookies.get('.AspNetCore.Cookies'),
    projectRoles: new Map(),
  }),
  getters: {
    userRights(state) {
      return state.user?.role?.rights || []
    },
    userRightList(state) {
      return state.user?.role?.rights.map((right) => right.id) || []
    },
  },
  actions: {
    async login(data) {
      this.user = await api.auth.signIn(data)
      this.loggedIn = true
    },
    async getMe() {
      this.loadUserPromise = api.users.getMe()
      this.user = await this.loadUserPromise
    },
    async logout(sendRequest = true) {
      try {
        if (sendRequest) {
          await api.auth.signout()
        }
      } finally {
        this.user = null
        this.loggedIn = false
        cookies.remove('.AspNetCore.Cookies')
      }
    },
    async getProjectRole(projectId) {
      const foundProjectRole = this.projectRoles.get(projectId)

      if (!foundProjectRole) {
        const projectRole = await api.projects.getProjectRole(projectId)
        this.projectRoles.set(projectId, projectRole)
        return projectRole
      }

      return foundProjectRole
    },
  },
})
