<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { useUserStore } from '@/store/modules/user'
import { appStateInit } from '@/app/app.state'

export default {
  name: 'App',
  data() {
    return {
      userStore: useUserStore(),
    }
  },
  created() {
    if (this.userStore.loggedIn) {
      this.userStore.getMe()
    }
    appStateInit()
  },
}
</script>

<style lang="scss">
@import './assets/scss/index';
</style>
