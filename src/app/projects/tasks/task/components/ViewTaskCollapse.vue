<template>
  <div class="view-task-collapse">
    <h4 class="view-task-collapse__title">
      <span class="view-task-collapse__title--text">Issues</span>
      <span class="view-task-collapse__title--count">2</span>
    </h4>
    <div class="view-task-collapse__content">
      <el-collapse>
        <el-collapse-item
            title="As a user, I want to be able to create new versions for projects and link them to issues or hotfixes"
            name="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius in quas quisquam sequi, temporibus tenetur!
          Iusto natus ratione sequi.
        </el-collapse-item>
        <el-collapse-item title="As user, I want to be able to drag and drop files" name="2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius in quas quisquam sequi, temporibus tenetur!
          Iusto natus ratione sequi.
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>


<script>
export default {
  name: "ViewTaskCollapse"
}
</script>
<style lang="scss">
.view-task-collapse {
  padding: 24px 0px;
  border-top: 1px solid #EEEEEE;
  border-bottom: 1px solid #EEEEEE;
  &__title {
    margin: 0px 0px 16px 0px;
    position: relative;
    display: inline-block;
    &--text {
      font-family: "Rubik";
      font-size: 18px;
    }
    &--count {
      position: absolute;
      top: -3px;
      right: -30px;
      border-radius: 50%;
      background-color: #F2301A;
      color: #fff;
      padding: 2px;
      min-height: 24px;
      min-width: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
    }
  }
}
.el-collapse {
  border: none;
}
.el-collapse-item {
  margin: 0px 0px 16px 0px;
  background-color: #FBFBFB;

  &:last-child {
    margin: 0;
  }
  &__wrap {
    border: none;
    background-color: #FBFBFB;

  }
  &__header {
    border: none;
    background-color: #FBFBFB;
    padding: 16px 20px;
    font-weight: 400;
    font-family: "Rubik";
    font-size: 16px;
  }
  &__content {
    padding: 0px 20px 16px 20px;
    font-family: "Rubik";
    font-size: 14px;
    line-height: 16px;
  }
  &__arrow {

  }
}
</style>

