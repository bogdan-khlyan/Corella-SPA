<template>
  <div class="project-board-column">
    <h3 class="project-board-column__title project-board-column--inner-content">

      <template v-if="!loading">
        {{ projectColumnData.column }}
      </template>

      <el-skeleton v-else animated>
        <template #template>
          <el-skeleton-item variant="text"></el-skeleton-item>
        </template>
      </el-skeleton>

    </h3>
    <el-scrollbar class="project-board-column__scroll-content">

      <div class="project-board-column__task-list project-board-column--inner-content">
        <project-board-column-task-card
            v-for="(projectTask, i) in projectColumnData.tasks"
            :key="i"
            :loading="loading"
            :project-task="projectTask">
        </project-board-column-task-card>
      </div>

    </el-scrollbar>
  </div>
</template>

<script>
import ProjectBoardColumnTaskCard from "@/app/projects/project-board/components/ProjectBoardColumnTaskCard";

export default {
  name: "ProjectBoardColumn",
  components: {
    ProjectBoardColumnTaskCard,
  },
  props: {
    projectColumnData: {
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
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
    height: 200px;
  }

  &__scroll-content {
    height: calc(100% - 87px);
    padding-bottom: 20px;
    margin-top: 20px;
  }
}
</style>
