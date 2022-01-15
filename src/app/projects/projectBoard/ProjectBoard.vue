<template>
  <div class="project-board">
    <transition name="fade" mode="out-in" appear>

      <div v-if="loading"
           class="project-board__columns-wrapper">
        <project-board-column
            class="project-board__column"
            v-for="projectColumnData in projectTemplate"
            :key="projectColumnData.column"
            :loading="loading"
            :column-transition-end="true"
            :project-column-data="projectColumnData">
        </project-board-column>
      </div>

      <div v-else
           class="project-board__columns-wrapper">
        <step-animation
            :wrapper="mainWrapper"
            @item-complete="handleItemComplete">
          <project-board-column
              class="project-board__column"
              v-for="(projectColumnData, i) in columns"
              :key="projectColumnData.id"
              :project-column-data="projectColumnData"
              :column-transition-end="projectColumnData.columnTransitionEnd"
              :data-index="i"
              :left-arrow="showArrow && i === 0"
              :right-arrow="showArrow && i === columns.length - 1"
              @status-task-changed="handleTaskStatusChanged"
              @click-left-arrow="clickLeftArrow"
              @click-right-arrow="clickRightArrow">
          </project-board-column>

        </step-animation>
      </div>

    </transition>
  </div>
</template>

<script>
import {projectsController} from "@/app/projects/projects.controller";

import ProjectBoardColumn from "@/app/projects/projectBoard/components/ProjectBoardColumn";
import {appState} from "@/app/app.state";

export default {
  name: 'ProjectBoard',
  components: {
    ProjectBoardColumn
  },
  computed: {
    windowWidth() {
      return appState.windowWidth
    },
    showArrow() {
      return !(this.project.length <= this.columnsCount)
    },
    columnsCount() {
      if (this.windowWidth > 1600) {
        return 5
      } else if (this.windowWidth > 1400) {
        return 4
      } else if (this.windowWidth > 850) {
        return 3
      } else if (this.windowWidth > 600) {
        return 2
      } else {
        return 1
      }
    },
    columns() {
      if (this.offset < this.project.length - this.columnsCount) {
        return this.project.slice(this.offset, this.offset + this.columnsCount)
      } else {
        const arr = this.project.slice(this.offset)
        const arr2 = this.project.slice(0, this.columnsCount - arr.length)
        // console.log(arr.concat(arr2))
        return arr.concat(arr2)
      }
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
      loading: false,
      project: null,

      projectTemplate: projectsController.getProjectTemplate(),

      offset: 0
    }
  },
  methods: {
    clickLeftArrow() {
      if (this.offset === 0) {
        this.offset = this.project.length
      }
      --this.offset
    },
    clickRightArrow() {
      if (this.offset === this.project.length) {
        this.offset = 0
      }
      ++this.offset
    },
    getProjectById(id) {
      this.loading = true

      projectsController.getProjectById(id)
          .then(project => this.project = project)
          .finally(() => this.loading = false)
    },

    handleItemComplete({index}) {
      this.project[index].columnTransitionEnd = true
    },

    handleTaskStatusChanged(data) {
      console.log(data)
    }
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
    height: inherit;
  }

  &__column:not(&__column:last-child) {
    margin-right: 12px;
  }
}
</style>
