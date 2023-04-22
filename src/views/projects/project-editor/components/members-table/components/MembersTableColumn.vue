<template>
  <div class="table-items">
    <span class="table-items__label">Members</span>
    <div class="table-items__main">
      <div class="table-items__header">
        <div class="table-items__header--item">Member</div>
      </div>
      <div class="table-items__body">
        <ul class="table-items__list">
          <li v-for="member in members" :key="member.id">
            <div class="table-items__member">
              <div class="table-items__member--avatar">
                <el-tooltip
                  :disabled="windowWidth > 600"
                  :content="member.login"
                >
                  <base-user-avatar :avatar="member.login" :size="40" />
                </el-tooltip>
              </div>
              <div class="table-items__member--username">
                {{ member.login }}
              </div>
              <div class="table-items__member--select">
                <base-select
                  v-if="isAllowManageProjectRoles"
                  :id="member.id"
                  v-model="member.role.id"
                  :options="projectRolesOptions"
                  :disabled="!isAllowUpdateMemberRole(member)"
                  @change="updateMemberRole(member, $event)"
                />
              </div>
            </div>
            <base-popconfirm
              reference-class="table-items__btn-delete"
              title="Are you sure you want to delete the member?"
              confirm-button-text="Delete"
              cancel-button-text="Cancel"
              :disabled="!isAllowDeleteMember(member)"
              @confirm="deleteMember(member)"
            >
              <svg-icon
                width="24px"
                :icon="require('@/assets/images/icons/tasks/delete.svg')"
              />
            </base-popconfirm>
          </li>
        </ul>
        <div class="table-items__button">
          <base-button type="outline" :title="btnTitle" @click="openModal">
            <el-icon>
              <plus />
            </el-icon>
          </base-button>
        </div>
      </div>
    </div>
    <invite-member-modal ref="inviteMemberModal" @add="addMemberHandler" />
  </div>
</template>

<script>
import windowWidthMixin from '@/mixins/window-width-mixin'

import rightsList from '@/utils/rightsList'

import { useUserStore } from '@/store/modules/user'
import { mapState } from 'pinia'

import { toast } from 'vue3-toastify'

import BaseSelect from '@/components/BaseSelect'
import BaseButton from '@/components/BaseButton'
import { Plus } from '@element-plus/icons-vue'
import InviteMemberModal from '@/views/projects/project-editor/components/members-table/components/InviteMemberPopup'
import BaseUserAvatar from '@/components/BaseUserAvatar'
import BasePopconfirm from '@/components/BasePopconfirm'

export default {
  name: 'MembersTableColumn',
  components: {
    InviteMemberModal,
    BaseButton,
    BaseSelect,
    Plus,
    BaseUserAvatar,
    BasePopconfirm,
  },
  mixins: [windowWidthMixin],
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
      roles: [],
      members: [],
    }
  },
  computed: {
    ...mapState(useUserStore, ['user', 'projectRoles']),

    projectRolesOptions() {
      return this.roles.map((role) => ({
        label: role.name,
        value: role.id,
      }))
    },
    isAllowManageProjectRoles() {
      return this.projectRoles
        .get(this.projectId)
        .rightIds.includes(rightsList.manageProjectRoles.id)
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
    this.getProjectMembersAndRoles()
  },
  methods: {
    getProjectMembersAndRoles() {
      this.getProjectMembers()
      if (this.isAllowManageProjectRoles) {
        this.getProjectRoles()
      }
    },

    isAllowUpdateMemberRole(member) {
      if (!this.isAllowManageProjectRoles) {
        return false
      }

      const currentRole = this.projectRoles.get(this.projectId)
      if (member.role.name === 'Admin') {
        return this.user.role.name === 'ADMIN' && member.id !== this.user.id
      }

      return currentRole.id !== member.role.id
    },

    isAllowDeleteMember(member) {
      const currentRole = this.projectRoles.get(this.projectId)
      if (member.role.name === 'Admin') {
        return this.user.role.name === 'ADMIN' && member.id !== this.user.id
      }

      return currentRole.id !== member.role.id
    },

    async updateMemberRole(member, roleId) {
      try {
        await this.$api.projects.updateProjectMemberRole(
          this.projectId,
          roleId,
          {
            userId: member.id,
          }
        )

        member.role.name = this.roles.find((role) => role.id === roleId).name

        toast.success('The role of the member has been successfully changed')
      } catch (e) {
        console.log(e)
      }
    },
    openModal() {
      if (this.showMembers) {
        this.$refs.inviteMemberModal.openModal()
      } else {
        this.$refs.rolePopup.openModal()
      }
    },
    async getProjectRoles() {
      try {
        this.roles = await this.$api.projects.getProjectRoles(this.projectId)
      } catch (e) {
        console.log(e)
      }
    },
    async getProjectMembers() {
      try {
        this.members = await this.$api.projects.getProjectMembers(
          this.projectId
        )
      } catch (e) {
        console.log(e)
      }
    },
    async deleteMember(member) {
      try {
        await this.$api.projects.deleteProjectMember(this.projectId, member.id)
        this.members = this.members.filter(
          (memberItem) => memberItem.id !== member.id
        )

        toast.success('This member has been successfully deleted')
      } catch (e) {
        console.log(e)
      }
    },
    addMemberHandler() {
      this.getProjectMembers()
    },
  },
}
</script>

<style lang="scss">
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
    flex: 1;
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

  @media (max-width: 600px) {
    &__member {
      &--username {
        display: none;
      }

      &--select {
        margin-left: auto;
      }
    }
  }
}
</style>

<style lang="scss">
.table-items {
  &__btn-delete {
    width: 24px;

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
