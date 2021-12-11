<template>
  <div class="column-card">
    <div class="column-card__header">
      <div v-if="disabled">{{ column.name }}</div>
      <input
          v-else
          :value="column.name"
          type="text">
      <hr>
    </div>
    <div class="column-card__content">
      <div class="column-card__task"></div>
      <div class="column-card__task"></div>
      <div class="column-card__task"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'column-input',
  model: { prop: 'column', event: 'input' },
  props: {
    column: { type: Object },
    disabled: { type: Boolean, default: false }
  },
  mounted() {
    console.log(this.column)
  }
}
</script>

<style scoped lang="scss">
.column-card {
  margin: 12px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;

  width: 175px;
  height: 242px;

  background: #EFF3EF;
  border-radius: 4px;

  cursor: pointer;

  &__header {

    input, div {
      padding-top: 12px;
      padding-bottom: 12px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      text-align: center;

      color: #212121;

      width: 100%;
      background-color: transparent;
      border: none;
    }

    hr {
      padding: 0;
      margin: 0;

      height: 2px;

      border-radius: 2px;
      border: none;

      background: linear-gradient(180deg, #20C560 0%, #04A481 100%);
    }

  }

  &__task {
    margin-top: 8px;
    margin-bottom: 8px;

    width: 100%;
    height: 40px;

    background-color: #FFFFFF;
    border-radius: 6px;
  }

}
</style>
