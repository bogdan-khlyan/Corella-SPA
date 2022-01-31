<template>
<div class="socials-wrapper">
  <div class="socials-wrapper__title">
    <span>Submit your profile</span>
  </div>

  <div class="socials-wrapper__buttons">
    <a href="#" class="socials-wrapper__btn socials-wrapper__btn--google">
      <img class="socials-wrapper__btn-icon"
           src="@/assets/images/icons/login/icon-google.svg"
           alt="google">
      <span>Google</span>
    </a>
    <a href="#" class="socials-wrapper__btn socials-wrapper__btn--telegram">
      <img class="socials-wrapper__btn-icon"
           src="@/assets/images/icons/login/icon-telegram.svg"
           alt="telegram">
      <span>Telegram</span>
    </a>
  </div>

</div>
</template>

<script>
export default {
  name: "Socials"
}
</script>

<style lang="scss" scoped>
.socials-wrapper {
  &__title {
    text-align: left;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 1280.98px) {
      &:not(:last-child) {
        margin-bottom: 33px;
      }
    }
    > span {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 37px;
      color: #393939;
      @media screen and (max-width: 1280.98px) {
        font-size: 22px;
      }
    }
  }

  &__buttons {
    @media screen and (min-width: 560.98px) {
      width: 100%;
      display: flex;
    }

  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 73px;

    border: none;
    border-radius: 8px;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    text-decoration: none;

    color: #FFFFFF;

    cursor: pointer;
    transition: 200ms;
    @media screen and (max-width: 1280.98px) {
      font-size: 20px;
      min-height: 58px;
    }
    @media screen and (min-width: 560.98px) {
      flex: 0 1 50%;
      padding: 2px 15px;
    }

    span {
      @media screen and (max-width: 560.98px) {
        display: none;
      }
    }
    @media screen and (max-width: 560.98px) {
      width: 58px;
    }
    &--google {

      margin-right: 12px;

      background: #EA4436;
      @media (any-hover: hover) {
        &:hover {
          background: #ea7167;
        }
      }

    }

    &--telegram {
      margin-left: 12px;

      background: #2EA6E2;
      @media (any-hover: hover) {
        &:hover {
          background: #5db2dd;
        }
      }

    }

  }

  &__btn-icon {

    @media screen and (min-width: 1280.98px) {
      margin-right: 16px;
    }
    @media screen and (min-width: 560.98px) {
      margin-right: 10px;
    }
  }

}

</style>
