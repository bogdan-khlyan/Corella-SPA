<template>
<div class="socials-wrapper">
  <div class="socials-wrapper__title">
    <span>Submit your profile</span>
  </div>

  <div class="socials-wrapper__buttons">
    <a @click.prevent="socialAuth('google')" href="#" class="socials-wrapper__btn socials-wrapper__btn--google">
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
import hello from 'hellojs';
export default {
  name: "Socials",
  mounted() {
    hello.init({
      google: "1036628648537-cf5cipp1m50e6i0tjmj4m6l0ugedctd2.apps.googleusercontent.com",
    })
    hello.on('auth.login', function() {
      console.log('Ура!!')
    })
  },
  methods: {
    async socialAuth(network) {
      try {
        const redirectUri = `${window.location.protocol}//${window.location.host}`;
// const redirectUri = `http://localhost:3000/api/auth/google`;
        await hello.login(network, {
          redirect_uri: redirectUri,
          force: true,
          // display: "page",
          scope: "profile"
        }, function() {
          console.log('Success!')
        });


        // const result = await hello.api('me')
        // console.log(result);
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.socials-wrapper {
  &__title {
    margin-bottom: 40px;
    text-align: left;

    @media screen and (max-height: 920px) {
      margin-top: 40px;
    }

    > span {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 37px;

      color: #393939;
    }
  }

  &__buttons {
    width: 100%;
    display: flex;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 73px;

    border: none;
    border-radius: 8px;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    text-decoration: none;

    color: #FFFFFF;

    cursor: pointer;
    transition: 200ms;

    @media screen and (max-height: 920px) {
      height: 63px;
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
    margin-right: 16px;
  }

}

</style>
