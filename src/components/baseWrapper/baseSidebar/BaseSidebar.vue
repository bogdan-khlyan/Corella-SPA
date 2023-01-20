<template>
  <div
    class="base-sidebar"
    :class="isCollapse ? 'base-sidebar--open' : 'base-sidebar--close'"
    :style="drawerStyles"
  >
    <div class="base-sidebar__logo">
      <router-link to="/">
        <img src="@/assets/images/corella_icon.svg" alt="" />
        <span class="base-sidebar__logo--show base-sidebar__logo--close"
          >Corella</span
        >
      </router-link>
    </div>

    <div class="base-sidebar__arrow">
      <div
        class="arrow-circle arrow-circle--show arrow-circle--close"
        @click="toggleSidebarMenu()"
      >
        <img src="@/assets/images/icons/sidebar/icon-arrow.svg" alt="" />
      </div>
    </div>

    <nav class="base-sidebar__nav">
      <div class="base-sidebar__menu">
        <div
          v-if="topBlock"
          class="base-sidebar__block-menu base-sidebar__block-menu--top"
        >
          <div
            v-for="item in topBlock"
            :key="item.icon"
            class="base-sidebar__item base-sidebar__item--top"
          >
            <router-link
              :class="{ active: item.route === route }"
              :to="item.path ? item.path : item.getPath(this)"
            >
              <img :src="item.icon" alt="" />
              <span>{{ item.label }}</span>
            </router-link>
          </div>
        </div>

        <transition-group name="emerging-el" appear>
          <template v-for="option in contentBlock" :key="option.icon">
            <div v-if="option.type === 'TITLE'" class="base-sidebar__title">
              menu
            </div>

            <div
              v-if="option.type !== 'TITLE'"
              class="base-sidebar__item base-sidebar__item--ordinary"
            >
              <router-link
                :class="{ active: option.route === route }"
                :to="option.path ? option.path : option.getPath(this)"
              >
                <img :src="option.icon" alt="" />
                <span>{{ option.label }}</span>
              </router-link>
            </div>
          </template>
        </transition-group>
      </div>

      <div
        v-if="bottomButton && Array.isArray(bottomButton)"
        style="position: absolute; bottom: 16px"
      >
        <transition-group name="emerging-el" appear>
          <template v-for="option in bottomButton" :key="option.id">
            <div
              v-if="option.type !== 'TITLE'"
              class="base-sidebar__item base-sidebar__item--ordinary"
            >
              <router-link
                :class="{ active: option.route === route }"
                :to="option.path ? option.path : option.getPath(this)"
              >
                <img :src="option.icon" alt="" />
                <span>{{ option.label }}</span>
              </router-link>
            </div>
          </template>
        </transition-group>
      </div>

      <transition name="el-fade-in" mode="out-in">
        <div
          v-if="bottomButton && !Array.isArray(bottomButton)"
          :key="bottomButton.id"
          class="base-sidebar__block-menu base-sidebar__block-menu--end base-sidebar__item"
        >
          <router-link
            :class="{ active: bottomButton.route === route }"
            :to="
              bottomButton.path ? bottomButton.path : bottomButton.getPath(this)
            "
          >
            <img src="@/assets/images/icons/sidebar/icon-add.svg" alt="" />
            <span>{{ bottomButton.label }}</span>
          </router-link>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import {
  baseSidebarState,
  setSidebarCollapse,
} from '@/app/common/baseWrapper/baseSidebar/base-sidebar.state'
import { baseSidebarConfig } from '@/app/common/baseWrapper/baseSidebar/base-sidebar.config'
import { appState } from '@/app/app.state'

export default {
  name: 'BaseSidebar',
  computed: {
    drawerStyles() {
      if (this.windowWidth <= 980) {
        if (baseSidebarState.isDrawer) {
          return null
        }
        return 'transform: translateX(-300px)'
      }
      return null
    },
    route() {
      return this.$route.name
    },
    options() {
      const currentConfig = baseSidebarConfig.get(this.route) // забираем конфиг соответствующий текущему роуту
      if (currentConfig) {
        return currentConfig // если конфиг есть отдаем его
      }
      return baseSidebarConfig.get('default') // если конфига нет отдаем конфиг по умолчанию
    },
    topBlock() {
      const tops = this.options.filter((item) => item.top === true) // ищем элементы для верхнего блока с двумя кнопками
      if (tops.length === 0) {
        return null
      }
      if (tops.length === 2) {
        return tops.slice(0, 2)
      }
      return null
    },
    contentBlock() {
      if (this.topBlock) {
        const ids = this.topBlock.map((item) => item.id)
        return this.options.filter((option) => ids.indexOf(option.id) === -1)
      }
      return this.options
    },
    bottomButton() {
      return baseSidebarConfig
        .get('bottomButton') // достаем конфиги для нижней кнопки
        .get(this.route) // достаем конфиг для нижней кнопки для текущего роута
    },
    windowWidth() {
      return appState.windowWidth
    },
    isCollapse() {
      if (this.windowWidth <= 980) {
        return true
      }
      return baseSidebarState.isCollapse
    },
  },
  watch: {
    route() {
      if (this.windowWidth < 980) {
        baseSidebarState.isDrawer = false
      }
    },
  },
  methods: {
    toggleSidebarMenu() {
      setSidebarCollapse(!this.isCollapse)
    },
  },
}
</script>

