<template>
  <div class="project-task-card">
    <div class="project-task-card__content">

      <template v-if="!loading">
        <div class="project-task-card__title"># {{projectTask.id}}</div>
        <div class="project-task-card__description">{{projectTask.description}}</div>
      </template>

      <el-skeleton animated :rows="1" v-else></el-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBoardColumnTaskCard",
  props: {
    projectTask: {
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
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
    color: $text-grey;
  }

  &__description {
    margin-top: 10px;
    font-size: 14px;
    line-height: 19px;
    color: #212121;
  }
}
</style>
