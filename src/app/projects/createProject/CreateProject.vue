<template>
  <form class="create-project">
    <div class="create-project__columns">
      <div class="create-project__column">
        <base-input
            label="Title"
            placeholder="Enter project name"/>
        <base-textarea
            label="Description"
            placeholder="Enter project description"/>
      </div>
      <div class="create-project__column">
        <members/>
      </div>
    </div>
    <columns-input/>
    <div class="create-project__submit">
      <button>Create project</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/app/common/components/BaseInput";
import BaseTextarea from "@/app/common/components/BaseTextarea";
import ColumnsInput from "@/app/projects/createProject/components/columnsInput/ColumnsInput";
import Members from "@/app/projects/createProject/components/members/Members";

export default {
  name: 'create-project',
  components: { BaseInput, BaseTextarea, ColumnsInput, Members }
}
</script>

<style scoped lang="scss">
.create-project {

  &__columns {
    display: flex;
    max-width: 1400px;

    @media screen and (max-width: 980px) {
      flex-wrap: wrap;
    }
  }

  &__column {
    width: 50%;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    @media screen and (max-width: 980px) {
      width: 100%;
    }
  }

  &__submit {
    margin-top: 20px;

    > button {
      width: 222px;
      height: 56px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      color: #FFFFFF;
      border: none;

      background: #0AB258;
      border-radius: 4px;

      cursor: pointer;
    }
  }

}
</style>
