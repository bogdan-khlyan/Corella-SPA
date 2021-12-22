<template>
  <div class="edit-task-select">
    <base-title text="Members" />
    <el-select v-model="selectedMembers" multiple placeholder="Select members">
      <el-option
          v-for="member in dataMembers"
          :key="member.id"
          :label="member.name"
          :value="member.name + member.speciality"
      >

        <div class="edit-task-select__name">{{ member.name }}</div>
        <div class="edit-task-select__decor"></div>
        <div class="edit-task-select__speciality">{{ member.speciality }}</div>
        <div class="edit-task-select__check">
          <svg-icon :icon="require('@/assets/images/icons/tasks/check.svg')" />
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import BaseTitle from "@/app/common/BaseTitle";
export default {
  name: "edit-task-select",
  components: {BaseTitle},

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
.edit-task-select {
  &__decor {
    width: 4px;
    height: 4px;
    margin: 0px 8px;
    background-color: #212121;
    border-radius: 50%;
  }
  &__check {
    margin: 0px 0px 0px auto;
    display: none;
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
.el-select-dropdown {

  &__item {
    display: flex;
    align-items: center;
    height: 58px;
    line-height: 58px;
    padding: 0px 22.5px 0px 15px;
    &:hover {
      background-color: #FAFAFA;
    }
  }
  &__wrap {
    max-height: 270px;
    overflow: auto;
  }
  &__list {
    margin: 0 !important;
  }
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover {
  background-color: #FAFAFA;
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
  background-color: #FAFAFA;
  color: inherit;
  font-weight: 400;
  .edit-task-select__check {
    display: block;
  }
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
.el-popper {
  &__arrow {
    display: none;
  }
}

.el-select__popper.el-popper[role=tooltip] {
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid #E7E7E7;
}

</style>