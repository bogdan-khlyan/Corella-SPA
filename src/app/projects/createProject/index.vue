<template>
  <div class="create-project">
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

      </div>
    </div>
    <columns-input/>
  </div>
</template>

<script>
import BaseInput from "@/app/common/components/BaseInput";
import BaseTextarea from "@/app/common/components/BaseTextarea";
import ColumnsInput from "@/app/projects/createProject/components/columnsInput/ColumnsInput";

export default {
  name: 'create-project',
  components: { BaseInput, BaseTextarea, ColumnsInput }
}
</script>

<style scoped lang="scss">
.create-project {

  &__columns {
    display: flex;
  }

  &__column {
    width: 50%;
  }

}
</style>
