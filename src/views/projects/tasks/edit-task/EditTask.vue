<template>
  <base-page-wrapper :title="title" :loading="loading">
    <div class="edit-task">
      <div class="edit-task__content">
        <div class="edit-task__column">
          <div class="edit-task__input">
            <base-input v-model="task.title" label="Title" />
          </div>
          <div class="edit-task__select">
            <edit-task-select />
          </div>
          <div class="edit-task__uploading">
            <upload-file v-model="task.attachments" />
          </div>
        </div>
        <div class="edit-task__column">
          <div class="edit-task__description">
            <edit-task-description v-model="task.description" />
          </div>
        </div>
      </div>
      <div class="edit-task__submit-button">
        <button @click="submitHandler">
          {{ isEdit ? 'Update task' : 'Create task' }}
        </button>
      </div>
    </div>
  </base-page-wrapper>
</template>

<script>
import BasePageWrapper from '@/components/BasePageWrapper'
import UploadFile from '@/components/upload-files/UploadFiles'
import BaseInput from '@/components/BaseInput'

import EditTaskDescription from '@/views/projects/tasks/edit-task/components/EditTaskDescription'
import EditTaskSelect from '@/views/projects/tasks/edit-task/components/EditTaskSelect'

export default {
  name: 'EditTask',
  components: {
    EditTaskSelect,
    BasePageWrapper,
    BaseInput,
    EditTaskDescription,
    UploadFile,
  },
  data() {
    return {
      loading: false,
      task: {
        title: '',
        description: '',
        attachments: [],
        members: [],
      },
    }
  },
  computed: {
    title() {
      return this.isEdit ? 'Edit task' : 'Create task'
    },
    route() {
      return this.$route.name
    },
    isEdit() {
      return this.route !== 'create-task'
    },
    projectId() {
      return this.$route.params.projectId
    },
    taskId() {
      return this.$route.params.taskId
    },
  },
  created() {
    if (this.isEdit) {
      this.loadTaskById()
    }
  },
  methods: {
    async loadTaskById() {
      this.loading = true
      this.task = await this.$api.projects.loadTaskById(this.taskId)
      this.loading = false
    },

    submitHandler() {
      if (!this.isEdit) {
        this.createTask()
      } else {
        this.updateTask()
      }
    },

    async createTask() {
      this.loading = true
      const task = await this.$api.projects.createTask(this.projectId, {
        title: this.task.title,
        description: this.task.description,
      })
      if (this.task.files) {
        await this.addAttachments(task.id)
      }
      this.loading = false
    },

    async updateTask() {
      this.loading = true
      await this.$api.projects.patchTask(this.task.id, {
        title: this.task.title,
        description: this.task.description,
      })
      this.loading = false
    },

    async addAttachments(taskId) {
      const formData = new FormData()
      this.task.attachments.forEach((file) => {
        formData.append('files', file.$file)
      })
      await this.$api.projects.addTaskAttachments(taskId, formData)
    },
  },
}
</script>

<style scoped lang="scss">
.edit-task {
  &__content {
    display: flex;
    max-width: 1600px;

    @media screen and (max-width: 1400px) {
      flex-wrap: wrap;
    }
  }

  &__column {
    width: 50%;

    padding: 0 12px 12px 12px;
    box-sizing: border-box;

    @media screen and (max-width: 1800px) {
      &:first-child {
        width: 40%;
      }
      &:last-child {
        width: 60%;
      }
    }
    @media screen and (max-width: 1400px) {
      width: 100% !important;
    }
  }

  &__input {
    margin: 0px 0px 24px 0px;

    @media screen and (max-width: 1400px) {
      max-width: 600px;
    }
  }

  &__select {
    margin: 0px 0px 24px 0px;
  }

  &__description {
  }

  &__submit-button {
    padding: 12px;

    > button {
      width: 222px;
      height: 56px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      color: #ffffff;

      background: #0ab258;
      border-radius: 4px;
      border: none;

      transition: 200ms;
      cursor: pointer;

      &:hover {
        background: #49d78b;
      }
    }
  }
}
</style>
