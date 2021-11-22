<template>
  <div class="project-card">
    <div class="project-card__header">
      <span>{{ project.name }}</span>
    </div>
    <div class="card-hr"></div>
    <div class="project-card__description" v-if="project.description">
      {{ project.description }}
    </div>
    <div style="height: 30px"></div>
    <div class="project-card__footer">
      <div class="members">
        10 members
      </div>
      <div class="project-card__footer-separator"></div>
      <div class="new-tasks">
        5 new tasks
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectBoardCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.project-card {
  position: relative;
  padding: 25px 30px;
  width: 100%;
  max-width: calc(100% - 62px);

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  background: #eff0ef;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.25), -6px -6px 16px rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-radius: 16px;
    background: linear-gradient(101.59deg, #a9e9c2 1.03%, #FFFFFF 100%);

    z-index: -999;

    opacity: 0;
    transition: opacity ease-in 0.2s;
  }

  &:hover::before {
    opacity: 0.2;
    z-index: 1;
  }

  > .project-card__header {

    > span {
      white-space: nowrap;
      display: block;
      max-width: calc(100% - 25px);
      text-overflow: ellipsis;
      overflow: hidden;

      font-family: Rubik,sans-serif;
      font-size: 20px;
      line-height: 24px;
      text-transform: capitalize;
      color: #222222;
    }

  }

}

.card-hr {
  background: linear-gradient(180deg, #20C561 0%, #06A680 100%);
  border-radius: 2px;
  max-width: 235px;
  height: 1px;
  margin: auto 0;
  color: #20C561;
  margin: 14px 0;
}

.project-card__description {
  font-family: Rubik,sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: #3F3F3F;
}

.project-card__footer {
  position: absolute;
  bottom: 18px;
  left: 30px;
  display: flex;
  align-items: center;
  min-height: 30px;
}

.project-card__footer div {
  font-family: Rubik,sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-transform: capitalize;
  color: #656565;
}

.project-card__footer-separator {
  background-color: #656565;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 10px;
}

.members, .new-tasks {
  cursor: pointer;
}
</style>