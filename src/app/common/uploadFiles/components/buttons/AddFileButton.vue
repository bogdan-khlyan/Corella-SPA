<template>
  <button class="add-file-button">
    <el-icon><plus /></el-icon>
  </button>
</template>

<script>
import { Plus } from '@element-plus/icons-vue'

export default {
  name: 'AddFileButton',
  components: { Plus },
}
</script>

<style scoped lang="scss">
.add-file-button {
  margin: 6px;

  width: 100px;
  height: 100px;

  border: 1px solid #0AB258;
  box-sizing: border-box;
  border-radius: 4px;

  background-color: #FFFFFF;

  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: #0AB258;

    .el-icon {
      color: #FFFFFF;
    }
  }

  .el-icon {
    font-size: 18px;
  }
}
</style>
