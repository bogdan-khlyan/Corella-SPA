<template>
  <base-page-wrapper title="Create project">
    <form
        class="create-project"
        @submit.prevent="createProject">
      <div class="create-project__columns">
        <div class="create-project__column">
          <base-input
              v-model="newProject.name"
              label="Title"
              placeholder="Enter project name"/>
          <base-textarea
              label="Description"
              placeholder="Enter project description"/>
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
  </base-page-wrapper>
</template>

<script>
import BasePageWrapper from "@/app/common/components/BasePageWrapper";
import BaseInput from "@/app/common/components/BaseInput";
import BaseTextarea from "@/app/common/components/BaseTextarea";
import BoardEditor from "@/app/projects/projectEditor/components/boardEditor/BoardEditor";
import MembersTable from "@/app/projects/projectEditor/components/membersTable/MembersTable";

export default {
  name: 'project-editor',
  components: { BaseInput, BaseTextarea, BoardEditor, MembersTable, BasePageWrapper },
  data() {
    return {
      newProject: {
        name: '',
        description: '',
        members: [],
        statuses: []
      }
    }
  },
  methods: {
    createProject() {
      console.log('createProject')
    }
  }
}
</script>

<style scoped lang="scss">
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
