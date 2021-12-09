<template>
  <div class="file-review">
    <div :key="index" v-for="(src, index) in fileItemsSrc" class="file-review__item">
      {{ src }}
    </div>
    <div class="file-review__new-item">

    </div>
  </div>
</template>

<script>
  export default {
    name: "file-review",
    data() {
      return {
        fileItemsSrc: ['stub']
      }
    }
  }
</script>

<style lang="scss">


</style>