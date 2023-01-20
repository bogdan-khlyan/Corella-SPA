<template>
  <div class="project-list">
    <div class="project-list__title">
      <h2>Projects</h2>
    </div>
    <transition name="el-fade-in-linear" mode="out-in">
      <empty-list v-if="!loading && projects.length === 0" />
      <div v-else v-loading="loading" class="project-list__content">
        <transition-group name="el-fade-in-linear">
          <project-card
            v-for="project in projects"
            :key="project._id"
            :project="project"
          />
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import ProjectCard from '@/views/projects/project-list/components/ProjectCard'
import EmptyList from '@/views/projects/project-list/components/EmptyList'

export default {
  name: 'ProjectList',
  components: {
    ProjectCard,
    EmptyList,
  },
  data() {
    return {
      loading: false,
      projects: [],
    }
  },
  computed: {
    searchInput() {
      return ''
      // return baseHeaderState.searchValue
    },
  },
  created() {
    this.loadProjects()
  },
  beforeUnmount() {
    // baseHeaderState.searchValue = ''
  },
  methods: {
    async loadProjects() {
      this.loading = true
      this.projects = await this.$api.projects.loadProjects()
      this.loading = false
    },
  },
}
</script>

<style scoped lang="scss">
.project-list {
  &__title {
    > h2 {
      width: max-content;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;

      text-align: center;
      text-transform: capitalize;

      color: #3b3b3b;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;

    min-height: 200px;

    padding-top: 12px;

    @media screen and (max-width: 1800px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 2.5vw;
    }
    @media screen and (max-width: 1700px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 24px;
    }
    @media screen and (max-width: 1500px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 24px;
    }
    @media screen and (max-width: 980px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 24px;
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-column-gap: 24px;
    }
  }
}
</style>
