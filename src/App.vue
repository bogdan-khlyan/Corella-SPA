<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import {appStateInit} from "@/app/app.state";
import {userInstanceStateInit} from "@/app/userInstance/user-instance.state";

export default {
  name: 'app',
  created() {
    appStateInit()
    setTimeout(() => {
      userInstanceStateInit()
    }, 2000)
  }
}
</script>

<style lang="scss">

</style>
