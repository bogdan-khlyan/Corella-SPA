<template>
  <div class="view-task-members">
    <div class="view-task-members__count">
      {{ membersCount }}
    </div>
    <ul class="view-task-members__list">
      <li
        v-for="(member, index) in selectedMember"
        :key="index"
        class="view-task-members__item"
      >
        {{ member }}
      </li>
    </ul>
  </div>
</template>

<script>
import { tasksController } from '../../tasks.controller'

export default {
  name: 'ViewTaskMembers',
  data() {
    return {
      selectedMember: [],
    }
  },
  computed: {
    membersCount() {
      return this.selectedMember.length
    },
  },
  created() {
    this.getSelectedMembers()
  },
  methods: {
    getSelectedMembers() {
      tasksController.getSelectedMembers()
        .then((selectedMembers) => {
          this.selectedMember = selectedMembers
          console.log(this.$data)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.view-task-members {
  min-height: 56px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #FBFBFB;
  &__count {
    display: inline-flex;
    height: 40px;
    min-width: 40px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    background-color: #F4F4F4;
  }
  &__list {
    display: flex;
    flex: 1 1 auto;
    padding: 0px 0px 0px 16px;
  }
  &__item {
    font-family: "Rubik";
    &:not(:last-child) {
      padding: 0px 16px 0px 0px;
      margin: 0px 12px 0px 0px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #212121;
        transform: translate(0, -50%);
        right: 0;
      }
    }
  }
}
</style>
