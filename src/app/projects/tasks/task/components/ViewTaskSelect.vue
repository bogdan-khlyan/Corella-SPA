<template>
  <div class="view-task-select">
    <el-select v-model="selectedMembers" multiple placeholder="Select members">
      <el-option
          v-for="member in dataMembers"
          :key="member.id"
          :label="member.name"
          :value="member.name + member.speciality"
      >

        <span class="view-task-select__name">{{ member.name }}</span>
        <span class="view-task-select__decor"></span>
        <span class="view-task-select__speciality">{{ member.speciality }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "view-task-select",
  data() {
    return {
      selectedMembers: [],
      dataMembers: [
        {
          id: 1,
          name: "Lana",
          speciality: "Designer"
        }, {
          id: 2,
          name: "Anastasiya",
          speciality: "Front-end"
        }, {
          id: 3,
          name: "Mary-Anna",
          speciality: "Back-end"
        }, {
          id: 4,
          name: "Stanislav",
          speciality: "Front-end"
        }, {
          id: 5,
          name: "Alex",
          speciality: "Front-end"
        }, {
          id: 6,
          name: "Bogdan",
          speciality: "Back-end"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.view-task-select {
  &__decor {
    width: 4px;
    height: 4px;
    margin: 0px 8px;
    background-color: #212121;
    border-radius: 50%;
  }
}
</style>
<style lang="scss">
.el-select {
  width: 100%;
  &__popper {

  }
  &__tags {
    border: none;
    ~ span {
      width: 100%;
    }
  }
  &__tags-text {
    font-size: 16px;
    color: #212121;
  }
}
.el-input {

  &__inner {
    min-height: 56px;
    padding: 0px 20px;
    border-radius: 4px;
  }
}
.el-select .el-select__tags .el-tag {
  background-color: #F6F6F6;
  border-radius: 4px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  margin: 8px 0px 8px 8px;
}
.el-select .el-select__tags > span {
  display: block;
}
.el-select-dropdown__item {
  display: flex;
  align-items: center;
}
.el-tag {
  &__close {
    height: 16px;
    width: 16px;
    margin: 0px 0px 0px 8px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
  .el-icon svg {
    margin: 0;
  }
  &--small {
    padding: 2px 15px 2px 8px;
  }
}
.el-tag .el-icon {
  right: 0;
  top: 0;
}
.el-popper__arrow {
  &__arrow {
    display: none;
  }
}

</style>