<template>
  <div class="members__wrapper">
    <label>Members</label>
    <div class="members">
      <div class="members__header">
        <div class="members__header--item">
          <span>Member</span>
        </div>
        <div class="members__header--item">
          <span>Role</span>
        </div>
      </div>
      <div class="members__content">
        <div v-for="member in members" :key="member.id" class="members__member">
          <div class="members__member--cell">
            <base-select :options="[{ label: 'test', value: 'test' }]"/>
            {{member.username}}
          </div>
          <div class="members__member--cell">
<!--            <base-select/>-->
          </div>
          <div class="members__member--actions">

          </div>
        </div>
      </div>
      <div class="members__button">
        <button @click="addMember" type="button">
          <el-icon><plus/></el-icon>
          <span>Add member</span>
        </button>
      </div>
      <div class="members__vertical-line"/>
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/app/common/components/BaseSelect";
import {Plus} from "@element-plus/icons-vue";
import { v4 as uuid } from 'uuid';

export default {
  name: 'members',
  components: { BaseSelect, Plus },
  data() {
    return {
      members: []
    }
  },
  methods: {
    addMember() {
      this.members.push({
        id: uuid(),
        username: '',
        role: ''
      })
    }
  }
}
</script>

<style scoped lang="scss">
.members {
  position: relative;

  width: 100%;

  padding-bottom: 16px;

  border: 1px solid #E7E7E7;
  box-sizing: border-box;
  border-radius: 4px;

  &__header {
    display: flex;

    &--item {
      width: 100%;
      padding: 10px 20px;
      > span {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;

        color: #7B7B7B;
      }
    }

  }

  &__content {

  }

  &__member {
    display: flex;

    &--cell {
      width: 100%;
      padding: 10px 20px;
    }

    &--actions {
      width: 100px;
    }

  }

  &__button {
    padding-left: 20px;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 180px;
      height: 50px;

      border: 1px solid #0AB258;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #3B3B3B;

      background-color: #FFFFFF;

      transition: 200ms;
      cursor: pointer;

      &:hover {
        color: $text-white;
        background-color: #0AB258;

        > i {
          color: #FFFFFF;
        }
      }

      i {
        transition: 200ms;
        margin-right: 8px;
        --color: #3B3B3B;
      }

    }
  }

  &__wrapper {

    > label {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #7B7B7B;
    }

  }

  &__vertical-line {
    position: absolute;
    top: 10px;
    left: 50%;

    width: 1px;
    height: calc(100% - 20px);

    background: #EEEEEE;
    border-radius: 2px;
  }

}
</style>
