<template>
  <div class="base-tabs">
    <button
      v-for="tab in tabs"
      :key="tab"
      type="button"
      :class="['base-tabs__item', { active: currentTab === tab.name }]"
      :disabled="disabledTab(tab.name)"
      @click="$emit('change-tab', tab.name)"
    >
      {{ tab.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseTabs',
  props: {
    disabledTabs: Array,
    tabs: {
      type: Array,
      required: true,
    },
    currentTab: {
      type: String,
      required: true,
    },
  },

  methods: {
    disabledTab(tab) {
      if (this.disabledTabs) {
        return !!this.disabledTabs.find((item) => tab === item)
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.base-tabs {
  display: flex;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    height: 4px;
    width: 100%;
    border-radius: 8px;
    background-color: #EEEEEE;
  }

  &__item {
    &[disabled] {
      color: $primary-text-disabled;
    }

    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #212121;
    font-family: "Rubik", sans-serif;
    padding: 0 10px 8px 10px;
    line-height: 24px;
    min-width: 164px;
    position: relative;
    transition: 0.3s ease all;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      transition: 0.3s ease all;
      background-color: #0AB258;
      transform: scale(0);
      border-radius: 8px;
      left: 0;
      bottom: 0;
    }

    &.active {
      color: #0AB258;

      &::before {
        transform: scale(1);
      }
    }

    &:not([disabled]) {
      @media (any-hover: hover) {
        &:hover {
          color: #0AB258;
        }
      }
    }

  }
}
</style>
