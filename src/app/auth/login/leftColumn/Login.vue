<template>
  <div class="login">
    <header class="login__header">
      <div class="login__header-title">
        <span>Submit your profile</span>
      </div>
      <div class="login__header-content">
        <el-tooltip class="item" effect="dark" content="Temporarily unavailable" placement="top">
          <button class="login__header-btn google-button">
            <img src="/img/google.svg" alt="">
            <span>Google</span>
          </button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Temporarily unavailable" placement="top">
          <button class="login__header-btn telegram-button">
            <img src="/img/telegram.svg" alt="">
            <span>Telegram</span>
          </button>
        </el-tooltip>
      </div>
    </header>
    <div class="login__content">
      <login-form/>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  name: 'Restore',
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">
.login {

  &__header {
    margin-bottom: 90px;
    @media screen and (max-height: 1000px) { margin-bottom: 70px; }
    @media screen and (max-height: 800px) { margin-bottom: 50px; }

    @media screen and (max-width: 1700px) { margin-bottom: 50px; }

    &-title {
      margin-bottom: 40px;

      > span {
        font-size: 36px;
        line-height: 42px;

        @media screen and (max-height: 900px) {
          font-size: 32px;
        }
      }

    }

    &-content {
      display: flex;
    }


    &-btn {
      position: relative;

      width: 100%;
      max-width: 335px;
      height: 73px;

      @media screen and (max-height: 920px) {
        max-width: 287px;
      }

      @media screen and (max-width: 1700px) {
        max-width: 260px;
        height: 60px;
        font-size: 24px;
      }
      @media screen and (max-width: 1475px) {
        max-width: 240px;
      }

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: Roboto, sans-serif;
      font-size: 28px;
      align-self: center;
      color: white;
      line-height: 33px;

      border-radius: 8px;
      border: none;

      cursor: pointer;

      &:last-child { margin-left: 11px; }
      &:first-child { margin-right: 11px; }

      &.google-button {
        background: linear-gradient(87.47deg, #EA4436 0%, #E72211 99.71%) !important;
        transition: 0.3s;
        cursor: no-drop;
        &:hover { opacity: 0.7 }
      }

      &.telegram-button {
        background: linear-gradient(92.72deg, #2EA6E2 0%, #0C82BC 100%) !important;
        transition: 0.3s;
        cursor: no-drop;
        &:hover { opacity: 0.8 }
      }

      > img {
        margin-right: 18px;
      }

    }

  }


}
</style>
