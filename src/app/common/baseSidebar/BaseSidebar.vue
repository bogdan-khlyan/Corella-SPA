<template>
  <div class="base-sidebar"
       :class="[{'base-sidebar--open': this.isCollapse},
                {'base-sidebar--close': !this.isCollapse}]">

    <div class="base-sidebar__logo">
      <a href="#">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <span class="base-sidebar__logo--show base-sidebar__logo--close">Corella</span>
      </a>
    </div>

    <div class="base-sidebar__arrow">
      <div class="arrow-circle arrow-circle--show arrow-circle--close"
           @click="toggleSidebarMenu()">
        <img src="@/assets/images/icons/sidebar/icon-arrow.svg">
      </div>
    </div>

    <nav class="base-sidebar__nav">

      <div class="base-sidebar__menu">

        <div class="base-sidebar__block-menu base-sidebar__block-menu--top">

          <div class="base-sidebar__item base-sidebar__item--top">
            <a href="#">
              <img src="@/assets/images/icons/sidebar/icon-projects.svg" alt="">
              <span>Projects</span>
            </a>
          </div>

          <div class="base-sidebar__item base-sidebar__item--top">
            <a href="#">
              <img src="@/assets/images/icons/sidebar/icon-user-managament.svg" alt="">
              <span>user Management</span>
            </a>
          </div>
        </div>

        <div class="base-sidebar__title">menu</div>

        <div class="base-sidebar__item base-sidebar__item--ordinary">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/icon-board.svg" alt="">
            <span>Board</span>
          </a>
        </div>

        <div class="base-sidebar__item base-sidebar__item--ordinary">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/icon-hotfix-wrapper.png" alt="">
            <span>Hot-fixes</span>
          </a>
        </div>
      </div>

      <div class="base-sidebar__block-menu base-sidebar__block-menu--end base-sidebar__item">
        <a href="#">
          <img src="@/assets/images/icons/sidebar/icon-add.svg" alt="">
          <span>Create New Task</span>
        </a>
      </div>

    </nav>
  </div>
</template>

<script>
import {baseSidebarState} from "@/app/common/baseSidebar/base-sidebar.state";
import {setSidebarCollapse} from "@/app/common/baseSidebar/base-sidebar.state";

export default {
  name: 'base-sidebar',
  computed: {
    isCollapse() {
      return baseSidebarState.isCollapse
    }
  },
  methods: {
    toggleSidebarMenu() {
      setSidebarCollapse(!this.isCollapse)
    }
  }
}
</script>

