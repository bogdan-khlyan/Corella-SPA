<template>
  <div class="issue-edit default-modal">

    <div class="default-modal__title"> Task #{{ issue.issueCode }}</div>
    <div class="default-modal__separator"></div>

    <form class="edit-issue__form">
      <div class="default-modal__form-group">
        <label>Title</label>
        <el-input class="input" placeholder="Please input" v-model="issue.title">{{ issue.title }}</el-input>
      </div>

      <div class="default-modal__form-group--flex">
        <div class="default-modal__form-group">
          <label>Version</label>
          <el-select v-model="deb" placeholder="Select">
            <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="default-modal__form-group">
          <label>Branch</label>
          <el-input
              class="input"
              v-model="issue.branch"
              :placeholder="issue.branch" />
        </div>
      </div>
      <div class="default-modal__form-group">
        <label>Members</label>
        <el-select v-model="issue.members" disabled style="width: 100%">
          <el-option
              v-for="member in issue.members"
              :key="member.name"
              :label="member.name"
              :value="member.name"/>
        </el-select>
      </div>

      <div class="default-modal__form-group">
        <label>Description</label>
        <el-input
            type="textarea"
            :rows="8"
            placeholder="Please input"
            v-model="issue.description">
          {{ issue.description }}
        </el-input>
      </div>
      <div>
        <file-upload :files="issue.files" />
      </div>
      <div class="issue-edit__footer">
        <div>
          <el-button @click="save" type="submit" class="issue-edit__btn issue-edit__btn--save">Save</el-button>
          <el-button v-if="state === 'EDIT'" @click="cancel" type="submit" class="issue-edit__btn issue-edit__btn--cancel">Cancel</el-button>
        </div>
        <div class="delete-task">
          <el-button type="submit" class="issue-edit__btn issue-edit__btn--cancel">Delete</el-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FileUpload from '@/views/project/components/hotfixes/FileUpload'

export default {
  name: 'edit-issue',
  components: { FileUpload },
  model: {
    prop: 'issue',
    event: 'input'
  },
  props: {
    issue: {
      type: Object
    },
    state: {
      type: String
    }
  },
  data() {
    return {
      deb: ''
    }
  },
  computed: {
  },
  mounted() {  },
  methods: {
    save: function () {
      if (this.state === 'CREATE') this.create()
      else this.update()
    },
    create: function () {
      this.$api.project.issue
          .create(this.$route.params.id, this.issue)
    },
    update: function () {
      this.$api.project.issue
          .update(this.$route.params.id, this.issue)
          .then(() => this.cancel())
    },
    cancel: function () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped lang="scss">
.issue-edit {

  .issue-edit__footer {
    display: flex;
    justify-content: space-between;
  }

  .issue-edit__btn {

    &--save {

    }

    &--cancel {

    }

    &--delete {

    }

  }

}
</style>
