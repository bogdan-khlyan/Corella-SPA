<template>
  <div class="members-column">
    <span class="members-column__label">{{ label }}</span>
    <button class="members-column__button">
      <el-icon>
        <plus/>
      </el-icon>
      <span>{{ titleBtn }}</span>
    </button>
  </div>
</template>


<script>
import {Plus} from "@element-plus/icons-vue";

export default {
  name: "members-table-column",
  components: {Plus},
  props: {
    titleBtn: String,
    label: String
  }
}
</script>

<style scoped lang="scss">
.members-column {
  &__label {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7B7B7B;
  }
}
</style>