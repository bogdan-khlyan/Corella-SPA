<template>
  <header class="base-header" :style="headerStyles">
    <div v-if="windowWidth <= 980" style="min-width: 32px" @click="clickBurger">
      <transition name="el-fade-in-linear" appear mode="out-in">
        <img
          v-if="isDrawer"
          src="@/assets/images/icons/sidebar/icon-closed.svg"
          alt=""
        />
        <img v-else src="@/assets/images/icons/sidebar/burger.svg" alt="" />
      </transition>
    </div>

    <transition name="showInput">
      <header-input v-if="isShowInput" />
    </transition>
    <div class="base-header__info">
      <header-notifications v-if="windowWidth > 768" />

      <account-info />
    </div>
  </header>
</template>

<script>
import { mapState } from 'pinia'
import { useSidebarStore } from '@/store/modules/sidebar'

import windowWidthMixin from '@/mixins/window-width-mixin'

import sidebarCollapse from '@/components/base-wrapper/base-sidebar/sidebar-mixin'
import HeaderInput from '@/components/base-wrapper/base-header/HeaderInput'
import HeaderNotifications from '@/components/base-wrapper/base-header/HeaderNotifications'
import AccountInfo from '@/components/base-wrapper/base-header/AccountInfo'

export default {
  name: 'BaseHeader',
  components: {
    HeaderInput,
    AccountInfo,
    HeaderNotifications,
  },
  mixins: [sidebarCollapse, windowWidthMixin],
  data() {
    return {
      sidebarStore: useSidebarStore(),
    }
  },
  computed: {
    ...mapState(useSidebarStore, ['isCollapse', 'isDrawer']),

    headerStyles() {
      if (this.windowWidth <= 980) {
        return { minWidth: '100%' }
      }
      return {
        minWidth: this.isCollapse ? 'calc(100% - 300px)' : 'calc(100% - 80px)',
      }
    },
    isShowInput() {
      return this.$route.name === 'project-list' && this.windowWidth > 768
    },
  },
  methods: {
    clickBurger() {
      this.sidebarStore.isDrawer = !this.sidebarStore.isDrawer
    },
  },
}
</script>

<style scoped lang="scss">
.base-header {
  position: fixed;
  top: 0;
  z-index: 3;
  height: 70px;
  padding: 0 24px 0 32px;
  border-bottom: 2px #e6e6e6 solid;
  display: flex;
  box-sizing: border-box;
  //justify-content: flex-end;
  //gap: 39px;
  align-items: center;
  transition: 350ms linear;

  background-color: #ffffff;

  @media screen and (max-width: 980px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 768px) {
    height: 60px;
  }
  @media screen and (max-width: 480px) {
    height: 50px;
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
    height: 20px;
    display: flex;
    justify-content: space-between;
  }
}

.showInput-enter-active,
.showInput-leave-active {
  transition: all 450ms;
}

.showInput-leave-to {
  opacity: 0;
  transform: matrix(1, 0, 1.5, 1, -100, 0);
}

.showInput-enter-from {
  opacity: 0;
  transform: matrix(1, 0, -1.2, 1, -100, 0);
}
</style>
