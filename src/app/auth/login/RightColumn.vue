<template>
  <div class="right-column login-col">
    <div class="right-column-text">
      <div>
        <span class="bold-text">The Corella CRM system</span> is a simple and free program for keeping track of
        projects and their tasks
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRightColumn",
}
</script>

<style scoped lang="scss">
.right-column {
  background: linear-gradient(218.31deg, #20C560 0%, #05A580 100%);
}

.right-column-text {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-size: 35px;
  line-height: 160.8%;
  color: #FFFFFF;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 177px;

  @media screen and (max-width: 1885px) {
    font-size: 32px;
  }
  @media screen and (max-width: 1800px) {
    font-size: 28px;
  }
  @media screen and (max-width: 1700px) {
    padding: 0 140px;
  }
  @media screen and (max-width: 1600px) {
    padding: 0 120px;
  }

}

.right-column-text .bold-text {
  font-weight: bold;
}
</style>
