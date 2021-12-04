<template>
  <div class="project-board-column" ref="projectBoardColumn">
    <h3 class="project-board-column__title project-board-column--inner-content">

      <template
          v-if="!loading"
      >
        {{ projectColumnData.column }}
      </template>

      <el-skeleton
          v-else
          animated
      >
        <template
            #template
        >
          <el-skeleton-item variant="text"></el-skeleton-item>
        </template>
      </el-skeleton>

    </h3>

    <perfect-scrollbar
        class="project-board-column__scroll-content"
        :options="scrollOptions"
    >
      <draggable
          class="project-board-column__task-list project-board-column--inner-content"
          v-if="isAllCompleted"
          v-model="columnData.tasks"
          v-bind="dragOptions"
          v-on="dragListeners"
      >
        <template
            #item="{element}"
        >
          <project-board-column-task-card
              :loading="loading"
              :project-task="element">
          </project-board-column-task-card>

        </template>
      </draggable>

      <div
          class="project-board-column__task-list project-board-column--inner-content"
          ref="projectBoard"
          v-else
      >
        <step-animation
            v-if="columnTransitionEnd"
            @item-complete="handleItemComplete"
            @all-complete="handleAllCompleted"
        >
          <project-board-column-task-card
              v-for="(projectTask, i) in fakeColumnData"
              :key="projectTask.order"
              :project-task="projectTask"
              :loading="loading"
              :data-index="i">
          </project-board-column-task-card>
        </step-animation>
      </div>

    </perfect-scrollbar>
  </div>
</template>

<script>
import ProjectBoardColumnTaskCard from "@/app/projects/projectBoard/components/ProjectBoardColumnTaskCard";
import draggable from 'vuedraggable'

export default {
  name: "ProjectBoardColumn",
  components: {
    ProjectBoardColumnTaskCard,
    draggable,
  },
  props: {
    projectColumnData: {
      type: Object
    },
    columnTransitionEnd: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "tasks",
        disabled: false,
        itemKey: 'order',
        ghostClass: "project-task-card--ghost",
      };
    },
    dragListeners() {
      return {
        change: data =>
            this.$emit('status-task-changed', data)
      }
    },
    scrollOptions() {
      return {
        suppressScrollY: this.isAllCompleted
      }
    },
    fakeColumnData() {
      return this.projectColumnData.tasks
    }
  },
  created() {
    this.columnData = this.projectColumnData
  },
  mounted() {
    this.columnHeight = this.$refs.projectBoard.clientHeight
  },
  data() {
    return {
      columnData: null,
      isAllCompleted: false,
      tasksCount: 0,
      columnHeight: 0,
      reduceHeight: 0
    }
  },
  methods: {
    handleAllCompleted() {
      this.isAllCompleted = true
    },

    handleItemComplete: function ({el}) {
      this.reduceHeight += el.clientHeight + 20
      if (this.reduceHeight >= this.columnHeight) this.isAllCompleted = true
    }
  },
}
</script>

<style scoped lang="scss">
.project-board-column {
  background-color: #EFF3EF;
  border-radius: 8px;
  flex-basis: 346px;
  max-width: 400px;
  box-sizing: border-box;

  &--inner-content {
    margin-left: 30px;
    margin-right: 30px;
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    padding-top: 24px;
    color: #121212;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 2px solid $main-green;
    border-radius: 2px;
  }

  &__task-list {
    min-height: calc(100vh - 197px);
  }

  &__scroll-content {
    min-height: calc(100vh - 197px);
    max-height: calc(100vh - 220px);
    margin-top: 20px;
  }
}
</style>

<style lang="scss">
.project-task-card--ghost {
  opacity: 0.5;
  background: #c8ebfb !important;
}

.project-board-column {
  .el-scrollbar .is-horizontal {
    display: none;
  }
}
</style>
