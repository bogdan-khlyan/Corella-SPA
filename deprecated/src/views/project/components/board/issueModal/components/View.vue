<template>
  <div v-if="issue" class="view-issue default-modal">
    <div class="default-modal__title"> Task #{{ issue.issueCode }}</div>
    <div class="default-modal__separator"></div>
    <div class="view-issue__text-group">
      <label>Title</label>
      <div class="view-issue__text">{{issue.title}}</div>
    </div>
    <div class="view-issue__text-group--flex">
      <div class="view-issue__text-group">
        <label>Version</label>
        <div class="view-issue__text">2.1.1</div>
      </div>
      <div class="view-issue__text-group">
        <label>Branch</label>
        <div class="view-issue__text">Lorem ipsum</div>
      </div>
    </div>
    <div class="view-issue__text-group">
      <label>Members</label>
      <div class="view-issue__text">None</div>
    </div>
    <div class="view-issue__text-group">
      <label>Description</label>
      <div class="view-issue__text">{{issue.description}}</div>
    </div>


    <div>
      <file :file="issue.files[0]" />
    </div>

  </div>
</template>

<script>
import File from '../../../../../../components/ui/File'

export default {
  name: 'view-issue',
  components: { File },
  props: {
    issue: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  mounted() { },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.view-issue {

  .view-issue__text-group {
    margin-top: 10px;
    margin-bottom: 10px;

    &--flex {
      display: flex;

      > .view-issue__text-group {
        width: 100%;

        text-align: left;

        margin-left: 10px;
        margin-right: 10px;
        &:last-child { margin-right: 0 }
        &:first-child { margin-left: 0 }
      }

    }

  }

  .view-issue__text {
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    text-transform: capitalize;

    color: #4E4E4E;
  }

  label {
    display: block;

    margin-top: 6px;

    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    text-transform: capitalize;

    color: #3E3E3E;
  }

}
</style>
