import { defineStore } from 'pinia'

export const useHeaderStore = defineStore({
  id: 'header',
  state: () => ({
    searchData: '',
  }),
})
