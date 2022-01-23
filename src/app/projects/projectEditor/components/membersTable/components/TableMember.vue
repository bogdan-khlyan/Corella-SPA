<template>
  <div class="table-member">
    <div class="table-member__avatar">
      <img src="" alt="">
    </div>
    <div class="table-member__username">{{ username }}</div>
    <div class="table-member__select">{{ role }}</div>
    <div class="table-member__select__remove"></div>
  </div>
</template>

<script>
export default {
  name: "table-member",
  props: {
    username: {type: String, required: true},
    role: {type: String, required: true}
  }
}
</script>


<style scoped lang="scss">

</style>
