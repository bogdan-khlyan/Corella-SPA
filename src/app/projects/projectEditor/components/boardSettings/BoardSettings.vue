<template>
  <form
      v-loading="loading"
      class="create-project"
      @submit.prevent="createProject">
    <div class="create-project__columns">
      <div class="create-project__column">
        <base-input
            v-model="newProject.name"
            :error="errors.name"
            label="Title"
            placeholder="Enter project name"
            @input="inputName"/>
        <base-textarea
            v-model="newProject.description"
            :error="errors.description"
            label="Description"
            placeholder="Enter project description"
            @input="inputDescription"/>
      </div>
      <div class="create-project__column">
        <members-table/>
      </div>
    </div>
    <board-editor/>
    <div class="create-project__submit">
      <button>Create project</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/app/common/BaseInput";
import BaseTextarea from "@/app/common/BaseTextarea";
import BoardEditor from "@/app/projects/projectEditor/components/boardEditor/BoardEditor";
import MembersTable from "@/app/projects/projectEditor/components/membersTable/MembersTable";
import {projectsController} from "@/app/projects/projects.controller";

export default {
  name: "board-settings",
  components: { BaseInput, BaseTextarea, BoardEditor, MembersTable },
  data() {
    return {
      loading: false,
      newProject: {
        name: '',
        description: '',
        members: [],
        statuses: []
      },
      errors: {
        name: false,
        description: false
      }
    }
  },
  methods: {
    createProject() {
      if (this.validate()) {
        this.loading = true
        setTimeout(() => {
          projectsController.createProject(this.newProject)
              .then(() => this.$router.push('/'))
              .finally(() => this.loading = false)
        }, 700)
      }
    },
    validate() {
      let error = false

      if (!this.validateName()) {
        error = true
      }
      if (!this.validateDescription()) {
        error = true
      }

      return !error
    },
    validateName() {
      if (this.newProject.name.length > 4) {
        this.errors.name = false
        return true
      } else {
        this.errors.name = true
        return false
      }
    },
    validateDescription() {
      if (this.newProject.description.length > 4) {
        this.errors.description = false
        return true
      } else {
        this.errors.description = true
        return false
      }
    },
    inputName() {
      if (this.errors.name) {
        this.validateName()
      }
    },
    inputDescription() {
      if (this.errors.description) {
        this.validateDescription()
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.create-project {

  &__columns {
    display: flex;
    max-width: 1400px;

    @media screen and (max-width: 980px) {
      flex-wrap: wrap;
    }
  }

  &__column {
    width: 50%;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    @media screen and (max-width: 980px) {
      width: 100%;
    }
  }

  &__submit {
    margin-top: 20px;
    padding-left: 10px;

    > button {
      width: 222px;
      height: 56px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      color: #FFFFFF;
      border: none;

      background: #0AB258;
      border-radius: 4px;

      cursor: pointer;
    }
  }

}
</style>