<template>
  <div class="column">
    <div class="column__name">{{ column.name }}</div>
    <div class="column__separator" style="margin-bottom: 0"></div>
    <perfect-scrollbar class="column__content" scrollBarOptions>
      <draggable
          :class="column.id"
          group="people"
          style="height: calc(100vh - 212px); width: 100%;"
          @add="moveIssue"
          @update="moveIssue"
          @choose="choose"
          @unchoose="unchoose">
        <issue-card
            v-for="(issue, index) in column.issues"
            :issueId="issue"
            :columnId="column.id"
            :key="index" />
      </draggable>
    </perfect-scrollbar>
  </div>
</template>

<script>
import IssueCard from './IssueCard'
import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
import draggable from 'vuedraggable'

export default {
  name: 'column',
  components: {IssueCard, PerfectScrollbar, draggable},
  props: {
    column: {
      type: Object,
      required: true
    },
    allColumns: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      currentColumn: null,
    }
  },
  methods: {
    async moveIssue(params) {
      let fromId = params.from.className
      let toId = params.to.className
      if(fromId !== toId){
        this.allColumns.columns.forEach(column => {
          //console.log(column.limit+'|'+column.projectBoard.length)
          if(column._id === toId){
            if(column.limit === column.issues.length){
              // console.log("okey")
            }
          }
        })
      }
      if(!this.$store.state.user.isAdmin){
        let allowedCols = this.$store.state.project.currentProjectRoles.roles//[fromId]
        let err = true
        allowedCols.forEach( role => {
          role.issueTransitionMatrix[fromId].forEach(item => {
            if(item === toId) {
              // console.log(item)
              err = false
            }
          })
        })
        if(err) {
          console.log(err, 'error')
          return
        }
      }
      let issueId = params.item.id
      let payload = {
        issueId: issueId,
        targetColumn: toId,
        targetPosition: params.newIndex,
        originalColumn: fromId
      }
      try {
        // this.loading = true
        // await this.$http.post(`/projects/${this.$route.params.id}/projectBoard/move`, payload)
        // this.loading = false
        this.$store.commit('setLoaderIssue',issueId)
        await this.$http.post(`/projects/${this.$route.params.id}/issues/move`, payload)
        this.$store.commit('setLoaderIssue', '')
      } catch (e) {
        this.$store.commit('setLoaderIssue',issueId)
        await this.$api.project.syncCurrentProjectBoard(this.$route.params.id)
        this.$store.commit('setLoaderIssue','')
      }
    },
    choose() {
      this.currentColumn = JSON.stringify(this.column)
    },
    unchoose(q) {
      // console.log(q, 'unchoose')
    }
  }

}
</script>

<style scoped lang="scss">
.column {
  margin-left: 5px;
  margin-right: 5px;
  width: calc(18vw - 10px);
  box-sizing: border-box;

  //background-color: #EFF3EF;
  background-color: #F1F3EC;
  border-radius: 16px;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.column__content {
  width: 100%;
  box-sizing: border-box;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.column__name {
  font-family: Rubik,sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: #000000;
  padding-top: 24px;
  padding-bottom: 30px;

}

.column__separator {
  width: calc(13vw + 30px);
  margin: 0;
  //margin: 0 30px 30px 30px;
  height: 2px;
  background: linear-gradient(180deg, #06A680 0%, #20C561 100%);
  border-radius: 2px;
}
</style>
