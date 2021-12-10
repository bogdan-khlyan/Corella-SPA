<template>
  <task-page-wrapper title="Create task">
    <div class="edit-task">
      <div class="edit-task__column">
        <base-input label="Title"/>
        <div>TODO members select</div>
        <div>TODO media files upload</div>
      </div>
      <div class="edit-task__column">
        <div class="edit-task__description">
          <edit-task-description/>
        </div>
      </div>
    </div>
  </task-page-wrapper>
</template>

<script>
import TaskPageWrapper from "@/app/projects/tasks/common/TaskPageWrapper";
import BaseInput from "@/app/common/components/BaseInput";

import EditTaskDescription from "@/app/projects/tasks/editTask/components/EditTaskDescription";

export default {
  name: 'edit-task',
  components: { TaskPageWrapper, BaseInput, EditTaskDescription }
}
</script>

<style scoped lang="scss">
.edit-task {
  display: flex;

  &__column {
    width: 50%;

    padding: 12px;
    box-sizing: border-box;
  }

  &__description {

  }

}
</style>
