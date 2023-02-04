import { defineStore } from 'pinia'
import { useApi } from '@/api'
import { useCookies } from '@vueuse/integrations/useCookies'

const api = useApi()
const cookies = useCookies()

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    user: null,
    loggedIn: !!cookies.get('.AspNetCore.Cookies'),
  }),
  actions: {
    async login(data) {
      this.user = await api.auth.signIn(data)
      this.loggedIn = true
    },
    async getMe() {
      this.user = await api.users.getMe()
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
  },
})
