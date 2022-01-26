<template>
  <base-page-wrapper
      :title="title"
      :show-delete-button="!isCreate"
      @delete="deleteProject">
    <div class="project-settings">
      <div class="project-settings__tabs">
        <base-tabs
            :tabs="tabs"
            @change-tab="changeTab"
            :currentTab="currentTab"
        />
      </div>
      <transition name="el-fade-in-linear" mode="out-in">
        <keep-alive>
          <component :is="currentTab"></component>
        </keep-alive>
      </transition>
    </div>
  </base-page-wrapper>
</template>

<script>
import BasePageWrapper from "@/app/common/BasePageWrapper";
import BaseTabs from "@/app/common/BaseTabs";
import {projectsController} from "@/app/projects/projects.controller";
import BoardSettings from "@/app/projects/projectEditor/components/boardSettings/BoardSettings";
import BasicInfo from "@/app/projects/projectEditor/components/basicInfo/BasicInfo";
import Members from "@/app/projects/projectEditor/components/membersTable/MembersTable";

export default {
  name: 'project-editor',
  components: {Members, BasePageWrapper, BaseTabs, BoardSettings, BasicInfo },
  data() {
    return {
      tabs: [
        {
          name: 'basic-info',
          text: "Basic info"
        },
        {
          name: 'board-settings',
          text: "Board settings"
        },
        {
          name: 'members',
          text: 'Roles and members'
        }
      ],
      currentTab: 'members'
    }
  },
  computed: {
    title() {
      if (this.isCreate) {
        return 'Create project'
      } else {
        return 'Project settings'
      }
    },
    isCreate() {
      return this.$route.name === 'create'
    },
  },
  methods: {
    deleteProject() {
      this.loading = true
      setTimeout(() => {
        projectsController.deleteProject(this.$route.params.projectId)
      }, 400)
    },
    changeTab(tab) {
      this.currentTab = tab.name
    }
  }
}
</script>

<style scoped lang="scss">
.project-settings {
  &__tabs {
    margin-top: 32px;
    margin-bottom: 24px;
  }
}
</style>
