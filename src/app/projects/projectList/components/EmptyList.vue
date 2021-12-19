<template>
  <div class="empty-list">
    <div class="empty-list__content">
      <img src="@/assets/images/icons/common/img-empty-list.svg" alt="">
      <div class="empty-list__title">
        <span>You are not attached to any project</span>
      </div>
      <div class="empty-list__text">
        <span>All projects you create will appear here <br> Let’s create a new project now</span>
      </div>
      <div class="empty-list__button">
        <button @click="$router.push('/project/create')">Create new project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'empty-list'
}
</script>

<style scoped lang="scss">
.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 140px);

  &__content {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__title {
    margin-top: 36px;
    margin-bottom: 32px;
    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 50px;

      text-align: center;

      color: #3B3B3B;
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

      color: #7C7B86;
    }
  }

  &__button {
    margin-top: 42px;
    > button {
      width: 285px;
      height: 72px;

      background: #0AB258;
      border-radius: 8px;
      border: none;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      text-align: center;

      color: #FFFFFF;

      transition: 200ms;
      cursor: pointer;

      &:hover {
        background: #2ece78;
      }

    }
  }

}
</style>
