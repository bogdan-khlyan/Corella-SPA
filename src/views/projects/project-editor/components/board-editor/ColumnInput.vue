<template>
  <div class="column-card">
    <button
      class="column-card__btn-delete"
      type="button"
      :disabled="deleteDisabled"
      @click="deleteColumn"
    >
      <el-icon>
        <close />
      </el-icon>
    </button>
    <div class="column-card__header">
      <div v-if="inputDisabled">
        {{ column.name }}
      </div>
      <input
        v-else
        v-model="column.name"
        type="text"
        @input="$emit('update', column)"
      />
      <hr />
    </div>
    <div class="column-card__content">
      <div class="column-card__task" />
      <div class="column-card__task" />
      <div v-show="!twoTask" class="column-card__task" />
    </div>
  </div>
</template>

<script>
import { Close } from '@element-plus/icons-vue'

export default {
  name: 'ColumnInput',
  components: { Close },
  model: {
    prop: 'column',
    event: 'input',
  },
  props: {
    twoTask: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Object,
    },
    inputDisabled: {
      type: Boolean,
      default: false,
    },
    deleteDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update'],
  mounted() {
    // console.log(this.column)
  },
  methods: {
    deleteColumn($event) {
      $event.stopPropagation()
      this.$emit('delete', this.column.id)
    },
  },
}
</script>

<style scoped lang="scss">
.column-card {
  position: relative;

  margin: 12px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;

  width: 175px;
  height: 242px;

  background: #eff3ef;
  border-radius: 4px;

  cursor: pointer;

  &__btn-delete {
    position: absolute;
    top: -8px;
    right: -8px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    background: #f32b2a;
    border: 2px solid #ffffff;
    border-radius: 50%;

    cursor: pointer;

    .el-icon {
      --color: #ffffff;
    }

    &:disabled {
      cursor: no-drop;
      background: #979797;
    }
  }

  &__header {
    input,
    div {
      padding-top: 12px;
      padding-bottom: 12px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      text-align: center;

      color: #212121;

      width: 100%;
      background-color: transparent;
      border: none;
    }

    hr {
      padding: 0;
      margin: 0;

      height: 2px;

      border-radius: 2px;
      border: none;

      background: linear-gradient(180deg, #20c560 0%, #04a481 100%);
    }
  }

  &__task {
    margin-top: 8px;
    margin-bottom: 8px;

    width: 100%;
    height: 40px;

    background-color: #ffffff;
    border-radius: 6px;
  }

  &:nth-child(even) {
    .column-card__task:nth-child(3) {
      display: none;
    }
  }
}
</style>
