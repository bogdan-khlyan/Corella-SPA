<template>
  <div class="banner">
    <h2><strong>The Corella  CRM system</strong> is a simple and  free  program for  keeping  track of projects and their tasks</h2>
  </div>
</template>

<script>
export default {
  name: 'banner',
}
</script>

<style scoped lang="scss">
.banner {
  display: none;
  @media screen and (min-width: 1280.98px) {
    width: 50vw;
    min-height: 100vh;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    background: linear-gradient(218.31deg, #20C560 0%, #05A580 100%);
  }
  @media screen and (max-width: 1500px) {
    width: 40vw;
  }
  h2 {
    max-width: 610px;
    text-align: left;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 160.8%;

    color: #FFFFFF;

    @media screen and (max-width: 1500px) {
      max-width: 440px;
      font-size: 24px;
      line-height: 140%;
    }
    @media screen and (max-width: 1280.98px) {
      display: none;
    }

  }

}
</style>
