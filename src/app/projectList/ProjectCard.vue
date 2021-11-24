<template>
  <router-link class="project-card" to="#">
    <div class="project-card__name">
      <span>Sunofabeach</span>
      <hr>
    </div>
    <div class="project-card__description">
      <span>A seemingly inappropriate technique for sunscreen gel</span>
    </div>
    <div class="project-card__info">
      <div class="project-card__info--item">
        <span>10 members</span>
      </div>
      <div class="project-card__info--item">
        <span>5 tasks</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'project-list',
}
</script>

<style scoped lang="scss">
.project-card {
  display: block;

  padding: 24px;
  box-sizing: border-box;

  width: 336px;
  height: 160px;

  text-decoration: none;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background: rgba(222, 226, 222, 40%);
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.25), -6px -6px 16px rgba(255, 255, 255, 0.5);

  &__name {
    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      text-transform: capitalize;

      color: #222222;
    }

    > hr {
      width: 80%;
      height: 2px;

      margin-top: 12px;
      margin-bottom: 12px;
      margin-left: 0;

      border: none;
      border-radius: 2px;

      background: linear-gradient(180deg, #20C561 0%, #06A680 100%);
    }

  }

  &__description {
    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;

      color: #3F3F3F;
    }
  }

  &__info {
    display: flex;

    &--item {
      position: relative;
      padding-left: 13px;
      padding-right: 13px;

      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
        &:after {
          display: none;
        }
      }

      &:after {
        position: absolute;
        top: 2px;
        bottom: 0;
        right: -2px;
        margin: auto;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #656565;
      }

      > span {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;

        text-transform: capitalize;

        color: #656565;
      }
    }

  }

}
</style>
