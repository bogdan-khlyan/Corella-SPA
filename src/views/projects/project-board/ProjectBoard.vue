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
            :data-index="projectColumnData.index"
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
import { WebSocketEvents } from '@/utils/ws/ws'

import windowWidthMixin from '@/mixins/window-width-mixin'
// import { projectsController } from '@/app/projects/projects.controller'

import ProjectBoardColumn from '@/views/projects/project-board/components/ProjectBoardColumn'
// import { appState } from '@/app/app.state'

export default {
  name: 'ProjectBoard',
  components: {
    ProjectBoardColumn,
  },
  mixins: [windowWidthMixin],
  data() {
    return {
      loading: false,
      updateTaskTimeoutId: null,
      groupedChangeTaskData: null,
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
      if (this.offset !== 0) {
        const remains = this.stages.slice(this.offset)
        return remains
          .concat(
            this.stages.slice(
              0,
              this.columnsCount - (this.stages.length - this.offset)
            )
          )
          .slice(0, this.columnsCount)
      }

      return this.stages.slice(this.offset, this.columnsCount)
    },

    mainWrapper() {
      return document.querySelector('.main-wrapper')
    },
  },
  watch: {
    columnsCount() {
      this.offset = 0
    },
  },
  created() {
    this.loadProjectStages()

    this.$ws.subscribe(WebSocketEvents.UPDATE_TASK, this.updateTaskHandler)
  },
  methods: {
    updateTaskHandler(newTask) {
      let oldStage
      let oldTask
      let oldTaskIndex

      for (let i = 0; i < this.stages.length; ++i) {
        const stage = this.stages[i]
        for (let j = 0; j < stage.tasks.length; ++j) {
          const task = stage.tasks[j]
          if (task.id === newTask.id) {
            oldStage = stage
            oldTask = task
            oldTaskIndex = j
            break
          }
        }
      }

      if (newTask.stageId !== oldTask.stageId) {
        oldStage.tasks = oldStage.tasks.filter((task) => task.id !== oldTask.id)
        const newStage = this.stages.find(
          (stage) => stage.id === newTask.stageId
        )

        this.insertInPosition(newStage.tasks, newTask, newTask.position)
      } else if (newTask.position !== oldTask.position) {
        oldStage.tasks.splice(oldTaskIndex, 1)
        this.insertInPosition(oldStage.tasks, newTask, newTask.position)
      }

      oldTask.title = newTask.title
      oldTask.position = newTask.position
      oldTask.stageId = newTask.stageId
    },

    insertInPosition(arr, item, position) {
      arr.splice(position - 1, 0, item)
    },

    clickLeftArrow() {
      if (this.offset === 0) {
        this.offset = this.stages.length - 1
      } else {
        --this.offset
      }
    },

    clickRightArrow() {
      if (this.offset === this.stages.length - 1) {
        this.offset = 0
      } else {
        ++this.offset
      }
    },

    async loadProjectStages() {
      this.loading = true
      this.stages = (
        await this.$api.projects.loadProjectStagesWithTasks(
          this.$route.params.projectId
        )
      ).map((stage, i) => ({
        ...stage,
        index: i,
      }))

      this.loading = false
    },

    handleItemComplete({ index }) {
      this.stages[index].columnTransitionEnd = true
    },

    handleTaskStatusChanged(data) {
      this.groupedChangeTaskData = {
        ...this.groupedChangeTaskData,
        ...data,
      }

      if (this.updateTaskTimeoutId) {
        clearTimeout(this.updateTaskTimeoutId)
      }

      this.updateTaskTimeoutId = setTimeout(() => {
        if (this.groupedChangeTaskData.moved) {
          const newPosition = data.moved.newIndex + 1
          const taskId = this.groupedChangeTaskData.moved.element.id
          this.patchTaskPosition(taskId, newPosition)
        } else {
          const taskId = this.groupedChangeTaskData.added.element.id
          const newPosition = this.groupedChangeTaskData.added.newIndex + 1
          const stageId = this.groupedChangeTaskData.added.column.id
          this.patchTaskPosition(taskId, newPosition, stageId)
        }
        this.groupedChangeTaskData = null
      })
    },

    async patchTaskPosition(taskId, position, stageId) {
      const data = {
        position,
      }

      if (stageId) {
        data.stageId = stageId
      }

      await this.$api.projects.patchTask(taskId, data)
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
