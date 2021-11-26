<template>
  <div class="main-wrapper">
    <div class="main-wrapper__sidebar"
         :class="isAllContentShow?'main-wrapper__sidebar--all':'main-wrapper__sidebar--not-all'">
      <base-sidebar @openSidebar="openSidebar"/>
    </div>
    <div class="main-wrapper__content"
         :class="isAllContentShow?'main-wrapper__content--not-all':'main-wrapper__content--all'">
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
import BaseHeader from "@/app/common/BaseHeader";
import BaseSidebar from "@/app/common/BaseSidebar";

export default {
  name: 'main-wrapper',
  components: {
    BaseHeader,
    BaseSidebar
  },
  methods: {
    openSidebar(val) {
      this.isAllContentShow = val
    }
  },
  data() {
    return {
      isAllContentShow: true
    }
  }
}
</script>

<style scoped lang="scss">
.main-wrapper {
  display: flex;

  &__sidebar {
    transition: all 350ms linear;
    &--all {
      width: 300px;
    }

    &--not-all {
      width: 80px;
    }

    height: 100vh;
  }

  &__content {
    transition: all 350ms linear;
    &--all {
      width: calc(100vw - 80px);
    }

    &--not-all {
      width: calc(100vw - 300px);
    }
  }

  &__view {
    padding: 20px;
    box-sizing: border-box;
  }

}
</style>
