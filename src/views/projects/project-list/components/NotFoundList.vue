<template>
  <div class="empty-list">
    <div class="empty-list__content">
      <img src="@/assets/images/icons/common/img-empty-list.svg" alt="" />
      <div class="empty-list__title">
        <span>No projects found</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundList',
}
</script>

<style scoped lang="scss">
.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 140px);
  min-height: 420px;

  &__content {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    > img {
      @media screen and (max-height: 768px) {
        height: 180px;
      }
      @media screen and (max-height: 600px) {
        height: 140px;
      }
    }
  }

  &__title {
    margin-top: 36px;
    margin-bottom: 32px;
    margin-left: 10px;

    @media screen and (max-height: 650px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 50px;

      text-align: center;

      color: #3b3b3b;
    }
  }

  &__text {
    text-align: center;

    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;

      text-align: center;

      color: #7c7b86;
    }
  }

  &__button {
    margin-top: 42px;

    > button {
      width: 285px;
      height: 72px;

      background: #0ab258;
      border-radius: 8px;
      border: none;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      text-align: center;

      color: #ffffff;

      transition: 200ms;
      cursor: pointer;

      &:hover {
        background: #2ece78;
      }
    }
  }
}
</style>
