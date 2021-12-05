<template>
  <div class="header-search">

    <input type="text" placeholder="search..."
           v-model="searchText"
           @input="setSearchText">

    <div>
      <img src="@/assets/images/icons/header/loupe.png">
    </div>

  </div>
</template>

<script>
import {baseHeaderState} from "@/app/common/components/baseWrapper/baseHeader/base-header.state";

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
  min-width: calc(100% - 442px);
  max-width: 701px;

  > div {
    position: absolute;
    cursor: pointer;
    top: 16px;
    left: 16px;

    > img {
      width: 24px;
      transition: all 150ms ease-in-out;
    }
  }

  input {
    width: 100%;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: #bdbcc8;
    padding-left: 46px;
    border: none;
    height: 56px;
   // background: rgba(196, 196, 196, 0.08);
    background: rgba(196, 196, 196, 0.12);
    border-radius: 4px
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
