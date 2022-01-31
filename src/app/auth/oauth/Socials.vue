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
    margin-bottom: 40px;
    text-align: left;
    > span {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 37px;
      color: #393939;
      @media (max-width: 767.98px) {
        font-size: 30px;
      }
    }
  }

  &__buttons {
    @media (min-width: 767.98px) {
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
    @media (min-width: 767.98px) {
      flex: 0 1 50%;
      padding: 2px 15px;
    }

    span {
      @media (max-width: 767.98px) {
        display: none;
      }
    }
    @media screen and (max-height: 920px) {
      min-height: 63px;
    }
    @media (max-width: 767.98px) {
      min-height: 50px;
      width: 50px;
    }
    &--google {

      margin-right: 12px;

      background: #EA4436;

      &:hover {
        background: #ea7167;
      }
    }

    &--telegram {
      margin-left: 12px;

      background: #2EA6E2;

      &:hover {
        background: #5db2dd;
      }
    }

  }

  &__btn-icon {
    @media (min-width: 767.98px) {
      margin-right: 16px;
    }
  }

}

</style>
