<template>
  <div class="members__wrapper">
    <label>Members</label>
    <div class="members">
      <div class="members__header">
        <div class="members__header--item">
          <span>Member</span>
        </div>
        <div class="members__header--item">
          <span>Member</span>
        </div>
      </div>
      <div class="members__member">
        <div class="members__member--cell">
          <span></span>
        </div>
        <div class="members__member--cell">

        </div>
      </div>
      <div class="members__button">
        <button type="button">
          <el-icon><plus/></el-icon>
          <span>Add member</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {Plus} from "@element-plus/icons-vue";

export default {
  name: 'members',
  components: { Plus },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.members {
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
        color: #FFFFFF;
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

}
</style>
