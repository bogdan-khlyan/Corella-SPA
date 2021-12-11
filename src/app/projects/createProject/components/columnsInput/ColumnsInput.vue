<template>
  <div class="columns-input">
    <column-input
        :column="backlogColumn"
        :disabled="true"/>
    <draggable v-model="columns"

               :key="test"

               v-bind="dragOptions"
               v-on="dragListeners"

               style="display: flex">
      <template #item="{element}">
        <column-input :column="element"/>
      </template>
    </draggable>
    <button
        class="columns-input__button-added-column"
        type="button"
        @click="addColumn">
      <el-icon :size="40" color="#000000"><plus/></el-icon>
    </button>

    <column-input
        :column="doneColumn"
        :disabled="true"/>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ColumnInput from "@/app/projects/createProject/components/columnsInput/ColumnInput";
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
          console.log(JSON.stringify(this.columns))
          ++this.test
          // this.$forceUpdate()
          // this.columns
          // const
          // console.log(JSON.stringify(this.columns))
          // const old = this.columns[data.moved.oldIndex]
          // this.columns[data.moved.oldIndex] = this.columns[data.moved.newIndex]//data.moved.element
          // this.columns[data.moved.newIndex] = old
          // console.log(this.columns)
          // console.log(JSON.stringify(this.columns))
        }
      }
    },
  },
  data() {
    return {

      test: 0,



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
.columns-input {
  display: flex;

  &__button-added-column {
    margin: 12px;

    width: 160px;
    border: none;
    border-radius: 4px;

    cursor: pointer;
  }

}
</style>
