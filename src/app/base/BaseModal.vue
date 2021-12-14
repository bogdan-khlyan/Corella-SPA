<template>
  <div class="base-modal">
    <el-dialog :width="width" v-model="dialogVisible" :before-close="handleClose">

      <template #title>
        <div class="base-modal__header">
          <img v-if="image" :src="image" alt="">
          <div class="base-modal__header--title">{{ title }}</div>
        </div>
      </template>

      <div v-loading="loading" class="base-modal__content">
        <form @submit.prevent="$emit('submit')">
          <slot></slot>

          <el-button :disabled="loading" native-type="submit"
                     class="base-modal__footer-btn" icon="el-icon-check"
                     type="success">
            {{ titleBtn }}
          </el-button>

        </form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    title: String,
    image: String,
    visible: Boolean,
    loading: Boolean,
    titleBtn:{ type: String, default: 'Save' },

    width: { type: String, default: '420px' }
  },
  watch:{
    visible(){
      this.dialogVisible = this.visible
    }
  },
  data(){
    return {
      dialogVisible: true
    }
  },
  created() {
    this.dialogVisible = this.visible
  },
  methods: {
    handleClose: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>