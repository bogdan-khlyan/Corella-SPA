<template>
  <form
    v-loading="loading"
    class="create-project"
  >
    <board-editor />
  </form>
</template>

<script>
import BoardEditor from '@/app/projects/projectEditor/components/boardEditor/BoardEditor'

export default {
  name: 'BoardSettings',
  components: { BoardEditor },

  methods: {

    validate() {
      let error = false

      if (!this.validateName()) {
        error = true
      }
      if (!this.validateDescription()) {
        error = true
      }

      return !error
    },
    validateName() {
      if (this.newProject.name.length > 4) {
        this.errors.name = false
        return true
      } 
      this.errors.name = true
      return false
    },
    validateDescription() {
      if (this.newProject.description.length > 4) {
        this.errors.description = false
        return true
      } 
      this.errors.description = true
      return false
    },
    inputName() {
      if (this.errors.name) {
        this.validateName()
      }
    },
    inputDescription() {
      if (this.errors.description) {
        this.validateDescription()
      }
    },
  },
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

      color: #FFFFFF;
      border: none;

      background: #0AB258;
      border-radius: 4px;

      cursor: pointer;
    }
  }

}
</style>
