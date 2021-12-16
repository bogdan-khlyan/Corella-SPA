<template>
  <div class="base-wrapper" :style="styles">
    <div class="base-wrapper__sidebar"
         :class="{'base-wrapper__sidebar--collapsed':isCollapse}">
      <base-sidebar/>
    </div>
    <div class="base-wrapper__content"
         :style="{minWidth : isCollapse?'calc(100% - 300px)':'calc(100% - 80px)'}">
      <div class="base-wrapper__header">
        <base-header/>
      </div>
      <div class="base-wrapper__view">
        <router-view v-slot="{ Component }">
          <transition name="el-fade-in-linear" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/app/common/baseWrapper/baseHeader/BaseHeader";
import BaseSidebar from "@/app/common/baseWrapper/baseSidebar/BaseSidebar";
import sidebarCollapse from "@/app/common/baseWrapper/baseSidebar/sidebar-mixin";
import {baseWrapperConfig} from "@/app/common/baseWrapper/base-wrapper.config";

export default {
  name: 'base-wrapper',
  components: {
    BaseHeader,
    BaseSidebar
  },
  mixins: [sidebarCollapse],
  computed: {
    styles() {
      const configForRoute = baseWrapperConfig.get(this.$route.name)
      if (configForRoute) {
        return configForRoute.styles
      } else {
        return baseWrapperConfig.get('default').styles
      }
    }
  }
}
</script>

<style scoped lang="scss">
.base-wrapper {
  display: flex;

  &__sidebar {
    transition: all 350ms linear;
    min-width: 80px;

    &--collapsed {
      min-width: 300px;
    }

    height: 100vh;
  }

  &__content {
    transition: all 350ms linear;
    min-height: calc(100vh - 70px);
  }

  &__view {
    padding: 20px;
    box-sizing: border-box;
    min-height: calc(100vh - 70px);
  }

  &__header {
    height: 70px;
  }

}
</style>
