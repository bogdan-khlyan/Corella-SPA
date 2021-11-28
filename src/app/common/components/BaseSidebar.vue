<template>
  <div class="base-sidebar">
    <div class="base-sidebar__logo">
      <a href="#">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <span>Corella</span>
      </a>
    </div>
    <nav class="base-sidebar__nav">
      <div class="base-sidebar__nav--item">
        <a href="#">
          <svg-icon :icon="require('@/assets/images/icons/sidebar/plus.svg')"></svg-icon>
        </a>
      </div>
      <hr>
      <div class="base-sidebar__nav--item">
        <a href="#">
          <svg-icon :icon="require('@/assets/images/icons/sidebar/project.svg')"></svg-icon>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'base-sidebar',
}
</script>

<style scoped lang="scss">
.base-sidebar {
  position: fixed;
  padding-top: 10px;

  width: 80px;
  height: 100vh;

  background: linear-gradient(180deg, #20C560 0%, #04A481 100%);
  transition: 300ms;

  box-shadow: 3px 0px 7px rgba(14, 56, 41, 0.26);
  border-radius: 0px 16px 16px 0px;

  //&:hover {
  //  width: 260px;
  //  border-top-right-radius: 8px;
  //  border-bottom-right-radius: 8px;
  //  box-shadow: 3px 0px 7px rgba(14, 56, 41, 0.26);
  //}

  .svg-icon {
    width: 24px;
    height: 24px;
  }

  &__logo {
    display: flex;
    justify-content: center;
    > a {
      display: flex;
      > img {
        width: 46px;
        object-fit: contain;
      }
      > span {
        display: none;
      }
    }
  }

  &__nav {
    margin-top: 40px;

    &--item {
      display: flex;
      justify-content: center;

      margin-top: 4px;
      margin-bottom: 4px;
      > a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 48px;
        height: 48px;

        border-radius: 16px;

        cursor: pointer;
        transition: 200ms;

        &:hover {
          background: #1B1A18;
        }

      }
    }


    hr {
      width: 48px;
      height: 1px;
      border: none;
      border-radius: 2px;
      background-color: #FFFFFF;
    }

  }

}
</style>
