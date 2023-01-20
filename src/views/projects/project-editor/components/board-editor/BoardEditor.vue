<template>
  <div v-loading="loading" class="board-editor">
    <div class="board-editor__label">
      <label>Board settings</label>
    </div>
    <div class="board-editor__content">
      <column-input
        v-if="backlogColumn"
        :column="backlogColumn"
        :delete-disabled="true"
        :two-task="true"
        @update="updateProjectStageName"
      />

      <draggable
        v-model="draggableProjectStages"
        v-bind="dragOptions"
        style="display: flex"
        v-on="dragListeners"
      >
        <template #item="{ element }">
          <column-input
            :column="element"
            @update="updateProjectStageName"
            @delete="deleteProjectStage"
          />
        </template>
      </draggable>

      <button
        v-loading="createStageLoading"
        class="board-editor__button-added-column"
        type="button"
        @click="createProjectStage"
      >
        <el-icon color="#000000">
          <plus v-if="!createStageLoading" />
        </el-icon>
      </button>

      <column-input
        v-if="doneColumn"
        :column="doneColumn"
        :delete-disabled="true"
        @update="updateProjectStageName"
      />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ColumnInput from '@/views/projects/project-editor/components/board-editor/ColumnInput'
import { Plus } from '@element-plus/icons-vue'

export default {
  name: 'ColumnsInput',
  components: {
    ColumnInput,
    Plus,
    draggable,
  },
  data() {
    return {
      updateTimeoutId: null,
      loading: false,
      createStageLoading: false,
      projectStages: [],
      draggableProjectStages: [],
      backlogColumn: null,
      doneColumn: null,
    }
  },
  computed: {
    projectId() {
      return this.$route.params.projectId
    },

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
        change: this.updateProjectStagePosition,
      }
    },
  },
  created() {
    this.loadProjectStages()
  },
  methods: {
    async loadProjectStages() {
      this.loading = true
      this.projectStages = await this.$api.projects.loadProjectStages(
        this.$route.params.projectId
      )
      this.setDefaultColumns()
      this.setDraggableProjectStages()
      this.loading = false
    },

    setDefaultColumns() {
      // eslint-disable-next-line prefer-destructuring
      this.backlogColumn = this.projectStages[0]
      this.doneColumn = this.projectStages[this.projectStages.length - 1]
    },

    setDraggableProjectStages() {
      this.draggableProjectStages = this.projectStages.filter(
        (stage) => !stage.isDefault
      )
    },

    async deleteProjectStage(stageId) {
      const deletePromise = this.$api.projects.deleteStage(
        this.projectId,
        stageId
      )

      const index = this.draggableProjectStages.findIndex(
        (projectStage) => projectStage.id === stageId
      )
      this.draggableProjectStages.splice(index, 1)

      await deletePromise
    },

    async createProjectStage() {
      this.createStageLoading = true

      const lastDraggableProjectStage =
        this.draggableProjectStages[this.draggableProjectStages.length - 1]

      const projectStage = await this.$api.projects.createStage(
        this.projectId,
        { name: `New column${lastDraggableProjectStage.position + 1}` }
      )

      this.draggableProjectStages.push(projectStage)

      this.createStageLoading = false
    },

    updateProjectStage(projectStageId, data) {
      return this.$api.projects.patchStage(this.projectId, projectStageId, data)
    },

    async updateProjectStageName(projectStage) {
      if (this.updateTimeoutId) {
        clearTimeout(this.updateTimeoutId)
      }

      this.updateTimeoutId = setTimeout(() => {
        this.updateProjectStage(projectStage.id, { name: projectStage.name })
      }, 500)
    },

    async updateProjectStagePosition(movedData) {
      this.updateProjectStage(movedData.moved.element.id, {
        position: movedData.moved.newIndex + 2,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.board-editor {
  width: 100%;
  overflow-y: scroll;

  &__label {
    padding-left: 12px;

    > label {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #7b7b7b;
    }
  }

  &__content {
    width: max-content;
    display: flex;
  }

  &__button-added-column {
    margin: 12px;

    width: 160px;
    border: 2px dashed #04a481;
    border-radius: 4px;

    background-color: transparent;

    cursor: pointer;

    .el-icon {
      font-size: 24px !important;
    }
  }
}
</style>
