<template>
  <div class="table-member">
    <div class="table-member__avatar">
      <img src="@/assets/images/profile/default-avatar.jpg" alt="">
    </div>
    <div class="table-member__username">{{ username }}</div>
    <div class="table-member__select">
      <base-select
          :options="options"
      />
    </div>
    <button type="button" class="table-member__remove">
      <svg-icon :icon="require('@/assets/images/icons/tasks/delete.svg')"></svg-icon>
    </button>
  </div>
</template>

<script>
import BaseSelect from "@/app/common/BaseSelect";

export default {
  name: "table-member",
  components: {BaseSelect},
  props: {
    username: {type: String, required: true},
    role: {type: String, required: true}
  },
  data() {
    return {
      selectedRole: 'Admin',
      options: [
        {
          value: "Owner Owner Owner Owner",
          label: "Owner Owner Owner Owner"
        },
        {
          value: "Admin",
          label: "Admin"
        },
        {
          value: "Moderator",
          label: "Moderator"
        },
        {
          value: "Developer",
          label: "Developer"
        },
        {
          value: "Guest",
          label: "Guest"
        },
      ]
    }
  }
}
</script>


<style scoped lang="scss">
.table-member {
  display: flex;
  align-items: center;

  &__username {
    flex: 1 1 auto;
    padding-left: 16px;
    padding-right: 10px;
    color: #212121;
    font-family: Rubik, sans-serif;
  }

  &__avatar {
    flex: 0 0 32px;

    img {
      display: block;
      width: 100%;
      border-radius: 50%;
    }
  }
  &__remove {
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    margin-left: 41px;
    border: none;
    padding: 0;
  }
}
</style>

<style lang="scss">
.table-member {
  .el-input {
    width: 80px;
    &__inner {
      padding: 0;
      background-color: transparent;
      line-height: 1;
      height: auto;
      border: none;
      text-align: right;
    }

    &__suffix {
      right: 0;
      top: 50%;
      transform: translate(100%, -50%);
      background-color: transparent;
    }
  }

  .el-select {

  }
  &__remove {
    svg {
      fill: #F32B2A;
      width: 22px;
      height: 22px;
    }
  }
}
</style>
