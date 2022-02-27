<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import {appStateInit} from "@/app/app.state";

export default {
  name: 'app',
  created() {
    appStateInit()
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index";
</style>