<style scoped lang="scss">
.base-sidebar {
  position: fixed;
  padding-top: 12px;
  height: 100vh;
  z-index: 10;
  background: linear-gradient(180deg, #20C560 0%, #04A481 100%);
  transition: all 350ms linear;

  &--open {
    width: 300px;

    .base-sidebar__logo--show {
      left: 70px;
      opacity: 1;
    }

    .arrow-circle--show {
      transform: rotate(180deg);
    }

    hr {
      width: 268px;
    }

    .base-sidebar__item {

      &--ordinary {
        > a {
          width: 268px;
          border-radius: 7px;

          > span {
            left: 55px;
            opacity: 1;
          }
        }
      }

      &--top {
        height: 102px;
        width: 134px;

        > a {
          justify-content: center;
          gap: 8px;
          height: 102px;
          border-radius: 8px;
          width: 134px;

          > span {
            left: 55px;
            opacity: 1;
            transition-delay: 100ms;
          }
        }
      }

      &--top:nth-of-type(1) {
        left: 16px;
        top: 75px;
      }

      &--top:nth-of-type(2) {
        left: 150px;
        top: 75px;
      }
    }

    .base-sidebar__block-menu {

      &--top {
        width: 268px;
        height: 102px;
        flex-direction: row;
        background-color: rgba(4, 165, 128, 0.39);
        border-radius: 8px;
        transition-delay: 200ms;
      }

      &--end {
        > a {
          background: rgba(24, 187, 105, 0.52);
          width: 268px;
          border-radius: 7px;
          height: 102px;

          > img {
            margin-top: 0;
          }

          > span {
            opacity: 1;
          }
        }
      }
    }
  }

  &--close {
    width: 80px;

    .base-sidebar__logo--close {
      left: 40px;
      opacity: 0;
    }

    .arrow-circle--close {
      transform: rotate(0deg);
    }

    hr {
      width: 52px;
    }

    .base-sidebar__item {

      &--ordinary {
        > a {
          width: 48px;
          border-radius: 16px;

          > span {
            left: 0px;
            opacity: 0;
          }
        }
      }

      &--top {
        height: 48px;
        width: 48px;

        > a {
          height: 48px;
          width: 48px;
          border-radius: 16px;
          padding-top: 11px;

          > span {
            left: 0px;
            opacity: 0;
          }
        }
      }

      &--top:nth-of-type(1) {
        left: 16px;
        top: 75px;
      }

      &--top:nth-of-type(2) {
        left: 16px;
        top: 135px;
      }
    }

    .base-sidebar__block-menu {
      &--top {
        background-color: transparent;
        height: 102px;
        flex-direction: column;
        transition: all 350ms linear;
      }

      &--end {
        > a {
          background: rgba(24, 187, 105, 0);
          width: 48px;
          height: 48px;
          border-radius: 16px;

          > img {
            margin-top: 32px;
          }

          > span {
            opacity: 0;
          }
        }
      }
    }
  }

  &__logo {
    display: flex;
    margin: 0 17px;

    > a {
      display: flex;
      text-decoration: none;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      gap: 20px;

      > img {
        width: 46px;
        object-fit: contain;
        z-index: 1;
      }

      > span {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #323232;
        transition: 300ms linear;
        position: absolute;
      }
    }
  }

  &__nav {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    hr {
      height: 1px;
      border: none;
      border-radius: 2px;
      background-color: #FFFFFF;
      transition: 350ms linear;
    }
  }

  &__arrow {
    position: absolute;
    right: -19px;
    top: 26px;
    cursor: pointer;

    .arrow-circle {
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: #323232;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 350ms linear;
    }
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }

  &__block-menu {
    display: flex;

    &--top {
      margin: auto;
      align-items: center;
      transition: all 350ms linear;
    }

    &--end {
      position: absolute;
      flex-direction: column;
      justify-content: center;
      height: 102px;
      bottom: 16px;
      transition: 350ms linear;

      > a {
        justify-content: center;
        flex-direction: column;
        position: relative;
        padding: 0px !important;
        gap: 12px;
        box-sizing: border-box;
        transition: 300ms linear;

        > img {
          transition: 300ms linear;
          height: 32px;
          width: 32px;
        }

        > span {
          width: max-content;
        }
      }
    }
  }

  &__title {
    margin: 24px auto 10px 18px;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;

    :nth-of-type(1) {
      padding-left: 5px;
    }
  }

  &__item {
    display: flex;

    > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 13px;
      cursor: pointer;
      transition: all 350ms linear;

      &:hover {
        background: #1B1A18;
      }

      > span {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-transform: capitalize;
        color: #FFFFFF;
        transition: 300ms linear;
      }
    }

    &--ordinary {
      margin: 4px auto;
      transition: 200ms linear;

      > a {
        justify-content: space-between;
        position: relative;
        height: 48px;

        > img {
          height: 24px;
          min-width: 23.6px;
        }

        > span {
          position: absolute;
          width: 200px;
        }
      }
    }

    &--top {
      position: absolute;
      transition: 350ms linear;

      > a {
        flex-direction: column;
        transition: 300ms linear;

        > img {
          height: 24px;
          min-width: 23.6px;
        }

        > span {
          width: 96px;
          text-align: center;
          transition: 200ms linear;
        }
      }
    }
  }
}

//@media screen and (max-height: 650px) {
//  .base-sidebar {
//
//    &--open {
//
//      .base-sidebar__item {
//        &--top {
//          height: 94px;
//
//          > a {
//            gap: 4px;
//            height: 94px;
//          }
//        }
//      }
//
//      .base-sidebar__block-menu {
//
//        &--top {
//          height: 94px;
//        }
//
//        &--end {
//          > a {
//            height: 90px;
//          }
//        }
//      }
//    }
//
//    &--close {
//
//      .base-sidebar__item {
//
//        &--top:nth-of-type(2) {
//          top: 128px;
//        }
//      }
//
//      .base-sidebar__block-menu {
//        &--top {
//          height: 94px;
//        }
//      }
//    }
//
//    &__block-menu {
//      &--end {
//        height: 90px;
//        bottom: 10px;
//
//        > a {
//          gap: 8px;
//        }
//      }
//    }
//
//    &__title {
//      margin: 10px auto 5px 18px;
//
//      &:nth-of-type(2) {
//        padding-left: 3px;
//        margin: 18px auto 5px 18px;
//      }
//    }
//  }
//}
</style>
