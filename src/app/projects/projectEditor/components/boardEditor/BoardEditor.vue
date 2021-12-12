<template>
  <div class="board-editor">
    <div class="board-editor__label">
      <label>Board settings</label>
    </div>
    <div class="board-editor__content">
      <column-input
          :column="backlogColumn"
          :delete-disabled="true"
          :two-task="true"/>

      <draggable v-model="columns"

                 v-bind="dragOptions"
                 v-on="dragListeners"

                 style="display: flex">
        <template #item="{element}">
          <column-input
              :column="element"
              @delete="deleteColumn"/>
        </template>
      </draggable>
      <button
          class="board-editor__button-added-column"
          type="button"
          @click="addColumn">
        <el-icon color="#000000"><plus/></el-icon>
      </button>

      <column-input
          :column="doneColumn"
          :delete-disabled="true"/>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ColumnInput from "@/app/projects/projectEditor/components/boardEditor/ColumnInput";
import {Plus} from "@element-plus/icons-vue";
import { v4 as uuid } from 'uuid';

export default {
  name: 'columns-input',
  components: { ColumnInput, Plus, draggable },
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
        change: data => {
          console.log(data)
        }
      }
    },
  },
  data() {
    return {
      backlogColumn: {
        id: uuid(),
        name: 'Backlog',
        isDefault: true,
        order: 1
      },
      doneColumn: {
        id: uuid(),
        name: 'Done',
        isDefault: true,
        order: 2
      },
      columns: []
    }
  },
  methods: {
    deleteColumn(columnId) {
      const index = this.columns.findIndex(column => column.id === columnId)
      this.columns.splice(index, 1)
    },
    addColumn() {
      this.columns.push({
        id: uuid(),
        name: 'New column' + (this.columns.length + 1)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.board-editor {

  &__label {
    padding-left: 12px;
    > label {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #7B7B7B;
    }
  }

  &__content {
    display: flex;
  }

  &__button-added-column {
    margin: 12px;

    width: 160px;
    border: 2px dashed #04A481;
    border-radius: 4px;

    background-color: transparent;

    cursor: pointer;

    .el-icon {
      font-size: 24px!important;
    }
  }

}
</style>
