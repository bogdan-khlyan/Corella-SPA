<template>
  <div class="profile-tabs">
    <ul class="profile-tabs__list">
      <li
          :key="index"
          class="profile-tabs__item"
          v-for="(tab, index) in tabs"
      >
        <a href="" @click.prevent="$emit('set-current-tab', tab)" class="profile-tabs__link">{{ tab }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'profile-tabs',
  emits: ['set-current-tab'],
  props: {
    tabs: {
      type: Array
    }
  }
}
</script>

<style lang="scss">

.profile-tabs {


  &__list {
    min-height: 52px;
    display: flex;
    background-color: rgba(10, 178, 88, 0.08);
    border-radius: 4px;
  }

  &__item {
    margin: 0px 80px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;

    &:last-child {
      margin: 0;
    }

  }

  &__link {
    font-family: "Rubik";
    color: #212121;
    font-size: 18px;
    text-decoration: none;
    display: block;
    padding: 0px 16px;
    font-weight: 400;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
    }

    span {

    }
  }
}

</style>