import { defineStore } from 'pinia'

export const useDragStore = defineStore({
  id: 'drag',
  state: () => ({
    dropFiles: '',
  }),
})
