<template>
  <div class="members">
    <div class="members__column">
      <span class="members__label">Roles</span>
      <div class="members__action">
        <base-button type="outline" text="Add role">
          <template #icon>
            <el-icon><plus /></el-icon>
          </template>
        </base-button>
      </div>
    </div>
    <div class="members__column">
      <table-items :table-data="members"/>
      <span class="members__label">Members</span>
      <div class="members__action">
        <base-button @click="$refs.inviteMemberModal.openModal()" type="outline" text="Invite member">
          <template #icon>
            <el-icon><plus /></el-icon>
          </template>
        </base-button>
      </div>
    </div>
  </div>
  <invite-member-modal ref="inviteMemberModal" />
</template>

<script>

import {v4 as uuid} from 'uuid';
import BaseButton from "@/app/common/BaseButton";
import {Plus} from "@element-plus/icons-vue";
import InviteMemberModal from "@/app/projects/projectEditor/components/membersTable/components/InviteMemberPopup";
import TableMember from "@/app/projects/projectEditor/components/membersTable/components/TableMember";
import TableItems from "@/app/projects/projectEditor/components/membersTable/components/TableItems";

export default {
  name: 'members',
  components: {TableItems, TableMember, InviteMemberModal, BaseButton, Plus},
  data() {
    return {
      members: [
        {username: "Lana", role: "Admin"},
        {username: "Alexandra", role: "Developer"}
      ]
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
  display: flex;
  margin: 0 -12px;

  &__label {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }

  &__column {
    flex: 0 1 50%;
    padding: 0 12px;
  }
  &__action {
    padding: 20px;
    border: 1px solid #E7E7E7;
    border-radius: 4px;
  }
}

//.members {
//  position: relative;
//
//  width: 100%;
//
//  padding-bottom: 16px;
//
//  border: 1px solid #E7E7E7;
//  box-sizing: border-box;
//  border-radius: 4px;
//
//  &__header {
//    display: flex;
//
//    &--item {
//      width: 100%;
//      padding: 10px 20px;
//      > span {
//        font-family: Rubik, sans-serif;
//        font-style: normal;
//        font-weight: normal;
//        font-size: 12px;
//        line-height: 16px;
//
//        color: #7B7B7B;
//      }
//    }
//
//  }
//
//  &__content {
//
//  }
//
//  &__member {
//    display: flex;
//
//    &--cell {
//      width: 100%;
//      padding: 10px 20px;
//    }
//
//    &--actions {
//      width: 100px;
//    }
//
//  }
//
//  &__button {
//    padding-left: 20px;
//    > button {
//      display: flex;
//      justify-content: center;
//      align-items: center;
//
//      width: 180px;
//      height: 50px;
//
//      border: 1px solid #0AB258;
//      box-sizing: border-box;
//      border-radius: 4px;
//
//      font-family: Rubik, sans-serif;
//      font-style: normal;
//      font-weight: normal;
//      font-size: 14px;
//      line-height: 24px;
//
//      color: #3B3B3B;
//
//      background-color: #FFFFFF;
//
//      transition: 200ms;
//      cursor: pointer;
//
//      @media screen and (max-width: 980px) {
//        width: 160px;
//      }
//      @media screen and (max-width: 500px) {
//        width: 120px;
//        height: 40px;
//        font-size: 10px;
//      }
//      @media screen and (max-width: 420px) {
//        //width: 40px;
//        width: calc(50% - 30px);
//        > span {
//          display: none;
//        }
//        > i {
//          margin-right: 0!important;
//        }
//      }
//
//      &:hover {
//        color: $text-white;
//        background-color: #0AB258;
//
//        > i {
//          color: #FFFFFF;
//        }
//      }
//
//      i {
//        transition: 200ms;
//        margin-right: 8px;
//        --color: #3B3B3B;
//      }
//
//    }
//  }
//
//  //&__wrapper {
//  //  margin-top: 12px;
//  //  margin-bottom: 12px;
//  //
//  //  > label {
//  //    font-family: Rubik, sans-serif;
//  //    font-style: normal;
//  //    font-weight: normal;
//  //    font-size: 12px;
//  //    line-height: 16px;
//  //
//  //    color: #7B7B7B;
//  //  }
//  //
//  //}
//
//  &__vertical-line {
//    position: absolute;
//    top: 10px;
//    left: 50%;
//
//    width: 1px;
//    height: calc(100% - 20px);
//
//    background: #EEEEEE;
//    border-radius: 2px;
//  }
//
//}
</style>
