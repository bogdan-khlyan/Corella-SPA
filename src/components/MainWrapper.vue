<template>
  <div class="d-flex">
    <SidebarMenu/>
    <div class="main-wrapper">
      <div class="main-wrapper__header">
        <app-header class="header"/>
      </div>
      <div class="main-wrapper__content">
        <transition name="el-fade-in">
          <router-view @onProjectName="setName" :search="search"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import SidebarMenu from '@/components/SidebarMenu'

export default {
  name: 'main-wrapper',
  components: {
    AppHeader,
    SidebarMenu
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    setName(desk) {
      console.log(desk)
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.main-wrapper {
  position: relative;
  padding: 0 30px;
  margin-left: 75px;
  width: 100%;

  > .main-wrapper__header {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;

    > .header {
      margin-left: calc(#{$sidebar-width} + 30px);
    }

  }

  > .main-wrapper__content {
    margin-top: 90px;
  }

}
</style>
