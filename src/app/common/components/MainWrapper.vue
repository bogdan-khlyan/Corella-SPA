<template>
  <div class="main-wrapper">
    <div class="main-wrapper__sidebar">
      <base-sidebar/>
    </div>
    <div class="main-wrapper__content">
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
import BaseHeader from "@/app/common/components/BaseHeader";
import BaseSidebar from "@/app/common/components/BaseSidebar";

export default {
  name: 'main-wrapper',
  components: {
    BaseHeader,
    BaseSidebar
  }
}
</script>

<style scoped lang="scss">
.main-wrapper {
  display: flex;

  &__sidebar {
    width: 80px;
    height: auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 80px);
    min-height: 100vh;
  }

  &__view {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
  }

}
</style>
