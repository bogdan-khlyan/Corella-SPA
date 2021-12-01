<template>
  <div class="project-board">
    <transition name="fade" mode="out-in" appear>

      <div class="project-board__columns-wrapper"
           v-if="loading"
      >
        <project-board-column
            class="project-board__column"
            v-for="projectColumnData in projectData"
            :key="projectColumnData.column"
            :loading="loading"
            :project-column-data="projectColumnData">
        </project-board-column>
      </div>

      <div class="project-board__columns-wrapper"
           v-else
      >
        <step-animation
            :wrapper="mainWrapper">

            <project-board-column
                class="project-board__column"
                v-for="(projectColumnData, i) in projectData"
                :key="projectColumnData.column"
                :project-column-data="projectColumnData"
                :data-index="i">
            </project-board-column>

        </step-animation>
      </div>

    </transition>
  </div>
</template>

<script>
import {projectsController} from "@/app/projects/projects.controller";

import ProjectBoardColumn from "@/app/projects/project-board/components/ProjectBoardColumn";

export default {
  name: 'ProjectBoard',
  components: {
    ProjectBoardColumn
  },
  computed: {
    projectData() {
      if (!this.loading) return this.project
      else return projectsController.getProjectTemplate()
    },

    mainWrapper() {
      return document.querySelector('.main-wrapper')
    }
  },
  created() {
    this.getProjectById(this.$route.params.projectId)
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
    },
  }
}
</script>

<style scoped lang="scss">
.project-board {
  height: 100%;
  font-family: Rubik, sans-serif;

  &__columns-wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  &__column:not(&__column:last-child) {
    margin-right: 12px;
  }
}
</style>
