<template>
  <div class="task-card">
    <preloader v-model="loading" :zoom="50">
      <div v-show="!error" @click="taskClick">
        <div v-if="issue" class="task-card__inner">
          <div class="task-card__number">
            # {{ issue.issueCode }}
          </div>
          <div class="task-card__content">
            {{ issue.title }}
          </div>
        </div>
      </div>
      <div v-show="error">Error</div>
    </preloader>
  </div>
</template>

<script>
import Preloader from '../../../../components/ui/preloader/Preloader'

export default {
  name: 'issue-card',
  components: { Preloader },
  props: {
    issueId: {
      type: String
    },
    columnId: {
      type: String
    }
  },
  data() {
    return {
      loading: true,
      error: false
    }
  },
  computed: {
    issue () {
      return this.$store.state.project.issues
          .find(item => item._id === this.issueId)
    }
    // moveLoading() {
    //   let isLoad = this.$store.state.project.loader.projectIssue
    //   return isLoad === this.projectBoard
    // }
    //
  },
  mounted() { this.init() },
  methods: {
    init: function () {
      this.loading = true
      this.$api.project.issue.getIssueById(this.$route.params.id, this.issueId)
          .then(() => this.loading = false )
          .catch(() => {
            this.error = true
            this.loading = false
          })
    },
    taskClick: function () {
      // this.$store.commit('changeStateColumnId', this.columnId)
      this.$store.commit('setCurrentIssueId', this.issue._id)
      this.$router.push({ query: { issue: this.issue.issueCode } })
    }
    // getIssues: function () {
      // this.$api.project.projectBoard.getIssues()
    // },
    // async setCurrentIssue() {
    //   await this.$api.project.projectBoard.setCurrentIssue(this.$route.params.id, this.projectBoard)
    //   await this.$router.push(`${this.$route.path}?issueId=${this.projectBoard}`).catch(() => {
    //   })
    // },
    // currentVersion(){
    //   if(this.versions.length)
    //     return this.versions.find(version => version._id === this.hotfix.versionId).version
    //   else
    //     return '0'
    // },
  }
}
</script>

<style scoped lang="scss">
.task-card {
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  min-height: 90px;

  background: #FFFFFF;
  border-radius: 16px;
  margin-bottom: 15px;
  cursor: pointer;
}

.task-card__inner {
  padding: 20px;
  //min-width: 245px;
  min-width: 12vw;
}

.task-card__number {
  padding-bottom: 10px;
  font-family: "Open Sans",sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #878787;
}

.task-card__content {
  font-family: "Open Sans",sans-serif;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  color: #1B1A18;
}
</style>

<style lang="scss">
.task-card__loading {
  border-radius: 16px;
  width: 100%;
  min-height: 100px;
  //width: 60px;
  //height: 60px;
}
</style>
