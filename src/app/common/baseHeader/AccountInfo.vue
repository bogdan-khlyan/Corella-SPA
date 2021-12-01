<template>
  <div class="current-user">

    <div class="current-user__avatar">
      <!--      <svg width="42" height="42" data-jdenticon-value="tedir"></svg>-->
      <div v-html='identicon'></div>
    </div>

    <div class="current-user__data">
      <span>Lana-lana</span>
      <span>superadmin2021@gmail.com</span>
    </div>

    <div class="current-user__info">
      <a href="#">
        <img src="@/assets/images/icons/header/icon-settings.svg">
      </a>
    </div>

  </div>
</template>

<script>
//import jdenticon from 'jdenticon';
import {toSvg} from "jdenticon";

export default {
  name: "currentUser",
  computed: {
    identicon: function () {
      return toSvg('Nielldcfguji,kumyjnhtbgvfl23', 42);
    }
  },
  mounted() {
    document.getElementsByTagName("svg")[0].style.borderRadius = '50%'
  }
}
</script>

<style scoped lang="scss">
.current-user {
  height: 42px;
  width: 282px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px #bfb9b9 solid;
    display: flex;
    justify-content: center;
    cursor: pointer;
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

  &__info {
    cursor: pointer;
  }
}
</style>