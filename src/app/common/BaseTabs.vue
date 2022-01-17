<template>
  <div class="base-tabs">
    <button
      v-for="tab in tabs"
      :key="tab"
      type="button"
      :class="['base-tabs__item', { active: currentTab === tab.name }]"
      @click="$emit('change-tab', tab)"
    >
      {{ tab.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "base-tabs",
  props: {
    tabs: {
      type: Array,
      required: true
    },
    currentTab: {
      type: String,
      required: true
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

.base-tabs {
  display: flex;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    border-radius: 8px;
    background-color: #EEEEEE;
  }

  &__item {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #212121;
    font-family: "Rubik", sans-serif;
    padding: 0 10px 8px 10px;
    line-height: 24px;
    min-width: 164px;
    position: relative;
    &.active {
      color: #0AB258;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #0AB258;
        border-radius: 8px;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
      }
    }
  }
}
</style>
