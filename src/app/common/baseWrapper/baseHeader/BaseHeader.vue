<template>
  <header class="base-header"
          :style="headerStyles">

    <div v-if="windowWidth <= 980"
         style="min-width: 32px"
         @click="clickBurger">
      <transition name="el-fade-in-linear" appear mode="out-in">
        <img v-if="isDrawer" src="@/assets/images/icons/sidebar/icon-closed.svg" alt="">
        <img v-else src="@/assets/images/icons/sidebar/burger.svg" alt="">
      </transition>
    </div>

    <transition name="showInput">
      <HeaderInput v-if="isShowInput"/>
    </transition>
    <div class="base-header__info">

      <div v-if="windowWidth > 768" class="base-header__icons-wrapper">

        <div class="base-header__icon base-header__icon--green">
          <a href="#">
            <img src="@/assets/images/icons/header/icon-messages.svg">
            <span>2</span>
          </a>
        </div>

        <div class="base-header__icon base-header__icon--red">
          <a href="#">
            <img src="@/assets/images/icons/header/icon-notification.svg">
            <span>16</span>
          </a>
        </div>
      </div>

      <AccountInfo/>
    </div>
  </header>
</template>

<script>
import AccountInfo from "./AccountInfo";
import sidebarCollapse from "@/app/common/baseWrapper/baseSidebar/sidebar-mixin";
import HeaderInput from "@/app/common/baseWrapper/baseHeader/HeaderInput";
import {baseSidebarState} from "@/app/common/baseWrapper/baseSidebar/base-sidebar.state";
import {appState} from "@/app/app.state";

export default {
  name: 'base-header',
  components: {HeaderInput, AccountInfo},
  mixins: [sidebarCollapse],
  computed: {
    isDrawer() {
      return baseSidebarState.isDrawer
    },
    windowWidth() {
      return appState.windowWidth
    },
    headerStyles() {
      if (this.windowWidth <= 980) {
        return { minWidth: '100%' }
      } else {
        return { minWidth : this.isCollapse ? 'calc(100% - 300px)' : 'calc(100% - 80px)' }
      }
    },
    isShowInput() {
      return this.$route.name === 'project-list' && this.windowWidth > 768
    }
  },
  methods: {
    clickBurger() {
      baseSidebarState.isDrawer = !baseSidebarState.isDrawer
    }
  }
}
</script>

<style scoped lang="scss">

.base-header {
  position: fixed;
  top: 0;
  z-index: 3;
  height: 70px;
  padding: 0 24px 0 32px;
  border-bottom: 2px #E6E6E6 solid;
  display: flex;
  box-sizing: border-box;
  //justify-content: flex-end;
  //gap: 39px;
  align-items: center;
  transition: 350ms linear;

  background-color: #FFFFFF;

  @media screen and (max-width: 980px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  &__info {
    margin-left: auto;
    //width: 402px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 26px;
    float: right;
  }

  &__icons-wrapper {
    width: 87px;
    height: 20px;
    display: flex;
    justify-content: space-between;
  }

  &__icon {

    > a {
      position: relative;
      background-color: #0ACF83;

      > span {
        position: absolute;
        color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        text-transform: capitalize;
        padding: 2px 6px;
        border-radius: 20px;
        top: -8px;
        left: 13px;
        transition: all 50ms linear;
      }

      > img {
        width: 24px;
        transition: width 150ms linear;
      }

      > img:hover {
        width: 28px;
      }

      > img:hover ~ span {
        padding: 0;
        border-radius: 50%;
        color: transparent;
        width: 8px;
        height: 8px;
        font-size: 0;
        top: 0px;
        left: 20px;
      }
    }

    &--red {
      width: 38px;

      > a {
        > span {
          background: #e53c0e;
        }
      }
    }

    &--green {
      width: 32px;

      > a {
        > span {
          background: #0AB258;
        }
      }
    }
  }

}

.showInput-enter-active, .showInput-leave-active {
  transition: all 450ms;
}

.showInput-leave-to
{
  opacity: 0;
  transform: matrix(1, 0, 1.5, 1, -100, 0);
}

.showInput-enter-from
{
  opacity: 0;
  transform: matrix(1, 0, -1.2, 1, -100, 0);
}

</style>
