<template>
  <div class="base-sidebar"
       :class="isOpenSidebarMenu">

    <div class="base-sidebar__logo">
      <a href="#">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <span :class="isOpenMenu?'base-sidebar__logo--show':'base-sidebar__logo--close'">Corella</span>
      </a>
    </div>

    <div class="base-sidebar__arrow">
      <div class="base-sidebar__arrow--circle"
           :class="isOpenMenu?'base-sidebar__arrow--circle--show':'base-sidebar__arrow--circle--close'"
           @click="clickHandler()">
        <img src="@/assets/images/icons/sidebar/vector.png">
      </div>
    </div>

    <nav class="base-sidebar__nav">

      <div class="base-sidebar__nav--menu">

        <div class="base-sidebar__nav--top-block"
             :class="isOpenMenu?'base-sidebar__nav--top-block--show':'base-sidebar__nav--top-block--close'">

          <div class="base-sidebar__nav--top-block--item"
               :class="isOpenMenu?'base-sidebar__nav--top-block--item--open':'base-sidebar__nav--top-block--item--close'">
            <a href="#">
              <img src="@/assets/images/icons/sidebar/icon-projects.png" alt="">
              <span :class="isOpenMenu?'show':'close'">Projects</span>
            </a>
          </div>

          <div class="base-sidebar__nav--top-block--item"
               :class="isOpenMenu?'base-sidebar__nav--top-block--item--open':'base-sidebar__nav--top-block--item--close'">
            <a href="#">
              <img src="@/assets/images/icons/sidebar/icon-user-managament.png" alt="">
              <span :class="isOpenMenu?'show':'close'">user Management</span>
            </a>
          </div>

        </div>

        <div class="base-sidebar__nav--title">menu</div>
        <div class="base-sidebar__nav--item"
             :class="isOpenMenu?'base-sidebar__nav--item--open':'base-sidebar__nav--item--close'">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/icon-board.png" alt="">
            <span :class="isOpenMenu?'show':'close'">Board</span>
          </a>
        </div>
        <div class="base-sidebar__nav--item"
             :class="isOpenMenu?'base-sidebar__nav--item--open':'base-sidebar__nav--item--close'">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/icon-hotfix-wrapper.png" alt="">
            <span :class="isOpenMenu?'show':'close'">Hot-fixes</span>
          </a>
        </div>

        <hr :class="isOpenMenu?'hr--show':'hr--close'">

        <div class="base-sidebar__nav--title">Other</div>
        <div class="base-sidebar__nav--item"
             :class="isOpenMenu?'base-sidebar__nav--item--open':'base-sidebar__nav--item--close'">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/tab-messages-wrapper.png" alt="">

            <span :class="isOpenMenu?'show':'close'">Messages</span>

            <div :class="isOpenMenu?'base-sidebar__nav--item--avatars--show'
            :'base-sidebar__nav--item--avatars--close'"
                 class="base-sidebar__nav--item--avatars">
              <div>
                <img v-for="photo of photoMessages"
                     :key="photo.id"
                     :src="require(`@/assets/images/icons/sidebar/${photo.img}`)" alt="">
              </div>
            </div>

            <div class="base-sidebar__nav--item--count"
                 :class="isOpenMenu?'base-sidebar__nav--item--count--show'
            :'base-sidebar__nav--item--count--close'">6
            </div>

          </a>
        </div>

        <div class="base-sidebar__nav--item"
             :class="isOpenMenu?'base-sidebar__nav--item--open':'base-sidebar__nav--item--close'">
          <a href="#">
            <img src="@/assets/images/icons/sidebar/icon-notification-wrapper.png" alt="">

            <span :class="isOpenMenu?'show':'close'">Notification</span>

            <div class="base-sidebar__nav--item--count"
                 :class="isOpenMenu?'base-sidebar__nav--item--count--show'
            :'base-sidebar__nav--item--count--close'">
              36
            </div>
          </a>
        </div>
      </div>

      <div class="base-sidebar__nav--block"
           :class="isOpenMenu?'base-sidebar__nav--block--show':'base-sidebar__nav--block--close'">
        <a href="#">
          <img src="@/assets/images/icons/sidebar/icon-add.png" alt="">
          <span :class="isOpenMenu?'show':'close'">Create New Task</span>
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
  methods:{
    clickHandler(){
      this.isOpenMenu = !this.isOpenMenu
      this.$emit('openSidebar', this.isOpenMenu)
    }
  }
}
</script>

<style scoped lang="scss">

.show {
  left: 55px;
  opacity: 1;
}

