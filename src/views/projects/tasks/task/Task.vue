<template>
  <task-page-wrapper
    :title="taskTitle"
    :show-edit-button="isAllowManageTask"
    :loading="loading"
    delete-button-text="Are you sure you want to delete the task?"
    @edit="
      $router.push(
        `/project/${$route.params.projectId}/task/${$route.params.taskId}/edit`
      )
    "
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
              <!--              <div class="view-task__members">
                <view-task-members />
              </div>-->
              <div class="view-task__files">
                <upload-files v-model="task.attachments" :is-view-mode="true" />
              </div>
              <!--              <div class="view-task__collapse">
                <view-task-collapse />
              </div>-->
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
import { useUserStore } from '@/store/modules/user'
import rightsList from '@/utils/rightsList'
import rightsMixin from '@/mixins/rights-mixin'

import TaskPageWrapper from '@/components/BasePageWrapper'
import ViewTaskDescription from '@/views/projects/tasks/task/components/ViewTaskDescription'
import ViewTaskCollapse from '@/views/projects/tasks/task/components/ViewTaskCollapse'
import UploadFiles from '@/components/upload-files/UploadFiles'
// import ViewTaskMembers from '@/views/projects/tasks/task/components/ViewTaskMembers'

export default {
  name: 'Task',
  components: {
    // ViewTaskMembers,
    UploadFiles,
    ViewTaskCollapse,
    ViewTaskDescription,
    TaskPageWrapper,
  },
  mixins: [rightsMixin],
  data() {
    return {
      loading: false,
      userStore: useUserStore(),
      task: {
        attachments: [],
        description: '',
      },
    }
  },
  computed: {
    taskTitle() {
      if (!this.loading) {
        return `Task #${this.task.id}`
      }

      return ''
    },

    taskId() {
      return this.$route.params.taskId
    },

    isAllowManageTask() {
      return this.userStore.projectRoles
        .get(this.$route.params.projectId)
        ?.rightIds.includes(rightsList.manageProjectTasks.id)
    },
  },
  created() {
    this.loadTaskById()
  },
  methods: {
    async loadTaskById() {
      this.loading = true
      this.task = await this.$api.projects.loadTaskById(this.taskId)
      this.loading = false
    },
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

  @media (max-width: 1400px) {
    &__row {
      flex-direction: column;
    }
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
