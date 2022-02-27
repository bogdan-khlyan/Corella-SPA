<template>
  <div class="base-title">{{ text }}</div>
</template>

<script>
export default {
  name: "base-title",
  props: {
    text: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.base-title {
  font-family: "Rubik", sans-serif;
  line-height: 16px;
  margin: 0 0 4px 0;
  font-size: 12px;
  color: #7B7B7B;
  font-weight: 400;
}
</style>
