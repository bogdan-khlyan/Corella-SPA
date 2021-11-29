<template>
  <div class="main-wrapper">
    <div class="main-wrapper__sidebar"
         :class="{'main-wrapper__sidebar--collapsed':isCollapse}">
      <base-sidebar/>
    </div>
    <div class="main-wrapper__content"
         :style="{width : isCollapse?'calc(100vw - 300px)':'calc(100vw - 80px)'}">
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
import BaseHeader from "@/app/common/baseHeader/BaseHeader";
import BaseSidebar from "@/app/common/baseSidebar/BaseSidebar";
import {baseSidebarState} from "@/app/common/baseSidebar/base-sidebar.state";

export default {
  name: 'main-wrapper',
  components: {
    BaseHeader,
    BaseSidebar
  },
  computed: {
    isCollapse() {
      return baseSidebarState.isCollapse
    }
  }
}
</script>

<style scoped lang="scss">
.main-wrapper {
  display: flex;

  &__sidebar {
    transition: all 350ms linear;
    width: 80px;

    &--collapsed {
      width: 300px;
    }

    height: 100vh;
  }

  &__content {
    transition: all 350ms linear;
  }

  &__view {
    padding: 20px;
    box-sizing: border-box;
  }

}
</style>
