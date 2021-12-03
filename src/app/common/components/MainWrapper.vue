<template>
  <div class="main-wrapper">
    <div class="main-wrapper__sidebar"
         :class="{'main-wrapper__sidebar--collapsed':isCollapse}">
      <base-sidebar/>
    </div>
    <div class="main-wrapper__content"
         :style="{minWidth : isCollapse?'calc(100% - 300px)':'calc(100% - 80px)'}">
      <div class="main-wrapper__header">
        <base-header/>
      </div>
      <div class="main-wrapper__view">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/app/common/components/baseHeader/BaseHeader";
import BaseSidebar from "@/app/common/components/baseSidebar/BaseSidebar";
import sidebarCollapse from "@/app/common/mixins/sidebar-mixin";

export default {
  name: 'main-wrapper',
  components: {
    BaseHeader,
    BaseSidebar
  },
  mixins: [sidebarCollapse]
}
</script>

<style scoped lang="scss">
.main-wrapper {
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
    height: 100vh;
  }

  &__view {
    padding: 20px;
    box-sizing: border-box;
    height: calc(100vh - 70px);
  }

  &__header {
    height: 70px;
  }

}
</style>
