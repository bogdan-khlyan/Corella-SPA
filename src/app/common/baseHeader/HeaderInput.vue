<template>
  <div class="header-search">

    <input type="text" placeholder="search..."
           v-model="searchText"
           @input="setSearchText">

    <div>
      <img src="@/assets/images/icons/header/loupe.svg">
    </div>

  </div>
</template>

<script>
import {baseHeaderState} from "@/app/common/baseHeader/base-header.state";

export default {
  name: "HeaderInput",
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    setSearchText() {
      if (this.searchText.trim() !== '') {
        baseHeaderState.searchValue = this.searchText
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-search {
  position: relative;
  margin-top: 10px;
  min-width: calc(100% - 442px);

  > div {
    position: absolute;
    cursor: pointer;
    top: 1px;
    left: 0;

    > img {
      width: 32px;
      transition: all 150ms ease-in-out;
    }
  }

  > div > img:hover {
    width: 35px;
  }

  input {
    width: 98%;
    height: 40px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: #706f7c;
    padding-left: 38px;
    border: none;
  }

  input::placeholder {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: #BDBCC8;
  }
}
</style>