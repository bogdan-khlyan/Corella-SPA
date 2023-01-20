<template>
  <task-page-wrapper
    title="Task #242"
    :show-edit-button="true"
    :show-delete-button="false"
    @edit="
      $router.push(
        `/project/${$route.params.projectId}/task/${$route.params.taskId}/edit`
      )
    "
    @delete="$router.push('/project/1/board')"
  >
    <transition name="el-fade-in-linear" mode="out-in">
      <div v-if="task" class="view-task">
        <div class="view-task__row">
          <div class="view-task__column">
            <div class="view-task__main">
              <div class="view-task__item">
                <div class="view-task-item__text">
                  {{ task.title }}
                </div>
              </div>
              <div class="view-task__members">
                <view-task-members />
              </div>
              <div class="view-task__files">
                <upload-files :is-view-mode="true" />
              </div>
              <div class="view-task__collapse">
                <view-task-collapse />
              </div>
            </div>
          </div>
          <div class="view-task__column">
            <view-task-description :description="task.description" />
          </div>
        </div>
      </div>
      <div v-else v-loading="true" style="height: 440px" />
    </transition>
  </task-page-wrapper>
</template>

<script>
import TaskPageWrapper from '@/app/common/BasePageWrapper'
import ViewTaskDescription from '@/app/projects/tasks/task/components/ViewTaskDescription'
import ViewTaskCollapse from '@/app/projects/tasks/task/components/ViewTaskCollapse'
import UploadFiles from '@/app/common/uploadFiles/UploadFiles'
import ViewTaskMembers from '@/app/projects/tasks/task/components/ViewTaskMembers'
import { tasksController } from '@/app/projects/tasks/tasks.controller'

export default {
  name: 'Task',
  components: {
    ViewTaskMembers,
    UploadFiles,
    ViewTaskCollapse,
    ViewTaskDescription,
    TaskPageWrapper,
  },
  data() {
    return {
      loading: true,
      task: null,
    }
  },
  computed: {
    taskId() {
      return this.$route.params.taskId
    },
  },
  created() {
    setTimeout(() => {
      tasksController
        .getTaskById(this.taskId)
        .then((task) => {
          console.log(task)
          this.task = task
        })
        .finally(() => (this.loading = false))
    }, 700)
  },
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

  &__members {
    margin: 0px 0px 44px 0px;
  }

  &__collapse {
    margin: 50px 0px 0px 0px;
  }
}

.view-task-item {
  &__text {
    padding: 15px 20px;
    background-color: #fbfbfb;
    font-family: 'Rubik';
  }
}
</style>
