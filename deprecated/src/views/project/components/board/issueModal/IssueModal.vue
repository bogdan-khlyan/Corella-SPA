<template>
  <div class="default__modal issue-modal">
    <el-dialog
        v-if="rout"
        :visible="true"
        width="790px"
        :show-close="true"
        :before-close="handleClose"
        :close-on-click-modal="true">

      <button class="issue-modal--btn-edit"
              v-if="state === 'VIEW'"
              @click="state = 'EDIT'"><i class="el-icon-edit-outline"></i></button>

      <div v-if="!issue"
           v-loading="true"
           style="min-height: 500px"></div>
      <edit v-else-if="state === 'EDIT' || state === 'CREATE'"
            v-model="issue"
            :state="state"
            @cancel="state = 'VIEW'" />
      <issue-view v-else :issue="issue" />

    </el-dialog>
  </div>
</template>

<script>
import FileUpload from '../../hotfixes/FileUpload'
import { copyDeep } from '../../../../../utils/default'
import IssueView from './components/View'
import Edit from './components/Edit'

export default {
  name: 'issue-modal',
  components: { FileUpload, IssueView, Edit },
  props: {
    visible: {
      type: Boolean
    }
  },
  data() {
    return {
      loading: false,
      issue: null,
      state: 'VIEW'
    }
  },
  computed: {
    issues () {
      return this.$store.state.project.issues
    },
    rout() {
      return !!this.$route.query.issue
    }
  },
  watch: {
    issues () {
      let temp = this.$store.state.project.issues
          .find(item => item.issueCode === Number.parseInt(this.$route.query.issue))
      if (temp) {
        this.issue = copyDeep(temp)
        this.loading = false
      }
    },
    rout () { this.clean() }
  },
  mounted() { this.init() },
  methods: {
    init: function () {
      if (this.$route.query.issue === '0') {
        this.state = 'CREATE'
        this.loading = false
        this.issue = {
          _id: '0',
          issueCode: 0,
          title: '',
          description: '',
          versionId: null,
          author: null,
          comments: [],
          files: []
        }
      } else {
        let temp = this.$store.state.project.issues
            .find(item => item.issueCode === Number.parseInt(this.$route.query.issue))
        if (temp) {
          this.issue = copyDeep(temp)
          this.loading = false
        }
      }
    },
    clean: function () {
      this.state = 'VIEW'
      this.issue = null
      this.init()
    },
    handleClose: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.issue-modal {
  position: relative;

  .issue-modal--btn-edit {
    position: absolute;
    top: 100px;
    right: 40px;

    padding: 5px;
    border: none;
    border-radius: 4px;
    background-color: #FFB84B;

    cursor: pointer;

    transition: 0.3s;

    > i {
      font-size: 18px;
      color: #FFFFFF;
    }

    &:hover { opacity: 0.8 }

  }

}
</style>
