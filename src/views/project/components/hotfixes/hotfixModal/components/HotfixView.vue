<template>
  <div v-if="hotfix" class="view-issue default-modal">
    {{hotfix}}
    <div class="default-modal__title"> Task #{{ hotfix.issueCode }}</div>
    <div class="default-modal__separator"></div>
    <div class="view-issue__text-group">
      <label>Title</label>
      <div class="view-issue__text">{{ hotfix.title ? hotfix.title : 'No title' }}</div>
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
    <div class="view-issue__text-group--flex">
      <div class="view-issue__text-group">
        <label>Members</label>
        <div class="view-issue__text">No members</div>
      </div>
      <div class="view-issue__text-group">
        <label>Priority</label>
        <div class="view-issue__text">Low</div>
      </div>
    </div>
    <div class="view-issue__text-group">
      <label>Description</label>
      <div class="view-issue__text">{{ hotfix.description ? hotfix.description : 'No description' }}</div>
    </div>


<!--    <div>-->
<!--      <file :file="issue.files[0]" />-->
<!--    </div>-->

  </div>
</template>

<script>
export default {
  name: 'hotfix-view',
  components: {
  },
  props: {
    visible: {
      type: Boolean
    },
    hotfix: {
      type: Object,
      default: function () {
        return {
          __v: '',
          files: [],
          title: '',
          hotfixCode: '',
          state: ''
        }
      }
    },
    versions:{
      type: Array,
    },
  },
  data(){
    return {
      editable: false,
      loading: false,
      selectedVersion: '',
      data: {}
    }
  },
  watch:{
    hotfix(){
      this.data = {...this.hotfix}
    }
  },
  computed: {
    rout() {
      return !!this.$route.query.id;
    }
  },
  methods: {
    handleClose: function (data = null) {
      this.$store.commit('setCurrentHotfix', null)
      this.$router.push(this.$route.path).catch(() => {
      })
      this.editable=false
    },
    onDeleteHotfix() {
      this.$api.project.hotfix.deleteHotfix(this.$route.params.id, this.hotfix._id).then(res=>{
        this.handleClose()
        this.$emit('deleteHotfix')
      })
    },
    async onUpdateHotfix() {
      this.loading = true
      const data = {
        title: this.data.title,
        description: this.data.description,
        priority: this.data.priority,
        versionId: this.selectedVersion,
        state: this.data.state,
      }
      if (this.selectedVersion.length) data.versionId = this.selectedVersion
      if (this.data.branch !== '' && this.data.branch)
        data.branch = this.data.branch;
      try {
        await this.$api.project.hotfix.updateHotfix(this.$route.params.id, this.data._id, data);
        this.hotfix.title = data.title;
        this.hotfix.description = data.description;
        this.hotfix.state = data.state;
        this.hotfix.priority = data.priority;
        this.hotfix.branch = data.branch;
      } catch (error) {
        console.log(error);
      }
      this.loading = false
    }
  },
  mounted(){
    if (this.hotfix.versionId) {
      this.selectedVersion = this.versions.find(version => version._id = this.hotfix.versionId).version
    }
    this.data = this.hotfix
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
