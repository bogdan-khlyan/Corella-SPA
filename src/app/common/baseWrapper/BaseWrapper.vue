<template>
  <div class="base-wrapper"
       :style="styles"
       @dragover.prevent="dragOver"
       @drop.prevent="dropFile"
       @mouseleave="dragLeave">
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

        <transition name="el-fade-in-linear" mode="out-in">
          <div v-show="drag"
               class="base-wrapper__drag-and-drop">
            <div class="base-wrapper__drag-and-drop--content">
              <img src="@/assets/images/icons/common/icon-file.svg" alt="">
              <span>Drag and drop the file here</span>
            </div>
          </div>
        </transition>

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
import {baseWrapperState} from "@/app/common/baseWrapper/base-wrapper.state";

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
  },
  data() {
    return {
      drag: false
    }
  },
  methods: {
    dragOver() {
      this.drag = true
    },
    dragLeave() {
      this.drag = false
    },
    dropFile(event) {
      this.drag = false
      baseWrapperState.dragFiles = event.dataTransfer.files
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
    position: relative;

    padding: 20px;
    box-sizing: border-box;
    min-height: calc(100vh - 70px);
  }

  &__drag-and-drop {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 2;

    background: rgba(60, 75, 97, 0.6);
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;

    &--content {
      width: max-content;
      margin: 0 auto;

      > img {
        margin:  20px auto;
      }

      > span {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;

        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
      }

    }

  }

  &__header {
    height: 70px;
  }

}
</style>
