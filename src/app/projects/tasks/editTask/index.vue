<template>
  <task-page-wrapper title="Create task">
    <div class="edit-task">
      <div class="edit-task__column">
        <div class="edit-task__input">
          <base-input label="Title"/>
        </div>
        <div class="edit-task__uploading">
          <upload-file />
        </div>

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
import UploadFile from "@/app/common/components/uploadFile/index";
import BaseInput from "@/app/common/components/BaseInput";

import EditTaskDescription from "@/app/projects/tasks/editTask/components/EditTaskDescription";

export default {
  name: 'edit-task',
  components: { TaskPageWrapper, BaseInput, EditTaskDescription, UploadFile }
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
  &__input {
    margin: 0px 0px 24px 0px;
  }

  &__description {

  }

}
</style>
