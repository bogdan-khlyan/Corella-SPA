<template>
  <div class="table-items">
    <span class="table-items__label">Members</span>
    <div class="table-items__main">
      <div class="table-items__header">
        <div v-if="showMembers" class="table-items__header--item">Member</div>
        <div class="table-items__header--item">Role</div>
      </div>
      <div class="table-items__body">
        <ul class="table-items__list">
          <li v-for="member in members" :key="member.id">
            <div v-if="showMembers" class="table-items__member">
              <div class="table-items__member--avatar">
                <img src="@/assets/images/profile/default-avatar.jpg" alt="">
              </div>
              <div class="table-items__member--username">{{ member.username }}</div>
              <div class="table-items__member--select">
                <base-select
                    @update:modelValue="updateRole"
                    :options="options"
                    :modelValue="member.role"
                    :id="member.id"
                />
              </div>
            </div>
            <div v-else class="table-items__role">
              <div class="table-items__role--name">{{ member.role }}</div>
              <button class="table-items__role--edit-button">
                <svg-icon :icon="require('@/assets/images/icons/tasks/edit.svg')"></svg-icon>
              </button>
            </div>
            <button type="button" class="table-items__btn-delete">
              <svg-icon :icon="require('@/assets/images/icons/tasks/delete.svg')"></svg-icon>
            </button>
          </li>
        </ul>
        <div class="table-items__button">
          <base-button @click="openModal" type="outline" :title="btnTitle">
            <el-icon><plus /></el-icon>
          </base-button>
        </div>
      </div>
    </div>
    <invite-member-modal  ref="inviteMemberModal"/>
    <role-modal ref="rolePopup"/>
  </div>
</template>

<script>
import BaseSelect from "@/app/common/BaseSelect";
import BaseButton from "@/app/common/BaseButton";
import {Plus} from "@element-plus/icons-vue";
import InviteMemberModal from "@/app/projects/projectEditor/components/membersTable/components/InviteMemberPopup";
import RoleModal from "@/app/projects/projectEditor/components/membersTable/components/RolePopup";

export default {
  name: "members-table-column",
  components: {RoleModal, InviteMemberModal, BaseButton, BaseSelect, Plus},

  props: {
    columnNames: Array,
    tableData: Array,
    tableName: String,
    showMembers: {type: Boolean, default: false},
  },
  data() {
    return {
      options: [
        {value: "Owner", label: "Owner"},
        {value: "Admin", label: "Admin"},
        {value: "Moderator", label: "Moderator"},
        {value: "Developer", label: "Developer"},
        {value: "Guest", label: "Guest"},
      ],
      members: [
        {
          id: '1',
          username: "Lana",
          role: "Admin",
          avatar: ""
        },
        {
          id: '2',
          username: "Alexandra",
          role: "Developer",
          avatar: ""
        },
      ]
    }
  },
  methods: {
    updateRole(value, id) {
      console.log(value)
    },
    openModal() {
      if (this.showMembers) {
        this.$refs.inviteMemberModal.openModal()
      } else {
        this.$refs.rolePopup.openModal()
      }
    }
  },
  computed: {
    label() {
      return this.showMembers ? "Members" : "Roles"
    },
    btnTitle() {
      return this.showMembers ? "Invite member" : "Add role"
    }
  }
}
</script>


<style scoped lang="scss">
.table-items {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  &__main {
    border: 1px solid #E7E7E7;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  &__label {
    font-family: Rubik, sans-serif;
    font-size: 12px;
    color: #7B7B7B;
    margin-bottom: 4px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    background-color: #F8F8F8;
    padding: 12px 34px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;

    &--item {
      font-family: Rubik, sans-serif;
      color: #7C7B86;
      font-size: 14px;
    }
  }
  &__action {

  }
  &__button {
    padding: 20px;
  }
  &__body {
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  &__member {
    display: flex;
    align-items: center;

    &--username {
      flex: 1 1 auto;
      padding-left: 16px;
      padding-right: 10px;
      color: #212121;
      font-family: Rubik, sans-serif;
    }

    &--avatar {
      flex: 0 0 32px;

      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
  }

  &__role {
    display: flex;
    align-items: center;
    flex: 1 1 auto;

    &--name {
      flex: 1 1 auto;
      font-family: "Rubik", sans-serif;
    }

    &--edit-button {
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      path {
        fill: #212121;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    li {
      flex: 1 1 auto;
      padding: 16px 14px;
      border-bottom: 1px solid #E7E7E7;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      position: relative;
      display: flex;
      align-items: center;

      &:before {
        content: "";
        position: absolute;
        transition: all 0.3s ease 0s;
        z-index: 2;
        top: 50%;
        transform: translate(0, -50%) scale(0);
        left: -3px;
        width: 3px;
        height: calc(100% + 2px);
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background-color: #06A680;

      }

      @media (any-hover: hover) {
        &:hover {
          background-color: #FAFAFA;

          &:before {
            transform: translate(0, -50%) scale(1);
          }
        }
      }
    }
  }

  &__btn-delete {
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
.table-items {
  &__btn-delete {
    svg {
      fill: #F32B2A;
      width: 22px;
      height: 22px;
    }
  }

  &__role--edit-button {
    svg {
      width: 20px;
      height: 20px;
    }
    path {
      fill: #212121;
    }
  }

  &__member--select {
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
  }

}

</style>
