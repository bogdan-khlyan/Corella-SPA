<template>
  <div class="project-task-card">
    <div class="project-task-card__content">
      <div class="project-task-card__title"># {{projectTask.id}}</div>
      <div class="project-task-card__description">{{projectTask.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBoardColumnTaskCard",
  props: {
    projectTask: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.project-task-card {
  font-family: Open Sans, sans-serif;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;

  &__content {
    padding: 20px;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 12px;
    line-height: 16px;
    color: #7C7B86;
  }

  &__description {
    margin-top: 10px;
    font-size: 14px;
    line-height: 19px;
    color: #212121;
  }
}
</style>