.close {
  left: 0px;
  opacity: 0;
}

.base-sidebar {
  position: fixed;
  padding-top: 12px;
  height: 100vh;
  z-index: 10;

  background: linear-gradient(180deg, #20C560 0%, #04A481 100%);
  transition: all 350ms linear;

  &--open {
    width: 300px;
  }

  &--close {
    width: 80px;
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
      left: 70px;
      opacity: 1;
    }

    &--close {
      left: 40px;
      opacity: 0;
    }
  }

  &__nav {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    &--item {
      display: flex;
      margin: 4px auto;
      transition: 200ms linear;

      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        text-decoration: none;
        padding: 0 13px;
        height: 48px;
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
          position: absolute;
          transition: 300ms linear;
          width: 200px;
        }

      }

      &--avatars {
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

        &--show {
          opacity: 1;
          left: 158px;
        }

        &--close {
          opacity: 0;
          left: 8px;
        }
      }

      &--count {
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

        &--show {
          height: 24px;
          padding: 0 8px;
          color: #FFFFFF;
          border-radius: 20px;
          //left: 253px;
          right: 13px;
        }

        &--close {
          width: 6px;
          height: 6px;
          color: transparent;
          border-radius: 50%;
          right: 11px;
          top: 13px;
        }
      }

      &--open {
        > a {
          width: 268px;
          border-radius: 7px;
        }
      }

      &--close {
        > a {
          width: 48px;
          border-radius: 16px;
        }
      }
    }

    &--top-block {
      margin: auto;
      display: flex;
      align-items: center;
      transition:all 350ms linear;

      &--show {
        width: 268px;
        height: 102px;
        flex-direction: row;
        background-color: rgba(4, 165, 128, 0.39);
        border-radius: 8px;
        transition-delay:200ms;
      }

      &--close {
        background-color: transparent;
        height: 102px;
        flex-direction: column;
        transition:background-color 350ms linear;
      }

      &--item {
        display: flex;
        position: absolute;
        transition: 350ms linear;

        > a {
          display: flex;
          flex-direction: column;
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
            width: 96px;
            text-align: center;
          }
        }

        &--open {
          height: 102px;
          width: 134px;

          >a{
            justify-content: center;
            gap: 8px;
            height: 102px;
            border-radius: 8px;
            width: 134px;
          }

        }

        &--close {
          height: 48px;
          width: 48px;

          > a {
            height: 48px;
            width: 48px;
            border-radius: 16px;
            padding-top:11px
          }
        }
        &--close:nth-of-type(1) {
          left: 16px;
          top: 75px;
        }
        &--close:nth-of-type(2) {
          left: 16px;
          top: 135px;
        }

        &--open:nth-of-type(1) {
          left: 16px;
          top: 75px;
        }
        &--open:nth-of-type(2) {
          left: 150px;
          top: 75px;
        }
      }
    }

    &--block {
      display: flex;
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

      &--show {
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

      &--close {
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

    &--menu {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
    }

    hr {
      //width: 70%;
      height: 1px;
      border: none;
      border-radius: 2px;
      background-color: #FFFFFF;
      //margin: 10px 15px 14px 15px;
      transition: 350ms linear;
    }

    .hr--close {
      width: 52px;
    }

    .hr--show {
      width: 268px;
    }

    &--title {
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
  }

  &__arrow {
    position: absolute;
    right: -19px;
    top: 26px;
    cursor: pointer;

    &--circle {
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: #323232;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 350ms linear;

      &--show{
        transform: rotate(180deg);
      }

      &--close{
        transform: rotate(0);
      }
    }
  }

}

@media screen and (max-height: 650px){
  .base-sidebar {

    &__nav {
      margin-top: 10px;

      &--item {
        margin: 0px auto;
      }

      &--top-block {

        &--show {
          height: 90px;
        }

        &--close {
          height: 90px;
        }

        &--item {

          &--open {
            height: 90px;
            width: 134px;

            >a{
              height: 90px;
            }

          }

          &--close:nth-of-type(2) {
            top: 125px;
          }
        }
      }

      hr {
        margin-bottom: -2px;
        margin-top: 4px;
      }

      &--block {
        height: 80px;
        bottom: 10px;

        > a {
          gap: 5px;
        }

        &--show {
          > a {
            height: 80px;
          }
        }

        &--close {
          > a {
            width: 48px;
            height: 48px;

            >img{
              margin-top: 23px;
            }
          }
        }
      }

      &--title {
        margin: 20px auto 9px 18px;
        line-height: 15px;
      }
    }

  }
}

</style>
