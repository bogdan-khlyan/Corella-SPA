<template>
  <base-page-wrapper
    :title="title"
    :show-delete-button="!isCreate"
    delete-button-text="Are you sure you want to delete the project?"
    @delete="deleteProject"
  >
    <div class="project-settings">
      <div class="project-settings__tabs">
        <base-tabs
          :disabled-tabs="disabledTabs"
          :tabs="allowTabs"
          :current-tab="currentTab"
          @change-tab="changeTab"
        />
      </div>
      <transition name="el-fade-in-linear" mode="out-in">
        <keep-alive>
          <component :is="currentTab" @change-tab="changeTab" />
        </keep-alive>
      </transition>
    </div>
  </base-page-wrapper>
</template>

<script>
import rightsList from '@/utils/rightsList'
import { useUserStore } from '@/store/modules/user'
import { mapState } from 'pinia'

import BasePageWrapper from '@/components/BasePageWrapper'
import BaseTabs from '@/components/BaseTabs'
import { projectsController } from '@/app/projects/projects.controller'
import BoardSettings from '@/views/projects/project-editor/components/board-settings/BoardSettings'
import BasicInfo from '@/views/projects/project-editor/components/basic-info/BasicInfo'
import Members from '@/views/projects/project-editor/components/members-table/MembersTable'

export default {
  name: 'ProjectEditor',
  components: {
    Members,
    BasePageWrapper,
    BaseTabs,
    BoardSettings,
    BasicInfo,
  },
  data() {
    return {
      tabs: [
        {
          name: 'basic-info',
          text: 'Basic info',
          right: [rightsList.manageProjectSettings.id],
        },
        {
          name: 'board-settings',
          text: 'Board settings',
          right: [rightsList.manageProjectStages.id],
        },
        {
          name: 'members',
          text: 'Roles and members',
          right: [
            rightsList.manageProjectRoles.id,
            rightsList.manageProjectMembers.id,
          ],
        },
      ],
      currentTab: 'basic-info',
    }
  },
  computed: {
    ...mapState(useUserStore, ['userRights', 'projectRoles']),

    allowTabs() {
      const { projectId } = this.$route.params
      const projectRights = this.projectRoles.get(projectId)?.rightIds

      if (
        !projectId &&
        this.userRights.find(
          (right) => right.id === rightsList.creatingProjects.id
        )
      ) {
        return this.tabs
      }

      return this.tabs.filter((tab) =>
        tab.right.some((right) => projectRights?.includes(right))
      )
    },
    title() {
      if (this.isCreate) {
        return 'Create project'
      }
      return 'Project settings'
    },
    disabledTabs() {
      if (this.isCreate) {
        return ['board-settings', 'members']
      }
    },
    isCreate() {
      return this.$route.name === 'create-project'
    },
  },
  created() {
    this.currentTab = this.allowTabs[0].name
  },
  methods: {
    async deleteProject() {
      this.loading = true
      this.$api.projects.deleteProject(this.$route.params.projectId)
      this.loading = false
      this.$router.push('/')
    },
    changeTab(tab) {
      this.currentTab = tab
    },
  },
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
