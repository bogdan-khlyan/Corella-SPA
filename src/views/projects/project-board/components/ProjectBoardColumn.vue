<template>
  <div ref="projectBoardColumn" class="project-board-column">
    <div
      v-if="leftArrow"
      class="project-board-column__arrow"
      @click="$emit('click-left-arrow')"
    >
      <img src="@/assets/images/icons/common/circle-sector.png" alt="" />
      <a>
        <img src="@/assets/images/icons/common/icon-arrow.svg" alt="" />
      </a>
    </div>

    <div
      v-if="rightArrow"
      class="project-board-column__arrow right"
      @click="$emit('click-right-arrow')"
    >
      <img src="@/assets/images/icons/common/circle-sector2.png" alt="" />
      <a>
        <img src="@/assets/images/icons/common/icon-arrow.svg" alt="" />
      </a>
    </div>

    <h3 class="project-board-column__title project-board-column--inner-content">
      <template v-if="!loading">
        {{ projectColumnData.name }}
      </template>

      <el-skeleton v-else animated>
        <template #template>
          <el-skeleton-item variant="text" />
        </template>
      </el-skeleton>
    </h3>

    <perfect-scrollbar
      class="project-board-column__scroll-content"
      :options="scrollOptions"
    >
      <draggable
        v-if="isAllCompleted"
        v-model="columnData.tasks"
        class="project-board-column__task-list project-board-column--inner-content"
        v-bind="dragOptions"
        v-on="dragListeners"
      >
        <template #item="{ element }">
          <project-board-column-task-card
            :loading="loading"
            :project-task="element"
          />
        </template>
      </draggable>

      <div
        v-else
        ref="projectBoard"
        class="project-board-column__task-list project-board-column--inner-content"
      >
        <step-animation
          v-if="columnTransitionEnd"
          @item-complete="handleItemComplete"
          @all-complete="handleAllCompleted"
        >
          <project-board-column-task-card
            v-for="(projectTask, i) in fakeColumnData"
            :key="projectTask.id"
            :project-task="projectTask"
            :loading="loading"
            :data-index="i"
          />
        </step-animation>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import ProjectBoardColumnTaskCard from '@/views/projects/project-board/components/ProjectBoardColumnTaskCard'
import draggable from 'vuedraggable'

export default {
  name: 'ProjectBoardColumn',
  components: {
    ProjectBoardColumnTaskCard,
    draggable,
  },
  props: {
    projectColumnData: {
      type: Object,
    },
    columnTransitionEnd: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    leftArrow: {
      type: Boolean,
      default: false,
    },
    rightArrow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      columnData: null,
      isAllCompleted: false,
      tasksCount: 0,
      columnHeight: 0,
      reduceHeight: 0,
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'tasks',
        disabled: false,
        itemKey: 'order',
        ghostClass: 'project-task-card--ghost',
      }
    },
    dragListeners() {
      return {
        change: (data) => this.$emit('status-task-changed', data),
      }
    },
    scrollOptions() {
      return {
        suppressScrollY: this.isAllCompleted,
      }
    },
    fakeColumnData() {
      return this.projectColumnData.tasks
    },
  },
  created() {
    this.columnData = this.projectColumnData
  },
  mounted() {
    this.columnHeight = this.$refs.projectBoard.clientHeight
  },
  methods: {
    handleAllCompleted() {
      this.isAllCompleted = true
    },

    handleItemComplete({ el }) {
      this.reduceHeight += el.clientHeight + 20
      if (this.reduceHeight >= this.columnHeight) this.isAllCompleted = true
    },
  },
}
</script>

<style scoped lang="scss">
.project-board-column {
  background-color: #eff3ef;
  border-radius: 8px;
  flex-basis: 346px;
  max-width: 400px;
  box-sizing: border-box;

  &__arrow {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 48px;
    height: 43px;

    border-radius: 50%;

    display: flex;
    padding-right: 17px;
    padding-bottom: 12px;

    cursor: pointer;
    transition: 200ms;

    &:hover {
      > img {
        opacity: 0.8;
      }
    }

    &.right {
      left: unset;
      right: 0;

      padding-left: 17px;
      padding-right: unset;

      > img {
        border-top-left-radius: unset;
        border-top-right-radius: 8px;
      }

      > a {
        margin-top: auto;
        margin-right: auto;
        margin-left: unset;

        > img {
          transform: rotate(180deg);
        }
      }
    }

    > img {
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 8px;

      transition: 200ms;
    }

    > a {
      margin-top: auto;
      margin-left: auto;

      z-index: 1;
    }
  }

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
