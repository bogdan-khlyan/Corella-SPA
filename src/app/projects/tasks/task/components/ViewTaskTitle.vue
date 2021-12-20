<template>
  <h3 class="view-task-title">{{ title }}</h3>
</template>

<script>
export default {
  name: "view-task-title",
  props: {
    title: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.view-task-title {
  font-family: "Rubik";
  line-height: 16px;
  margin: 0px 0px 4px 0px;
  font-size: 12px;
  color: #7B7B7B;
  font-weight: 400;
}
</style>