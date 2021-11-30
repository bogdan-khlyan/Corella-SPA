<template>
  <div class="project-wrapper">
    <router-view/>
<!--    <div class="project-project-board" v-if="route === 'project-by-id'">-->
<!--      <column-->
<!--          v-for="column in columns.columns"-->
<!--          :column="column"-->
<!--          v-loading="!columnsReady"-->
<!--          :allColumns="columns"-->
<!--          :versions="versions" />-->
<!--      <task-modal-->
<!--          :project-board="project-board"-->
<!--          :visible="visible.issueModal"-->
<!--          :versions="versions"-->
<!--          @close="onClose"-->
<!--          @deleteIssue="onDeleteIssue"-->
<!--          @updateIssues="updateIssues"-->
<!--      />-->
<!--    </div>-->
<!--    <div class="project-hotfixes" v-else-if="route === 'hotfixes'">-->
<!--      <div class="project-hotfixes__inner">-->
<!--        <hotfix-card-->
<!--            v-for="(hotfix,index) of hotfixes"-->
<!--            :key="hotfix._id"-->
<!--            :loading="!hotfixReady"-->
<!--            :hotfix="hotfix"-->
<!--            :index="index"-->
<!--            :versions="versions" />-->
<!--      </div>-->
<!--      <hotfix-modal-->
<!--          :hotfix="hotfix"-->
<!--          :visible="visible.hotfixModal"-->
<!--          :versions="versions"-->
<!--          @close="onClose"-->
<!--          @deleteHotfix="onDeleteHotfix" />-->
<!--    </div>-->
  </div>
</template>

<script>
// import Column from '@/views/project/components/project-board/Column'
// import TaskModal from '@/views/project/components/project-board/IssueModal'
// import HotfixCard from '@/views/project/components/hotfixes/HotfixCard'
// import HotfixModal from '@/views/project/components/Modals/HotfixModal'

export default {
  name: 'Index',
  components: {
    // HotfixModal, HotfixCard, TaskModal, Column
  },
  data() {
    return {
      // columnsReady: false,
      // hotfixReady: false,
      // showModal: false,
      // columns: [],
      // hotfixes: [],
      // visible: {
      //   issueModal: false,
      //   hotfixModal: false
      // },
      // hotfixModalVisible: false,
      // versions: [],
      // pageCountHotfixes: 0,
      // total: 0,
    }
  },
  // computed: {
  //   project-board() {
  //     let project-board = this.$store.state.project.currentIssue
  //     if (project-board) {
  //       project-board.files = project-board.files.slice(0, 6)
  //       return project-board
  //     }
  //   },
  //   hotfix() {
  //     let hotfix = this.$store.state.project.currentHotfix
  //     if (hotfix)
  //       return hotfix
  //   },
  //   route() {
  //     return this.$route.name
  //   }
  // },
  // watch: {
  //   project-board(e) {
  //     if (e)
  //       this.visible.issueModal = true
  //   },
  //   hotfix(e) {
  //     if (e)
  //       this.visible.hotfixModal = true
  //   }
  // },
  methods: {
    // async updateIssues(requestData) {
    //   let projectId = this.$route.params.id
    //   let issueId = this.$route.query.issueId
    //   await this.$http.patch(`/projects/${projectId}/project-board/${issueId}`, requestData)
    //   this.getIssues()
      // this.onClose()
    // },
    // getProject: function () {
    //
    // },
    // getIssues() {
      // this.$api.project.getProject(this.$route.params.id)
      //     .then(res => {
      //       this.columnsReady = true
      //       this.columns = res.data
      //     })
      //     .catch(e => console.log(e, 'currentProjectColumns error'))
    // },
    // getVersions() {
    //   this.$api.project.currentProjectVersions(this.$route.params.id)
    //       .then(res => {
    //         this.versions = res.data
    //       })
    //       .catch(e=>console.log(e))
    // },
    // getHotfixes() {
    //   this.$api.project.hotfix.getHotfixes(this.$route.params.id)
    //       .then(res => {
    //         this.hotfixReady = true
    //         this.hotfixes = res.data.data
    //         this.pageCountHotfixes = res.data.pageCount
    //         this.total = res.data.total
    //       })
    //       .catch(e => console.log(e, 'getHotfixes error'))
    // },
    // onClose() {
    //   this.visible.issueModal = false
    //   this.visible.hotfixModal = false
    // },
    // onDeleteIssue() {
    //   this.getIssues()
    // },
    // onDeleteHotfix() {
    //   this.hotfixReady = true
    //   this.getHotfixes()
    //   this.hotfixReady = false
    // }
  },
  mounted() {
    // this.getIssues()
    // this.$api.project.currentProjectRoles(this.$route.params.id)
    // this.getHotfixes()
    // this.getVersions()
  }
}
</script>

<style scoped lang="scss">

.project-hotfixes__inner {
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
