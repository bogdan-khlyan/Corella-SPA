<template>
  <div class="current-user">

    <div class="current-user__avatar">
      <!--      <svg width="42" height="42" data-jdenticon-value="tedir"></svg>-->
      <div v-html='identicon'></div>
    </div>

    <div class="current-user__data">
      superadmin2021
      @gmail.com
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
  width: 240px;
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
    width: 150px;
    box-sizing: border-box;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #3B3B3B;
  }

  &__info {
    cursor: pointer;
  }
}
</style>