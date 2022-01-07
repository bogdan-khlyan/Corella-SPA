<template>
  <div class="header-search">

    <div class="header-search__icon"
         :class="{'header-search__icon--active': searchText.length}">
      <svg-icon
          :icon="require('@/assets/images/icons/header/loupe.svg')"/>
    </div>

    <input v-model="searchText"
           type="text"
           placeholder="search..."
           @input="setSearchText">

  </div>
</template>

<script>
import {baseHeaderState} from "@/app/common/baseWrapper/baseHeader/base-header.state";

export default {
  name: "HeaderInput",
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    setSearchText() {
      baseHeaderState.searchValue = this.searchText
    }
  }
}
</script>

<style scoped lang="scss">
.header-search {
  position: relative;
  width: 100%;
  margin-left: 12px;
  padding-right: 16px;

  &__icon {
    position: absolute;
    cursor: pointer;
    top: 16px;
    left: 16px;
    pointer-events: none;

    > img {
      width: 24px;
      transition: all 150ms ease-in-out;
    }
  }

  input {
    width: 100%;
    height: 56px;

    padding-left: 46px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #212121;
    background: rgba(196, 196, 196, 0.12);

    border-radius: 4px;
    border: 1px solid transparent;

    transition: 200ms;

    &:hover {
      border-color: rgba(196, 196, 196, 0.3);
    }

    &:focus {
      border-color: #0AB258;
    }

  }

  input::placeholder {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: #BDBCC8;
  }
}
</style>

<style lang="scss">
.header-search__icon--active {
  path {
    fill: #0AB258;
  }
}
</style>
