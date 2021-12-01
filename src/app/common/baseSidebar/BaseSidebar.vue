<template>
  <div class="base-sidebar"
       :class="isCollapse ? 'base-sidebar--open' : 'base-sidebar--close'">

    <div class="base-sidebar__logo">
      <router-link to="/">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <span class="base-sidebar__logo--show base-sidebar__logo--close">Corella</span>
      </router-link>
    </div>

    <div class="base-sidebar__arrow">
      <div class="arrow-circle arrow-circle--show arrow-circle--close"
           @click="toggleSidebarMenu()">
        <img src="@/assets/images/icons/sidebar/icon-arrow.svg">
      </div>
    </div>

    <nav class="base-sidebar__nav">

      <div class="base-sidebar__menu">

        <div v-if="topBlock" class="base-sidebar__block-menu base-sidebar__block-menu--top">
          <div class="base-sidebar__item base-sidebar__item--top"
               v-for="item in topBlock" :key="item.icon">
            <router-link
                :class="{'active': item.route === route}"
                :to="item.path ? item.path : item.getPath(this)">
              <img :src="item.icon" alt="">
              <span>{{ item.label }}</span>
            </router-link>
          </div>
        </div>


        <template v-for="option in contentBlock" :key="option.icon">
          <div v-if="option.type === 'TITLE'" class="base-sidebar__title">menu</div>
          <div v-else class="base-sidebar__item base-sidebar__item--ordinary">
            <router-link
                :class="{'active': option.route === route}"
                :to="option.path ? option.path : option.getPath(this)">
              <img :src="option.icon" alt="">
              <span>{{ option.label }}</span>
            </router-link>
          </div>
        </template>

      </div>

      <div v-if="bottomButton" class="base-sidebar__block-menu base-sidebar__block-menu--end base-sidebar__item">
        <router-link :to="bottomButton.path ? bottomButton.path : bottomButton.getPath(this)">
          <img src="@/assets/images/icons/sidebar/icon-add.svg" alt="">
          <span>{{ bottomButton.label }}</span>
        </router-link>
      </div>

    </nav>
  </div>
</template>

<script>
import {baseSidebarState} from "@/app/common/baseSidebar/base-sidebar.state";
import {setSidebarCollapse} from "@/app/common/baseSidebar/base-sidebar.state";
import {baseSidebarConfig} from "@/app/common/baseSidebar/base-sidebar.config";

export default {
  name: 'base-sidebar',
  computed: {
    route() {
      return this.$route.name
    },
    options() {
      const currentConfig = baseSidebarConfig.get(this.route) // забираем конфиг соответствующий текущему роуту
      if (currentConfig) {
        return currentConfig // если конфиг есть отдаем его
      } else {
        return baseSidebarConfig.get('default') // если конфига нет отдаем конфиг по умолчанию
      }
    },
    topBlock() {
      const tops = this.options.filter(item => item.top === true) // ищем элементы для верхнего блока с двумя кнопками
      if (tops.length === 2) {
        return tops
      } else {
        throw new Error('asfa')
      }
    },
    contentBlock() {
      return this.options.filter(item => !item.top)
    },
    bottomButton() {
      const currentBottomButtonConfig = baseSidebarConfig
          .get('bottomButton')
          .get(this.route)
      if (currentBottomButtonConfig) {
        return currentBottomButtonConfig
      } else {
        return null
      }
    },
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
  width: 80px;
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
        top: 80px;
        //animation: test 350ms linear;
      }

      &--top:nth-of-type(2) {
        left: 150px;
        top: 80px;
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

    .base-sidebar__nav {
      margin-top: 15px;
    }
  }

  &--close {
    width: 80px;

    .base-sidebar__nav {
      margin-top: 25px;
    }

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
        top: 95px;
      }

      &--top:nth-of-type(2) {
        left: 16px;
        top: 152px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: all 400ms ease-in-out;

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
    //margin: 24px auto 10px 18px;
    margin: 24px auto 10px 20.5px;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;
    transition: all 250ms linear;
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

      &.active, &:hover {
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
