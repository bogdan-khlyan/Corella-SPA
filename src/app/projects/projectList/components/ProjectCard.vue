<template>
  <router-link class="project-card" :to="`/project/${project._id}/board`">

    <div class="project-card__content">
      <div class="project-card__name">
        <span>{{project.name}}</span>
        <hr>
      </div>
      <div class="project-card__description">
        <span>{{project.description}}</span>
      </div>
      <div class="project-card__info">
        <div class="project-card__info--item">
          <span>{{project.membersCount || 0}} members</span>
        </div>
        <div class="project-card__info--item">
          <span>{{project.tasksCount || 0}} tasks</span>
        </div>
      </div>
    </div>

    <div class="project-card__hover">
      <span>{{project.name}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'project-list',
  props: {
    project: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
.project-card {
  position: relative;
  text-decoration: none;

  @media screen and (max-width: 650px) {
    max-width: 400px;
  }

  &:hover {
    .project-card__content {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.0);
    }
  }

  &__content {
    display: block;

    padding: 20px 24px;
    box-sizing: border-box;

    width: 100%;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: #f2f3f2;
    box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.10), -6px -6px 16px rgba(255, 255, 255, 0.25);

    z-index: 0;

    transition: 300ms;
  }

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
    height: 48px;
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

  &__hover {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 10px rgba(208, 209, 212, 0.52);

    background: linear-gradient(258.69deg, #20C460 0.53%, #04A580 118.49%);

    z-index: 1;

    opacity: 0;

    transition: 200ms;

    &:hover {
      opacity: 1;
    }

    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;

      text-transform: capitalize;

      color: #FFFFFF;

      transition: 100ms;
      opacity: inherit;
    }

  }

}
</style>
