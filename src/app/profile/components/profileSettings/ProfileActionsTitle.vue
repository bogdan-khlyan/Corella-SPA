<template>
  <div class="profile-actions-title">
    <h3 class="profile-actions-title__item">{{ title }}</h3>
    <button
        @click="$emit('toggle-edit-mode', settingsName)"
        type="button"
        :class="['profile-actions-title__btn', { 'profile-actions-title__btn--edit': isEditingMode }]">
    </button>
  </div>
</template>

<script>
export default {
  name: "profile-actions-title",
  emits: ['toggle-edit-mode'],
  props: {
    title: {type: String},
    isEditingMode: {type: Boolean},
    settingsName: {type: String}
  },

}
</script>

<style lang="scss">
.profile-actions-title {
  display: flex;
  align-items: center;
  &__item {
    font-family: "Rubik";
    font-size: 18px;
    font-weight: 500;
    color: #212121;
  }
  &__btn {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0px 0px 0px 16px;
    outline: none;
    svg {
      fill: #333;
    }
    &--edit {
      svg {
        fill: #20C561
      }
    }
  }
}
</style>