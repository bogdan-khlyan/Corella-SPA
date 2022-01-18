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
            v-model.trim="newProject.description"
            :error="v$.newProject.description.$error"
            label="Description"
            placeholder="Enter project description"
        />
        <div class="basic-info__count">{{ getDescriptionWordsCount }} / {{ maxWordsCount }}</div>
      </div>
    </div>
    <base-button text="Save">
      <slot name="icon">
        <el-icon ><check /></el-icon>
      </slot>
    </base-button>
  </form>

</template>

<script>
import BaseInput from "@/app/common/BaseInput";
import BaseTextarea from "@/app/common/BaseTextarea";

import {projectsController} from "@/app/projects/projects.controller";

import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import BaseButton from "@/app/common/BaseButton";
import {Check} from "@element-plus/icons-vue";


const maxWordsCount = (limit) => (value) => {
  return value.split(" ").filter(word => word !== "").length <= limit
}

export default {
  name: "basic-info",
  components: {BaseButton, BaseTextarea, BaseInput, Check},
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
      maxWordsCount: 100
    }
  },
  methods: {
    createProject() {
      this.v$.newProject.$touch()
      if (this.v$.newProject.$invalid) return

      this.loading = true

      projectsController.createProject(this.newProject)
          .then(() => this.$router.push('/'))
          .finally(() => this.loading = false)
    },
  },
  computed: {
    getDescriptionWordsCount() {
      return this.newProject.description.split(" ").filter(word => word !== "").length
    }
  },
  validations() {
    return {
      newProject: {
        name: {
          maxWordsCount: maxWordsCount(this.maxWordsCount),
          required
        },
        description: {
          maxWordsCount: maxWordsCount(this.maxWordsCount),
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-info {
  max-width: 510px;

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
}
</style>
