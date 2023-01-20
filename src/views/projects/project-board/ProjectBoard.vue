<template>
  <div class="project-board">
    <transition name="fade" mode="out-in" appear>
      <div v-if="loading" class="project-board__columns-wrapper">
        <project-board-column
          v-for="item in boardTemplate.slice(0, columnsCount)"
          :key="item.column"
          class="project-board__column"
          :loading="loading"
          :column-transition-end="true"
          :project-column-data="item"
        />
      </div>

      <div v-else class="project-board__columns-wrapper">
        <step-animation
          :wrapper="mainWrapper"
          @item-complete="handleItemComplete"
        >
          <project-board-column
            v-for="(projectColumnData, i) in columns"
            :key="projectColumnData.id"
            class="project-board__column"
            :project-column-data="projectColumnData"
            :column-transition-end="projectColumnData.columnTransitionEnd"
            :data-index="i"
            :left-arrow="showArrow && i === 0"
            :right-arrow="showArrow && i === columns.length - 1"
            @status-task-changed="handleTaskStatusChanged"
            @click-left-arrow="clickLeftArrow"
            @click-right-arrow="clickRightArrow"
          />
        </step-animation>
      </div>
    </transition>
  </div>
</template>

<script>
// import { projectsController } from '@/app/projects/projects.controller'

import ProjectBoardColumn from '@/views/projects/project-board/components/ProjectBoardColumn'
// import { appState } from '@/app/app.state'

export default {
  name: 'ProjectBoard',
  components: {
    ProjectBoardColumn,
  },
  data() {
    return {
      loading: false,
      stages: [],

      boardTemplate: [
        {
          column: Math.random(),
          tasks: [{ id: 1 }, { id: 2 }],
        },
        {
          column: Math.random(),
          tasks: [{ id: 1 }, { id: 2 }],
        },
        {
          column: Math.random(),
          tasks: [{ id: 1 }, { id: 2 }],
        },
      ],

      offset: 0,
    }
  },
  computed: {
    windowWidth() {
      return window.innerWidth
    },

    showArrow() {
      return !(this.stages.length <= this.columnsCount)
    },

    columnsCount() {
      if (this.windowWidth > 1600) {
        return 5
      }
      if (this.windowWidth > 1400) {
        return 4
      }
      if (this.windowWidth > 850) {
        return 3
      }
      if (this.windowWidth > 600) {
        return 2
      }
      return 1
    },

    columns() {
      if (this.offset < this.stages.length - this.columnsCount) {
        return this.stages.slice(this.offset, this.offset + this.columnsCount)
      }
      const arr = this.stages.slice(this.offset)
      const arr2 = this.stages.slice(0, this.columnsCount - arr.length)
      return arr.concat(arr2)
    },

    mainWrapper() {
      return document.querySelector('.main-wrapper')
    },
  },
  created() {
    this.loadProjectStages()
  },
  methods: {
    clickLeftArrow() {
      if (this.offset === 0) {
        this.offset = this.stages.length
      }
      --this.offset
    },

    clickRightArrow() {
      if (this.offset === this.stages.length) {
        this.offset = 0
      }
      ++this.offset
    },

    async loadProjectStages() {
      this.loading = true
      this.stages = await this.$api.projects.loadProjectStages(
        this.$route.params.projectId
      )
      this.loading = false
      console.log(this.stages)
      /* projectsController
        .getProjectById(id)
        .then((project) => (this.project = project))
        .finally(() => (this.loading = false)) */
    },

    handleItemComplete({ index }) {
      this.stages[index].columnTransitionEnd = true
    },

    handleTaskStatusChanged(data) {
      console.log(data)
    },
  },
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
