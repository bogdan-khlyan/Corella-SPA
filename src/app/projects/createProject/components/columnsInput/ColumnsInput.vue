<template>
  <div class="columns-input">
    <column-input
        :column="backlogColumn"
        :disabled="true"/>
    <draggable v-model="columns" style="display: flex">
      <template #item>
        <column-input/>
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
    addColumn() {
      this.columns.push({
        id: uuid(),
        order: 1,
        name: 'New column'
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
