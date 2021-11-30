<template>
  <div class="project-board">
    <project-board-column
        class="project-board__column"
        v-for="(projectColumnData, i) in projectData"
        :key="i"
        :loading="loading"
        :project-column-data="projectColumnData">
    </project-board-column>
  </div>
</template>

<script>
import {projectsController} from "@/app/projects/projects.controller";

import ProjectBoardColumn from "@/app/projects/project-board/components/ProjectBoardColumn";

export default {
  name: 'ProjectBoard',
  components: {ProjectBoardColumn},
  created() {
    this.getProjectById(this.$route.params.projectId)
  },
  computed: {
    projectData() {
      if (!this.loading) return this.project
      else return projectsController.getProjectTemplate()
    }
  },
  data() {
    return {
      project: [],
      loading: false,
    }
  },
  methods: {
    async getProjectById(id) {
      this.loading = true

      try {
        this.project = await projectsController.getProjectById(id)

      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
.project-board {
  display: flex;
  justify-content: center;
  height: 100%;
  font-family: Rubik, sans-serif;

  &__column:not(&__column:last-child) {
    margin-right: 12px;
  }
}
</style>
