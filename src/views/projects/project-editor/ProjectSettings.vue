<template>
  <base-page-wrapper
    :title="title"
    :show-delete-button="!isCreate"
    @delete="deleteProject"
  >
    <div class="project-settings">
      <div class="project-settings__tabs">
        <base-tabs
          :disabled-tabs="disabledTabs"
          :tabs="tabs"
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
        },
        {
          name: 'board-settings',
          text: 'Board settings',
        },
        {
          name: 'members',
          text: 'Roles and members',
        },
      ],
      currentTab: 'basic-info',
    }
  },
  computed: {
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
    if (!this.isCreate) {
      this.currentTab = 'board-settings'
    }
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
