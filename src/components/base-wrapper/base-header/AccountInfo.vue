<template>
  <div ref="root" class="current-user">
    <div class="current-user__content">
      <transition name="el-fade-in-linear">
        <div
          v-if="user && windowWidth > 600"
          class="current-user__avatar"
          @click="$router.push('/profile')"
        >
          <base-user-avatar :avatar="user.login" :size="40" />
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div v-if="user && windowWidth > 600" class="current-user__data">
          <span>{{ user.login }}</span>
          <span>{{ user.name }}</span>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div
          v-if="!user"
          v-loading="true"
          class="current-user__content--loading"
        />
      </transition>
    </div>

    <el-popover
      placement="bottom"
      :width="240"
      trigger="click"
      @show="isDropDown = true"
      @hide="isDropDown = false"
    >
      <template #reference>
        <div v-if="windowWidth > 600" class="current-user__more">
          <a :class="{ active: isDropDown }">
            <img src="@/assets/images/icons/header/icon-settings.svg" alt="" />
          </a>
        </div>
        <div v-else class="current-user__avatar">
          <base-user-avatar v-if="user" :avatar="user.login" :size="40" />
        </div>
      </template>
      <div v-if="user" class="current-user__drop-down">
        <div class="current-user__drop-down--name">
          <span>{{ user.login }}</span>
        </div>
        <div v-if="user" class="current-user__drop-down--email">
          <span>{{ user.name }}</span>
        </div>
        <hr />
        <div class="current-user__drop-down--link">
          <router-link to="/profile"> Account settings</router-link>
        </div>
        <div class="current-user__drop-down--logout">
          <a @click="logout">Log out</a>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
import windowWidthMixin from '@/mixins/window-width-mixin'

import BaseUserAvatar from '@/components/BaseUserAvatar'
// import { appState } from '@/app/app.state'
// import { userInstanceState } from '@/app/userInstance/user-instance.state'
import { mapState } from 'pinia'
import { useUserStore } from '@/store/modules/user'

export default {
  name: 'CurrentUser',
  components: { BaseUserAvatar },
  mixins: [windowWidthMixin],
  data() {
    return {
      isDropDown: false,
      userStore: useUserStore(),
    }
  },
  computed: {
    ...mapState(useUserStore, ['user']),

    avatarSize() {
      if (this.windowWidth > 768) {
        return 42
      }
      if (this.windowWidth > 480) {
        return 38
      }
      return 36
    },
  },
  methods: {
    async logout() {
      await this.userStore.logout()
      this.$router.push('/login-page')
    },
  },
}
</script>

<style scoped lang="scss">
.current-user {
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__avatar {
    margin-right: 12px;

    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 38px;
      height: 38px;
    }
    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
    @media screen and (max-width: 480px) {
      width: 36px;
      height: 36px;
    }
  }

  &__data {
    width: 193px;
    box-sizing: border-box;
    font-family: Rubik;
    font-style: normal;
    line-height: 20px;
    color: #3b3b3b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span:nth-of-type(1) {
      font-weight: 500;
      font-size: 14px;
    }

    span:nth-of-type(2) {
      font-size: 12px;
      font-weight: normal;
    }
  }

  &__content {
    position: relative;
    min-width: 200px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 600px) {
      min-width: unset;
    }

    &--loading {
      position: absolute;
      top: 0;
      left: 0;

      width: 200px;
      height: 50px;
    }
  }

  &__more {
    cursor: pointer;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 48px;
      height: 48px;

      transition: 200ms;

      border-radius: 50%;

      &:hover,
      &.active {
        background: rgba(32, 197, 97, 0.14);
      }
    }
  }

  &__drop-down {
    padding: 20px 20px 14px 20px;

    &--name {
      margin-bottom: 12px;

      > span {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;

        color: #212121;
      }
    }

    &--email {
      > span {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;

        color: #212121;
      }
    }

    hr {
      margin-top: 12px;
      margin-bottom: 12px;

      width: 100%;
      height: 1px;
      border: none;

      background: #e9e9e9;
      border-radius: 2px;
    }

    &--link {
      margin-top: 4px;
      margin-bottom: 4px;

      > a {
        display: block;
        width: 100%;
        padding: 4px 4px 4px 0;

        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;

        color: #212121;
      }
    }

    &--logout {
      margin-top: 4px;
      //margin-bottom: 6px;
      > a {
        display: block;
        width: 100%;
        padding: 4px 4px 4px 0;

        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        text-decoration: none;

        color: #ff0000;
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="scss">
.current-user__content--loading {
  .el-loading-mask {
    svg {
      width: 34px !important;
      height: 34px !important;
    }
  }
}
</style>
