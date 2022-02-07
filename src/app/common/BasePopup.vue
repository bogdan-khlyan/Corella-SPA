<template>
  <div class="base-popup">
    <el-dialog :width="width"
               :model-value="modelValue"
               :before-close="handleClose"
               :close-on-click-modal="true">

      <template #title>
        <div class="base-popup__header">
          <img v-if="image" :src="image" alt="">
          <div :style="{fontWeight: image ? '': 600}" class="base-modal__header-title">{{ title }}</div>
        </div>
      </template>

      <div v-loading="loading"
           class="base-popup__content">
        <form @submit.prevent>
          <slot></slot>

          <button v-if="showBtn" class="base-popup__button">
            <img src="@/assets/images/icons/buttons/icon-check.svg" alt="">
            {{ titleBtn }}
          </button>

        </form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'base-popup',
  model: { prop: 'modelValue', event: 'update'},
  props: {
    title: String,
    image: String,
    modelValue: Boolean,
    loading: Boolean,
    titleBtn:{ type: String, default: 'Save' },
    showBtn: { type: Boolean, default: true },
    width: { type: String, default: '420px' }
  },
  methods: {
    handleClose: function () {
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style lang="scss">
.base-popup {
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;

    &-title {
      color: $text-black;
    }

    img {
      margin-right: 8px;
    }
  }
  .el-dialog__header {
    position: relative;
    padding: 20px 0 18px 0;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2px;

      margin: auto;
      width: 300px;

      border-bottom: 2px solid #20C560;
      border-radius: 2px;
    }
  }
  .el-dialog__headerbtn {
    &:after {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 0;
      height: 0;
      content: '';

      transition: 0.1s ease-in;
      background: rgba(243, 43, 42, 0.08);
      border-bottom-left-radius: 90%;
    }

    &:hover {
      svg path {
        transition: 0.2s ease-in;
        fill: #F32B2A;
      }
      &:after  {
        width: 65px;
        height: 65px;
      }
    }
  }

  .el-dialog__body {
    padding: 20px;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Rubik, sans-serif;
    font-size: 16px;
    color: $text-white;

    width: 100%;
    height: 56px;
    margin-top: 40px;
    border: none;
    background: $primary-bg-default;
    border-radius: 4px;

    transition: 0.2s ease-in;
    cursor: pointer;

    img {
      margin-right: 10px;
    }

    &:hover {
      background: $primary-bg-hover;
    }
  }
}
</style>
