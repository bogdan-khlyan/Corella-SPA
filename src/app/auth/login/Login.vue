<template>
  <div v-if="false" class="login">
    <div class="login__content">
      <div class="login-col">
        <div class="login__content--left">
          <div class="login__content--left-header d-flex">
            <img src="@/assets/images/corella_icon.svg" class="logo-wrapper" alt="">
            <h1 class="title-text">Corella</h1>
          </div>
          <div>
            <login/>
          </div>
        </div>
      </div>
      <right-column/>
    </div>
  </div>
  <div v-else>
    asfasf
  </div>
</template>

<script>
import RightColumn from './RightColumn'
import Login from "@/app/auth/login/leftColumn/Login";

export default {
  name: 'login',
  components: {
    RightColumn,
    Login
  },
  computed: {
    // loggedIn () {
    //   return this.$store.state.user.loggedIn
    // }
  },
  data() {
    return {
      data: {
        login: '',
        password: ''
      }
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
    // init: function () {
    //   if (this.loggedIn)
    //     this.$router.push('/')
    // },
    // login: function () {
    //   this.$api.user.login(this.data).then(() => {
    //     this.$router.push('/')
    //   }).catch(e => {
    //     console.log(e)
    //     this.$notify.error({
    //       title: 'Error',
    //       message: 'Authorization error'
    //     })
    //   })
    // }
  }
}
</script>

<style scoped lang="scss">
.login {


  &__content {
    display: flex;

    &--left {
      padding: 150px 0 90px 134px;

      @media screen and (max-height: 1060px) { padding-top: 130px; }
      @media screen and (max-height: 1030px) { padding-top: 120px; }
      @media screen and (max-height: 1010px) { padding-top: 110px; }
      @media screen and (max-height: 990px) { padding-top: 100px; }
      @media screen and (max-height: 970px) { padding-top: 80px; }
      @media screen and (max-height: 940px) { padding-top: 50px; }

      @media screen and (max-width: 1550px) {
        padding-left: 100px;
      }

      &-header {
        margin-bottom: 80px;
        @media screen and (max-height: 1000px) { margin-bottom: 60px; }
        @media screen and (max-height: 840px) { margin-bottom: 40px; }

        .logo-wrapper {
          @media screen and (max-height: 840px) {
            max-height: 100px;
          }
          > img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }

        }

        .title-text {
          font-family: 'Montserrat', sans-serif;
          align-self: center;
          padding-left: 48px;
          font-weight: 600;
          font-size: 46px;
          line-height: 56px;
          @media screen and (max-height: 840px) {
            font-size: 42px;
          }
        }

      }

    }

  }

}

.login-back-link {
  font-family: "Open Sans",sans-serif;
  font-size: 18px;
  line-height: 25px;
  color: #5F5F5F;
  text-decoration: none;
}

.restore-password .login-left-column {
  padding-bottom: 275px;
}
</style>
