<template>
  <form class="create-project">
    <board-editor />
  </form>
</template>

<script>
import BoardEditor from '@/views/projects/project-editor/components/board-editor/BoardEditor'

export default {
  name: 'BoardSettings',
  components: { BoardEditor },
}
</script>

<style lang="scss" scoped>
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
    padding-left: 10px;

    > button {
      width: 222px;
      height: 56px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      color: #ffffff;
      border: none;

      background: #0ab258;
      border-radius: 4px;

      cursor: pointer;
    }
  }
}
</style>
