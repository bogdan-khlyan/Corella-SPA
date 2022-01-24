<template>
  <div class="table-member">
    <div class="table-member__avatar">
      <img src="../../../../../../assets/images/project/01.jpg" alt="">
    </div>
    <div class="table-member__username">{{ username }}</div>
    <div class="table-member__select">
      <el-select v-model="selectedRole">
        <el-option
          v-for="(option, index) in options"
          :key="index"
          :label="option.label"
          :value="option.value"
        >

        </el-option>
      </el-select>
    </div>
    <div class="table-member__select__remove"></div>
  </div>
</template>

<script>
export default {
  name: "table-member",
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
    font-family: "Rubik";
  }
  &__avatar {
    flex: 0 0 32px;
    img {
      display: block;
      width: 100%;
      border-radius: 50%;
    }

  }
}
</style>

<style lang="scss">
.table-member {
  .el-input {
    &__inner {
      padding: 0;
      height: auto;
      border: none;
    }
    &__suffix {
      right: 8px;
    }
  }
  .el-select {
    width: 100px;
  }
}
</style>