<style scoped lang="scss">
.base-sidebar {
  width: 80px;
  position: fixed;
  padding-top: 12px;
  height: inherit;
  z-index: 10;
  background: linear-gradient(180deg, #20c560 0%, #04a481 100%);
  transition: all 350ms linear;

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

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
      &--top {
        height: 102px;
        width: 134px;

        > a {
          height: 102px;
          width: 134px;

          > span {
            opacity: 1;
            margin-top: 6px;
            max-width: 96px;
            transform: scale(1, 1);
            transition: all 350ms ease-in-out;
          }

          > img {
            margin-top: 0px;
          }
        }

        &:nth-of-type(1) {
          top: 0;
          left: 0;
        }

        &:nth-of-type(2) {
          top: 0;
          left: 50%;
        }
      }

      &--ordinary {
        > a {
          width: 268px;

          > span {
            left: 55px;
            opacity: 1;
          }
        }
      }
    }

    .base-sidebar__block-menu {
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

      &--top {
        height: 102px;
        width: 268px;
        background: rgba(4, 165, 128, 0.39);
        border-radius: 8px;
      }
    }

    .base-sidebar__nav {
      margin-top: 10px;
    }
  }

  &--close {
    width: 80px;

    .base-sidebar__logo {
      span {
        pointer-events: none;
      }
    }

    .base-sidebar__logo--close {
      left: 40px;
      opacity: 0;
    }

    .arrow-circle--close {
      transform: rotate(0deg);
    }

    .base-sidebar__nav {
      margin-top: 25px;
    }

    hr {
      width: 52px;
    }

    .base-sidebar__item {
      > a {
        > img {
          transform: scale(0.8, 0.8);
        }
      }

      &--top {
        height: 48px;
        width: 48px;

        > a {
          height: 48px;
          width: 48px;

          > span {
            transform: scale(0, 0);
            opacity: 0;
            margin-top: 0;
            font-size: 0;
            transition: all 350ms linear;
            pointer-events: none;
          }

          > img {
            margin-top: 18px;
          }
        }

        &:nth-of-type(1) {
          top: 0;
          left: 0;
        }

        &:nth-of-type(2) {
          top: 60px;
          left: 0;
        }
      }

      &--ordinary {
        > a {
          width: 48px;

          > span {
            left: 0px;
            opacity: 0;
            pointer-events: none;
          }
        }
      }
    }

    .base-sidebar__block-menu {
      &--top {
        width: 48px;
        background: transparent;
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
            pointer-events: none;
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
      background-color: #ffffff;
      transition: 350ms linear;
    }
  }

  &__arrow {
    position: absolute;
    right: -19px;
    top: 26px;
    cursor: pointer;

    @media screen and (max-width: 980px) {
      display: none;
    }

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
      min-height: 102px;
      height: 115px;
      position: relative;
      margin: auto;
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
    margin: 24px auto 10px 20.5px;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 250ms linear;
  }

  &__item {
    display: flex;

    > a {
      border-radius: 8px;
      border: none;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 13px;
      cursor: pointer;
      transition: all 400ms ease-in-out;

      &.active,
      &:hover {
        background: #1b1a18;
      }

      > span {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-transform: capitalize;
        color: #ffffff;
      }
    }

    &--ordinary {
      margin: 4px auto;
      transition: 300ms linear;

      > a {
        justify-content: space-between;
        position: relative;
        height: 48px;
        transition: 350ms linear;

        > img {
          height: 24px;
          transition: 300ms linear;
        }

        > span {
          position: absolute;
          width: 200px;
          transition: 300ms linear;
        }
      }
    }

    &--top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      transition: all 400ms ease-in-out;

      > a {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 400ms ease-in-out;

        > span {
          text-align: center;
        }

        > img {
          height: 24px;
          transition: all 350ms ease-in-out;
        }
      }
    }
  }

  .emerging-el-enter-active,
  .emerging-el-leave-active {
    transition: all 650ms ease-in-out;
  }

  .emerging-el-enter-from, .emerging-el-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: scale3d(0, 0, 0);
  }

  .emerging-el-enter-to,
  .emerging-el-leave-from {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>
