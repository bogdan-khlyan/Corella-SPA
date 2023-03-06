<template>
  <div class="table-items">
    <span class="table-items__label">Roles</span>
    <div class="table-items__main">
      <div class="table-items__header">
        <div class="table-items__header--item">Role</div>
      </div>
      <div class="table-items__body">
        <ul class="table-items__list">
          <li
            v-for="role in roles"
            :key="role.id"
            :disabled="!isAllowEditRole(role)"
            @click="openModal(role)"
          >
            <div class="table-items__role">
              <div class="table-items__role--name">
                {{ role.name }}
              </div>
              <button class="table-items__role--edit-button">
                <svg-icon
                  :icon="require('@/assets/images/icons/tasks/edit.svg')"
                />
              </button>
            </div>
            <button type="button" class="table-items__btn-delete">
              <svg-icon
                :icon="require('@/assets/images/icons/tasks/delete.svg')"
              />
            </button>
          </li>
        </ul>
        <div class="table-items__button">
          <base-button type="outline" :title="btnTitle" @click="openModal()">
            <el-icon>
              <plus />
            </el-icon>
          </base-button>
        </div>
      </div>
    </div>
    <role-modal
      ref="rolePopup"
      @add="addRoleHandler"
      @update="updateRoleHandler"
    />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/store/modules/user'

import BaseSelect from '@/components/BaseSelect'
import BaseButton from '@/components/BaseButton'
import { Plus } from '@element-plus/icons-vue'
import InviteMemberModal from '@/views/projects/project-editor/components/members-table/components/InviteMemberPopup'
import RoleModal from '@/views/projects/project-editor/components/members-table/components/RolePopup'

export default {
  name: 'RolesTableColumn',
  components: {
    RoleModal,
    BaseButton,
    Plus,
  },

  props: {
    columnNames: Array,
    tableData: Array,
    tableName: String,
    showMembers: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options: [
        {
          value: 'Owner',
          label: 'Owner',
        },
        {
          value: 'Admin',
          label: 'Admin',
        },
        {
          value: 'Moderator',
          label: 'Moderator',
        },
        {
          value: 'Developer',
          label: 'Developer',
        },
        {
          value: 'Guest',
          label: 'Guest',
        },
      ],
      roles: [],
      members: [
        {
          id: '1',
          username: 'Lana',
          role: 'Admin',
          avatar: '',
        },
        {
          id: '2',
          username: 'Alexandra',
          role: 'Developer',
          avatar: '',
        },
      ],
    }
  },
  computed: {
    ...mapState(useUserStore, ['projectRoles']),

    userProjectRoleId() {
      return this.projectRoles.get(this.projectId).id
    },

    projectId() {
      return this.$route.params.projectId
    },
    label() {
      return this.showMembers ? 'Members' : 'Roles'
    },
    btnTitle() {
      return this.showMembers ? 'Invite member' : 'Add role'
    },
  },
  created() {
    this.getRoles()
  },
  methods: {
    isAllowEditRole(role) {
      return role.name !== 'Admin' && role.id !== this.userProjectRoleId
    },
    async getRoles() {
      this.roles = await this.$api.projects.getProjectRoles(this.projectId)
    },
    updateRole(value, id) {
      console.log(value)
    },
    openModal(role) {
      if (this.isAllowEditRole(role)) {
        this.$refs.rolePopup.openModal(role)
      }
    },
    addRoleHandler(newRole) {
      this.roles.push(newRole)
    },
    updateRoleHandler(role) {
      const foundRole = this.roles.find((roleItem) => roleItem.id === role.id)
      foundRole.name = role.name
      foundRole.rightIds = role.rightIds
    },
  },
}
</script>

<style scoped lang="scss">
.table-items {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  &__main {
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  &__label {
    font-family: Rubik, sans-serif;
    font-size: 12px;
    color: #7b7b7b;
    margin-bottom: 4px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    background-color: #f8f8f8;
    padding: 12px 34px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;

    &--item {
      font-family: Rubik, sans-serif;
      color: #7c7b86;
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
      font-family: 'Rubik', sans-serif;
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
      border-bottom: 1px solid #e7e7e7;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      position: relative;
      display: flex;
      align-items: center;

      &[disabled='true'] {
        cursor: not-allowed;
      }

      &:before {
        content: '';
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
        background-color: #06a680;
      }

      @media (any-hover: hover) {
        &:hover {
          background-color: #fafafa;

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
      fill: #f32b2a;
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
