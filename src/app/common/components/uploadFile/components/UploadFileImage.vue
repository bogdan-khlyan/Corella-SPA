<template>
  <div class="upload-file-image">
    <el-image 
      :src="file.src" 
      :preview-src-list="[file.src]"
      :initial-index="file.id">
    </el-image>
    <a href="" @click.prevent="$emit('remove-image')" class="upload-file-image__remove">
      <svg-icon 
        :custom-class="'upload-file-image__icon'"
        :icon="require('@/assets/images/icons/common/remove.svg')"
        :height="8"
        :width="8"
      />     
    </a>

  </div>
</template>

<script>

export default {
  name: 'upload-file-image',
  props: {
    file: { type: Object },
  },
  emits: ['remove-image'],
  methods: {

  }
}

</script>

<style lang="scss">
  .upload-file-image {
    position: relative;
    height: 80px;
    &__remove {
      position: absolute;
      top: -10px;
      right: -8px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:before {
        content: "";
        position: absolute;
        top: 3px;
        right: 3px;
        width: 24px;
        height: 24px;
        background-color: #F32B2A;
        border-radius: 50%;
      }
    }
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