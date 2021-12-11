<template>
  <label class="base-input">
    <span v-if="label">{{ label }}</span>
    <textarea
        cols="30"
        rows="10"
        :placeholder="placeholder"/>
  </label>
</template>

<script>
export default {
  name: 'base-textarea',
  props: {
    label: { type: String },
    placeholder: { type: String, default: 'Please input' }
  }
}
</script>

<style scoped lang="scss">
.base-input {
  display: block;
  margin-top: 12px;
  margin-bottom: 12px;

  > span {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7B7B7B;
  }

  textarea {
    padding: 16px 20px;

    width: 100%;
    height: 120px;

    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #BDBCC8;
    resize: vertical;

    &::placeholder {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #BDBCC8;
    }


  }

}
</style>
