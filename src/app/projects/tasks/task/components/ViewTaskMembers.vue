<template>
  <div class="view-task-members">
    <div class="view-task-members__count">{{ membersCount }}</div>
    <ul class="view-task-members__list">
      <li class="view-task-members__item" :key="member.id" v-for="member in dataMembers">
        {{ member.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "view-task-members",
  data() {
    return {
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
        }
      ]
    }
  },
  computed: {
    membersCount() {
      return this.dataMembers.length;
    }
  }
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

