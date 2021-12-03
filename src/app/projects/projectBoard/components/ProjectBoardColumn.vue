<template>
  <div class="project-board-column">
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
    >
      <draggable
          class="project-board-column__task-list project-board-column--inner-content"
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
        componentOptions: {
          tag: 'div',
          type: 'transition-group',
        }
      };
    },
    dragListeners() {
      return {
        change: data =>
            this.$emit('status-task-changed', data)
      }
    }
  },
  created() {
    this.columnData = this.projectColumnData
  },
  data() {
    return {
      columnData: null,
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
