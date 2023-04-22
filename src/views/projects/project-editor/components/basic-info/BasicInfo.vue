<template>
  <form v-loading="loading" class="basic-info" @submit.prevent="submitHandler">
    <div class="basic-info__items">
      <div class="basic-info__item">
        <base-input
          v-model.trim="project.name"
          :error="v$.project.name.$error"
          label="Title"
          placeholder="Enter project name"
        />
      </div>
      <div class="basic-info__item">
        <base-textarea
          ref="description"
          v-model="project.description"
          :error="v$.project.description.$error"
          label="Description"
          placeholder="Enter project description"
        />
        <div class="basic-info__count">{{ getDescriptionLength }} / 8192</div>
      </div>
    </div>
    <div class="basic-info__buttons">
      <div class="basic-info__button">
        <base-button :title="isCreate ? 'Next' : 'Edit'" />
      </div>
      <div class="basic-info__button">
        <base-button
          title="Cancel"
          type="danger"
          @click.prevent="$router.push('/')"
        />
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseTextarea from '@/components/BaseTextarea'

import useVuelidate from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import BaseButton from '@/components/BaseButton'

export default {
  name: 'BasicInfo',
  components: {
    BaseButton,
    BaseTextarea,
    BaseInput,
  },
  emits: ['change-tab'],
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      loading: false,
      project: {
        name: '',
        description: '',
      },
      errors: {
        name: false,
        description: false,
      },
    }
  },
  computed: {
    projectId() {
      return this.$route.params.projectId
    },
    isCreate() {
      return this.$route.name === 'create-project'
    },
    getDescriptionLength() {
      return this.v$.project.description.$model.length
    },
  },
  created() {
    if (!this.isCreate) {
      this.getProject()
    }
  },
  methods: {
    async getProject() {
      this.loading = true
      this.project = await this.$api.projects.loadProjectById(this.projectId)
      this.loading = false
    },

    submitHandler() {
      this.v$.project.$touch()
      if (this.v$.project.$invalid) {
        return
      }

      if (this.isCreate) {
        this.createProject()
      } else {
        this.updateProject()
      }
    },

    async createProject() {
      this.loading = true

      try {
        const project = await this.$api.projects.createProject(this.project)
        this.$router.push(`/project/${project.id}/settings`)
        this.$emit('change-tab', 'board-settings')
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },

    async updateProject() {
      this.loading = true

      try {
        await this.$api.projects.updateProject(this.projectId, this.project)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
  validations() {
    return {
      project: {
        name: {
          maxLength: maxLength(128),
          required,
        },
        description: {
          maxLength: maxLength(8192),
          required,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.basic-info {
  max-width: 510px;
  display: flex;
  flex-direction: column;

  &__item {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__count {
    display: flex;
    justify-content: flex-end;
    line-height: 1;
    font-family: 'Rubik', sans-serif;
    color: #7b7b7b;
    font-size: 12px;
    margin-top: 4px;
  }

  .base-input {
    margin: 0;
    line-height: 1;
  }

  &__items {
    flex: 1 1 auto;
  }

  &__buttons {
    margin-top: 30px;
    display: flex;
  }

  &__button {
    flex: 0 0 222px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    &__button {
      flex: 1;
    }
  }
}
</style>
