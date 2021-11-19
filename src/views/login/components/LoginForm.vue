<template>
  <form class="login-form" @submit.prevent="login">
    <div class="login-form__input" :class="{'error': errors.username}">
      <el-input class="input" placeholder="User name" v-model="data.username"/>
    </div>
    <div class="login-form__input" :class="{'error': errors.password}">
      <el-input class="input login-form__input--password" :class="{'show-eye': isPwdVisible}"
                v-model="data.password" show-password
                placeholder="Password" ref="password" />
    </div>
    <div class="login-form__btn--forgot">
      <span @click="$router.push('/restore')">Forgot my password?</span>
    </div>
    <el-button class="login-form__btn--submit" native-type="submit">Log in</el-button>
  </form>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      isPwdVisible: false,
      data: {
        username: '',
        password: '',
      },
      errors: {
        username: false,
        password: false
      }
    }
  },
  mounted() {
    this.$refs.password.$el.addEventListener('click', () => this.isPwdVisible = !this.isPwdVisible)
  },
  methods: {
    validate: function () {
      let err = false

      if (!this.data.username || this.data.username.length < 3) {
        this.errors.username = true
        err = true
      } else this.errors.username = false

      if(!this.data.password || this.data.password.length < 3) {
        this.errors.password = true
        err = true
      } else this.errors.password = false

      return err
    },
    login() {
      if (this.validate())
        return

      this.$api.user.login({ login: this.data.username, password: this.data.password }).then(() => this.$router.push('/')).catch(() => {
        this.$notify.error({
          title: 'Error',
          message: 'Authorization error'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {

  &__input {
    max-width: 692px;
    margin-bottom: 50px;

    @media screen and (max-height: 920px) { max-width: 600px; }

    @media screen and (max-width: 1700px) { max-width: 545px; }
    @media screen and (max-width: 1475px) { max-width: 500px; }

    &:last-child { margin-bottom: 0 }

  }

  &__btn {

    &--forgot {
      margin: 24px 0 66px 0;
      max-width: 692px;

      text-align: right;

      font-size: 18px;
      text-decoration: none;
      line-height: 21px;
      color: #878787;

      cursor: pointer;

      @media screen and (max-height: 920px) {
        max-width: 600px;
      }
      @media screen and (max-height: 900px) {
        margin-top: 16px;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 1700px) { max-width: 545px; }
      @media screen and (max-width: 1475px) { max-width: 500px; }

    }

    &--submit {
      position: relative;
      padding: 24px 124px;

      font-family: Roboto, sans-serif;
      color: #FFFFFF;
      font-size: 32px;
      line-height: 37px;
      border-radius: 8px;
      border: none;
      background-image: linear-gradient(91.59deg, #20C560 0%, #07A87E 100%);

      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }

      @media screen and (max-height: 900px) {
        padding: 20px 100px;
        font-size: 26px;
        line-height: 28px;
      }

    }

  }

}
</style>
