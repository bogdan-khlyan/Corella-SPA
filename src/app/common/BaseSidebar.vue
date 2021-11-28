<template>
  <div class="base-sidebar"
       :class="isOpenSidebarMenu">

    <div class="base-sidebar__logo">
      <a href="#">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <span class="base-sidebar__logo--show base-sidebar__logo--close">Corella</span>
        <!--        <span :class="isOpenMenu?'base-sidebar__logo&#45;&#45;show':'base-sidebar__logo&#45;&#45;close'">Corella</span>-->
      </a>
    </div>

    <div class="base-sidebar__arrow">
      <div class="arrow-circle arrow-circle--show arrow-circle--close"
           @click="openSidebarMenu()">
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

        <hr>

        <div class="base-sidebar__title">Other</div>

        <div class="base-sidebar__item base-sidebar__item--ordinary">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/icon-messages.svg" alt="">

            <span>Messages</span>

            <div class="base-sidebar__item-avatars">
              <div>
                <img v-for="photo of photoMessages"
                     :key="photo.id"
                     :src="require(`@/assets/images/icons/sidebar/${photo.img}`)" alt="">
              </div>
            </div>

            <div class="base-sidebar__item-count">6</div>

          </a>
        </div>

        <div class="base-sidebar__item base-sidebar__item--ordinary">
          <a href="#">

            <img src="@/assets/images/icons/sidebar/icon-notification-wrapper.png" alt="">

            <span>Notification</span>

            <div class="base-sidebar__item-count">36</div>

          </a>
        </div>
      </div>

      <div class="base-sidebar__block-menu base-sidebar__block-menu--end">
        <a href="#">
          <img src="@/assets/images/icons/sidebar/icon-add.svg" alt="">
          <span>Create New Task</span>
        </a>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'base-sidebar',
  data() {
    return {
      isOpenMenu: false,
      photoMessages: [
        {id: 1, img: 'photo-mes1.png'},
        {id: 2, img: 'img2.png'},
        {id: 3, img: 'img3.png'},
      ]
    }
  },
  computed: {
    isOpenSidebarMenu() {
      return [{'base-sidebar--open': this.isOpenMenu},
        {'base-sidebar--close': !this.isOpenMenu}]
    }
  },
  methods: {
    openSidebarMenu() {
      this.isOpenMenu = !this.isOpenMenu
      this.$emit('openSidebar', this.isOpenMenu)
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

      &-avatars {
        opacity: 1;
        left: 158px;
      }

      &-count {
        height: 24px;
        padding: 0 8px;
        color: #FFFFFF;
        border-radius: 20px;
        //left: 253px;
        right: 13px;
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

      &-avatars {
        opacity: 0;
        left: 8px;
      }

      &-count {
        width: 6px;
        height: 6px;
        color: transparent;
        border-radius: 50%;
        right: 11px;
        top: 13px;
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

    &--show {

    }

    &--close {

    }
  }

  &__nav {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    hr {
      //width: 70%;
      height: 1px;
      border: none;
      border-radius: 2px;
      background-color: #FFFFFF;
      //margin: 10px 15px 14px 15px;
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
      transition: 200ms linear;

      > a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        text-decoration: none;
        gap: 12px;
        box-sizing: border-box;

        cursor: pointer;
        transition: 300ms linear;

        > img {
          transition: 300ms linear;
        }

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
          width: 107px;
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
    /* identical to box height, or 143% */
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

      > img {
        height: 24px;
        min-width: 23.6px;
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
        //display: flex;
        flex-direction: column;
        //align-items: center;
        //text-decoration: none;
        //padding: 0 13px;
        //cursor: pointer;
        //transition: all 350ms linear;

        > span {
          //font-family: Rubik;
          //font-style: normal;
          //font-weight: normal;
          //font-size: 14px;
          //line-height: 20px;
          //text-transform: capitalize;
          //color: #FFFFFF;
          //transition: 300ms linear;
          width: 96px;
          text-align: center;
        }
      }
    }

    &-avatars {
      flex-basis: 56px;
      height: 24px;
      position: absolute;
      transition: 300ms linear;

      > div {
        display: flex;
        box-sizing: border-box;
        position: relative;
        flex-direction: row;
        width: 56px;
        height: 24px;

        > img {
          position: absolute;
        }

        > img:nth-of-type(1) {
          right: 32px;
        }

        > img:nth-of-type(2) {
          right: 16px;
        }

        > img:nth-of-type(3) {
          right: 0px;
        }
      }
    }

    &-count {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #E53C0E;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      text-transform: capitalize;
      transition: 350ms linear;
    }
  }
}

@media screen and (max-height: 650px){
  .base-sidebar {

    &--open {

      .base-sidebar__item {
        &--top {
          height: 94px;

          > a {
            gap: 4px;
            height: 94px;
          }
        }
      }

      .base-sidebar__block-menu {

        &--top {
          height: 94px;
        }

        &--end {
          > a {
            height: 90px;
          }
        }
      }
    }

    &--close {

      .base-sidebar__item {

        &--top:nth-of-type(2) {
          top: 128px;
        }
      }

      .base-sidebar__block-menu {
        &--top {
          height: 94px;
        }
      }
    }

    &__block-menu {
      &--end {
        height: 90px;
        bottom: 10px;

        > a {
          gap: 8px;
        }
      }
    }

    &__title {
      margin: 10px auto 5px 18px;

      &:nth-of-type(2) {
        padding-left: 3px;
        margin: 18px auto 5px 18px;
      }
    }
  }
}
</style>
