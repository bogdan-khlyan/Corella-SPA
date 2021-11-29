<template>
  <header class="base-header"
          :style="{minWidth : isCollapse?'calc(100% - 300px)':'calc(100% - 80px)'}">

    <div class="base-header__search">

      <input type="text" placeholder="search..."
             v-model="searchText"
             @input="setSearchText">

      <div>
        <img src="@/assets/images/icons/header/loupe.svg">
      </div>

    </div>

    <div class="base-header__info">

      <div class="base-header__icons-wrapper">

        <div class="base-header__icon base-header__icon--message">
          <a href="#">
            <img src="@/assets/images/icons/header/icon-messages.svg">
            <span>2</span>
          </a>
        </div>

        <div class="base-header__icon base-header__icon--notification">
          <a href="#">
            <img src="@/assets/images/icons/header/icon-notification.svg">
            <span>16</span>
          </a>
        </div>
      </div>

      <current-user/>
    </div>
  </header>
</template>

<script>
import CurrentUser from "./currentUser";
import {baseSidebarState} from "@/app/common/baseSidebar/base-sidebar.state";
import {setHeaderSearchValue} from "@/app/common/baseHeader/base-header.state";

export default {
  name: 'base-header',
  components: {CurrentUser},
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    isCollapse() {
      return baseSidebarState.isCollapse
    }
  },
  methods:{
    setSearchText(){
      if(this.searchText.trim()!=='') {
        setHeaderSearchValue(this.searchText)
      }
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
  padding: 0 24px 0 88px;
  border-bottom: 2px #E6E6E6 solid;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  transition: 350ms linear;
  background-color: rgba(255, 255, 255, .96);

  &__info {
    width: 360px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 26px;
    float: right;
  }

  &__search {
    position: relative;
    margin-top: 10px;
    min-width: calc(100% - 400px);

    > div {
      position: absolute;
      cursor: pointer;
      top: 1px;
      left: 0;

      > img {
        width: 32px;
        transition: all 150ms ease-in-out;
      }
    }

    > div > img:hover {
      width: 35px;
    }

    input {
      width: 98%;
      height: 40px;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      text-transform: capitalize;
      color: #706f7c;
      padding-left: 38px;
      border: none;
    }

    input::placeholder {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      text-transform: capitalize;
      color: #BDBCC8;
    }
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

    &--notification {
      width: 38px;

      > a {
        > span {
          background: #E53C0E;
        }
      }
    }

    &--message {
      width: 32px;

      > a {
        > span {
          background: #0AB258;
        }
      }
    }
  }
}

</style>
