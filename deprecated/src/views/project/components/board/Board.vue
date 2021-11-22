<template>
  <preloader v-model="loading" style="width: 100%;height: calc(100vh - 100px)">
    <div class="board">
      <div class="project-board" v-if="project">
        <column
            v-for="column in project.columns"
            :column="column"
            :allColumns="project" />
      </div>
      <issue-modal/>
    </div>
  </preloader>
</template>

<script>
import Column from './Column'
import IssueModal from './issueModal/IssueModal'
import Preloader from '../../../../components/ui/preloader/Preloader'

export default {
  name: 'Index',
  components: { Column, IssueModal, Preloader },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    project () {
      return this.$store.state.project.currentProject
    }
  },
  mounted() { this.init() },
  methods: {
    init: function () {
      this.loading = true
      this.$api.project.getProjectColumns(this.$route.params.id)
          .finally(() => this.loading = false )
    }
  }
}
</script>

<style scoped lang="scss">
.board {
  //min-height: 90vh;
  height: calc(100vh - 100px);
}

.project-board {
  display: flex;
  justify-content: flex-start;
}
</style>
