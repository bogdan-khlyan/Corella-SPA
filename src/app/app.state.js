import { reactive } from 'vue'

export const appState = reactive({
  windowWidth: 1920,
})

export function appStateInit() {
  appState.windowWidth = document.documentElement.clientWidth
  window.addEventListener('resize', () => {
    appState.windowWidth = document.documentElement.clientWidth
  })
}
