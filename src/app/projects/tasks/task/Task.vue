<template>
  <task-page-wrapper
      title="Task #242"
      :show-edit-button="true"
      :show-delete-button="true"
      @edit="$router.push('/project/1/create-task')"
      @delete="$router.push('/project/1/board')">
    <div>
      asfsaf
    </div>
  </task-page-wrapper>
</template>

<script>
import TaskPageWrapper from "@/app/common/BasePageWrapper";

export default {
  name: 'task',
  components: { TaskPageWrapper }
}
</script>

<style scoped lang="scss">

</style>
