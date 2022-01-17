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
      <component :is="currentTab"></component>
    </div>
  </base-page-wrapper>
</template>

<script>
import BasePageWrapper from "@/app/common/BasePageWrapper";
import BaseTabs from "@/app/common/BaseTabs";
import {projectsController} from "@/app/projects/projects.controller";

export default {
  name: 'project-editor',
  components: {BasePageWrapper, BaseTabs },
  data() {
    return {
      tabs: ['basic-info', 'board-settings', 'roles and members'],
      currentTab: 'basic-info'
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
      return this.$route.name === 'create-project'
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
      this.currentTab = tab
    }
  }
}
</script>

<style scoped lang="scss">
.project-settings {
  &__tabs {
    margin-top: 32px;
  }
}
</style>
