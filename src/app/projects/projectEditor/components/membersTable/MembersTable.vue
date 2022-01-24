<template>
  <div class="members">
    <div class="members__column">
      <span class="members__label">Roles</span>
      <div class="members__action">
        <div class="members__button">
          <base-button type="outline" text="Add role">
            <template #icon>
              <el-icon><plus /></el-icon>
            </template>
          </base-button>
        </div>

      </div>
    </div>
    <div class="members__column">
      <span class="members__label">Members</span>
      <div class="members__action">
        <table-items :column-names="['Members', 'Role']" :table-data="members"/>
        <div class="members__button">
          <base-button @click="$refs.inviteMemberModal.openModal()" type="outline" text="Invite member">
            <template #icon>
              <el-icon><plus /></el-icon>
            </template>
          </base-button>
        </div>
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
    border: 1px solid #E7E7E7;
    border-radius: 4px;
  }
  &__button {
    padding: 20px;
  }
}
</style>
