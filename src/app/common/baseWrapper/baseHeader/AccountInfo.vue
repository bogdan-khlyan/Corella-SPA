<template>
  <div class="current-user" ref="root">
    <div class="current-user__content">
      <transition name="el-fade-in-linear">
        <div v-if="userInfo._id && windowWidth > 600"
             class="current-user__avatar"
             @click="$router.push('/profile')">
          <div v-html="userAvatar"></div>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div v-if="userInfo._id && windowWidth > 600"
             class="current-user__data">
          <span>{{userInfo.username}}</span>
          <span>{{userInfo.email}}</span>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div v-if="!userInfo._id"
             v-loading="true"
             class="current-user__content--loading"/>
      </transition>
    </div>

    <el-popover
        placement="bottom"
        :width="240"
        trigger="click"
        @show="isDropDown = true"
        @hide="isDropDown = false">
      <template #reference>
        <div v-if="windowWidth > 600" class="current-user__more">
          <a :class="{'active': isDropDown}">
            <img src="@/assets/images/icons/header/icon-settings.svg" alt="">
          </a>
        </div>
        <div v-else class="current-user__avatar">
          <div v-html="userAvatar"></div>
        </div>
      </template>
      <div class="current-user__drop-down">
        <div class="current-user__drop-down--name">
          <span>{{userInfo.username}}</span>
        </div>
        <div class="current-user__drop-down--email">
          <span>{{userInfo.email}}</span>
        </div>
        <hr>
        <div class="current-user__drop-down--link">
          <router-link to="/profile">Account settings</router-link>
        </div>
        <div class="current-user__drop-down--logout">
          <a @click="logout">Log out</a>
        </div>
      </div>
    </el-popover>

  </div>
</template>

<script>
import {toSvg} from "jdenticon";
import {appState} from "@/app/app.state";
import {userInstanceState} from "@/app/userInstance/user-instance.state";
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

export default {
  name: "currentUser",
  computed: {
    userInfo() {
      return userInstanceState.info
    },
    windowWidth() {
      return appState.windowWidth
    },
    avatarSize() {
      if (this.windowWidth > 768) {
        return 42
      } else if (this.windowWidth > 480) {
        return  38
      } else {
        return 36
      }
    },
    userAvatar: function () {
      return toSvg(this.userInfo.avatar, this.avatarSize)
    }
  },
  data() {
    return {
      isDropDown: false
    }
  },
  methods: {
    logout() {
      userInstanceController.logout()
    }
  }
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
    border: 1px #bfb9b9 solid;
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
    color: #3B3B3B;
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

      &:hover, &.active {
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

      background: #E9E9E9;
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

        color: #FF0000;
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
      width: 34px!important;
      height: 34px!important;
    }
  }
}
</style>
