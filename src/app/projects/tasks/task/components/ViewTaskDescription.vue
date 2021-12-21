<template>
  <div class="view-task-description">
    <view-task-title :title="'Task Description'" />
    <div class="view-task-description__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, non!
    </div>
  </div>
</template>

<script>
import ViewTaskTitle from "@/app/projects/tasks/task/components/common/ViewTaskTitle";
export default {
  name: 'view-task-description',
  components: {ViewTaskTitle}
}
</script>

<style lang="scss" scoped>
.view-task-description {
  display: flex;
  height: 100%;
  flex-direction: column;
  &__content {
    flex: 1 1 auto;
    padding: 16px 20px;
    background-color: #FBFBFB;
  }

}
</style>