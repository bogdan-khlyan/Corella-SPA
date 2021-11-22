<template>
  <div class="restore">
    <div class="restore__title">
      <h4>Forgot your password?</h4>
      <span>Please, enter your email address</span>
    </div>
    <form class="restore__form">
      <div class="login-form__input">
        <el-input class="input" placeholder="E-mail" v-model="data.email" />
      </div>
      <el-button class="restore__form--submit" type="submit">Continue</el-button>
    </form>
    <a class="restore__back" @click="$router.push('/login')">
      <span>Go back to the sign in page</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'restore',
  data () {
    return {
      data: {
        email: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.restore {

  &__title {

    > h4 {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;

      color: #1B1A18;
    }

    > span {
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;

      color: #434343;
    }

  }


  &__form {

    .login-form__input {
      margin-top: 50px;
      margin-bottom: 75px;
    }

  }

  &__back {
    display: inline-block;
    margin-top: 20px;

    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;

    color: #5F5F5F;

    cursor: pointer;
  }

}
</style>

<style lang="scss">
.restore__form--submit {
  padding: 24px 124px;

  font-family: Roboto, sans-serif;
  font-size: 32px;
  line-height: 37px;

  border-radius: 8px;
  border: none;

  color: #FFFFFF;
  background: linear-gradient(91.59deg, #20C560 0%, #07A87E 100%);

  &:hover {
    color: #FFFFFF;
  }

}
</style>
