<template>
  <div class="upload-file-image">
    <el-image 
      :src="file.src" 
      :preview-src-list="[file.src]"
      :initial-index="1">
    </el-image>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  name: 'upload-file-image',
  props: {
    file: { type: Object },
  },
}

</script>

<style lang="scss">
  .upload-file-image {
    position: relative;
    height: 80px;
    &__icon {
      fill: #fff;
      position: relative;
      z-index: 2;
    }
    .el-image {
      height: 100%;
      object-fit: cover;
    }
  }

</style>