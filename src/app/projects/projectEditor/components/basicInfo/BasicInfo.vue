<template>
  <form
      class="basic-info"
      @submit.prevent="createProject"
      v-loading="loading"
  >
    <div class="basic-info__items">
      <div class="basic-info__item">
        <base-input
            v-model="newProject.name"
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
        />
        <div class="basic-info__count">{{ getDescriptionWordsCount }} / {{ maxWordsCount }}</div>
      </div>
    </div>
    <div class="create-project__submit">
      <button>Save</button>
    </div>
  </form>

</template>

<script>
import BaseInput from "@/app/common/BaseInput";
import BaseTextarea from "@/app/common/BaseTextarea";

import {projectsController} from "@/app/projects/projects.controller";

import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

const maxWordsCount = (str, limit) => {
  console.log(str.split(" ").filter(word => word !== "").length < limit)
  return str.split(" ").filter(word => word !== "").length < limit
}

export default {
  name: "basic-info",
  components: {BaseTextarea, BaseInput},
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
      maxWordsCount: 5
    }
  },
  methods: {
    createProject() {
      this.v$.newProject.$validate()

      if (this.v$.newProject.$error) return
      //
      // this.loading = true
      // setTimeout(() => {
      //   projectsController.createProject(this.newProject)
      //       .then(() => this.$router.push('/'))
      //       .finally(() => this.loading = false)
      // }, 700)
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
          maxWordsCount: maxWordsCount(this.newProject.name, this.maxWordsCount),
          required
        },
        description: {
          maxWordsCount: maxWordsCount(this.newProject.description, this.maxWordsCount)
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
