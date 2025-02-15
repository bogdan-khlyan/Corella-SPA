<template>
  <form
      class="basic-info"
      @submit.prevent="createProject"
      v-loading="loading"
  >
    <div class="basic-info__items">
      <div class="basic-info__item">
        <base-input
            v-model.trim="newProject.name"
            :error="v$.newProject.name.$error"
            label="Title"
            placeholder="Enter project name"
        />
      </div>
      <div class="basic-info__item">
        <base-textarea
            v-model="newProject.description"
            :error="v$.newProject.description.$error"
            label="Description"
            placeholder="Enter project description"
            ref="description"
        />
        <div class="basic-info__count">{{ getDescriptionLength }} / 8192</div>
      </div>
    </div>
    <div class="basic-info__buttons">
      <div class="basic-info__button">
        <base-button :title="isCreate ? 'Next' : 'Edit'">
        </base-button>
      </div>
      <div class="basic-info__button">
        <base-button @click.prevent="$router.push('/')" title="Cancel" type="danger" />
      </div>
    </div>
  </form>

</template>

<script>
import BaseInput from "@/app/common/BaseInput";
import BaseTextarea from "@/app/common/BaseTextarea";

import {projectsController} from "@/app/projects/projects.controller";

import useVuelidate from "@vuelidate/core";
import {maxLength, required} from "@vuelidate/validators";
import BaseButton from "@/app/common/BaseButton";

export default {
  name: "basic-info",
  components: {BaseButton, BaseTextarea, BaseInput},
  setup: () => ({v$: useVuelidate()}),
  data() {
    return {
      loading: false,
      newProject: {
        name: '',
        description: '',
      },
      errors: {
        name: false,
        description: false
      },
    }
  },
  methods: {
    createProject() {
      if (this.isCreate) {
        this.v$.newProject.$touch()
        if (this.v$.newProject.$invalid) return

        this.loading = true

        projectsController.createProject(this.newProject)
            .then(data => {
              this.$router.push(`/project/${data._id}/settings`)
              this.$emit('change-tab', 'board-settings')
            })
            .finally(() => this.loading = false)
      } else {
        console.log('user tried to update project')
      }

    },
  },
  computed: {
    isCreate() {
      return this.$route.name === 'create-project'
    },
    getDescriptionLength() {
      return this.v$.newProject.description.$model.length
    }
  },
  validations() {
    return {
      newProject: {
        name: {
          maxLength: maxLength(128),
          required
        },
        description: {
          maxLength: maxLength(8192),
          required
        }
      }
    }
  }
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
    font-family: "Rubik", sans-serif;
    color: #7B7B7B;
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
}
</style>
