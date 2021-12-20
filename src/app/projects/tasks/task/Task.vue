<template>
  <task-page-wrapper
      title="Task #242"
      :show-edit-button="true"
      :show-delete-button="false"
      @edit="$router.push('/project/1/create-task')"
      @delete="$router.push('/project/1/board')">
    <div class="view-task">
      <div class="view-task__row">
        <div class="view-task__column">
          <div class="view-task__main">
            <div class="view-task__item">
              <view-task-title :title="'Title'" />
              <div class="view-task-item__text">As a user, I want to be able to create new versions for projects and link them to issues or hotfixes</div>
            </div>
            <div class="view-task__files">
              <upload-files :show-button="false" />
            </div>
            <div class="view-task__collapse">
              <view-task-collapse />
            </div>
          </div>
        </div>
        <div class="view-task__column">
          <view-task-description />
        </div>
      </div>
    </div>
  </task-page-wrapper>
</template>

<script>
import TaskPageWrapper from "@/app/common/BasePageWrapper";
import ViewTaskTitle from "@/app/projects/tasks/task/components/ViewTaskTitle";
import ViewTaskDescription from "@/app/projects/tasks/task/components/ViewTaskDescription";
import ViewTaskCollapse from "@/app/projects/tasks/task/components/ViewTaskCollapse";
import UploadFiles from "@/app/common/uploadFiles/UploadFiles";

export default {
  name: 'task',
  components: {UploadFiles, ViewTaskCollapse, ViewTaskDescription, ViewTaskTitle, TaskPageWrapper }
}
</script>

<style scoped lang="scss">
.view-task {
  &__row {
    display: flex;
    margin: 24px -12px 0px -12px;
  }
  &__item {
    margin: 0px 0px 27px 0px;
  }
  &__column {
    flex: 0 1 50%;
    padding: 0px 12px;
  }
  &__files {
    margin: 0px 0px 50px 0px;
  }
}
.view-task-item {
  &__text {
    padding: 15px 20px;
    background-color: #FBFBFB;
    font-family: "Rubik";
  }
}
</style>
