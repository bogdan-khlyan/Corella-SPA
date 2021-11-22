<template>
  <div class="default__modal hotfix-modal">
    <el-dialog
        v-if="rout"
        :visible="true"
        width="790px"
        :show-close="true"
        :before-close="handleClose"
        :close-on-click-modal="true">
      <div>
        <hotfix-view :hotfix="hotfix" />
      </div>
<!--      <div class="dialog__inner" v-loading="loading">-->
<!--        <div class="default__modal-title"> Hotfix #{{ data.hotfixCode }}</div>-->
<!--        <div class="default__modal-separator"></div>-->
<!--        <div class="default__modal-content" v-if="editable">-->
<!--          <div class="default__form-group">-->
<!--            <label>Title</label>-->
<!--            <el-input class="input" placeholder="Please input" v-model="data.title">{{ data.title }}</el-input>-->
<!--          </div>-->
<!--          <div class="default__form-group&#45;&#45;flex">-->
<!--            <div class="default__form-group">-->
<!--              <label>Version</label>-->
<!--              <el-select class="select" v-model="selectedVersion" :placeholder="selectedVersion">-->
<!--                &lt;!&ndash;              <el-option v-for="item in board.__v"&ndash;&gt;-->
<!--                <el-option-->
<!--                    v-for="version in versions"-->
<!--                    :label="version.version"-->
<!--                    :value="version._id"/>-->
<!--              </el-select>-->
<!--            </div>-->
<!--            <div class="default__form-group">-->
<!--              <label>Branch</label>-->
<!--              <el-input class="input" v-model="data.branch" :placeholder="data.branch"-->
<!--                        style="width: 415px;"></el-input>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="default__form-group">-->
<!--            <div class="default__form-group&#45;&#45;flex flex-column">-->
<!--              <label>Members</label>-->
<!--              <el-tag-->
<!--                  v-for="tag of data.members"-->
<!--                  :key="tag.name"-->
<!--                  closable-->
<!--                  :type="tag.type">-->
<!--                {{ tag.name }}-->
<!--              </el-tag>-->
<!--              <el-select v-model="data.members">-->
<!--                <el-option-->
<!--                    v-for="item of data.members"-->
<!--                    :key="item.name"-->
<!--                    :label="item.name"-->
<!--                    :value="item.name"-->
<!--                />-->
<!--              </el-select>-->
<!--            </div>-->
<!--            <div class="default__form-group">-->
<!--              <label>Description</label>-->
<!--              <el-input-->
<!--                  type="textarea"-->
<!--                  :rows="8"-->
<!--                  placeholder="Please input"-->
<!--                  v-model="data.description"-->
<!--              >-->
<!--                {{ data.description }}-->
<!--              </el-input>-->
<!--            </div>-->
<!--          </div>-->
<!--          <FileUpload :files="data.files"/>-->
<!--          <div class="default__modal-footer">-->
<!--            <div>-->
<!--              <el-button v-if="true" type="submit" class="save-btn modal-btn" @click="onUpdateHotfix">Save</el-button>-->
<!--              <el-button v-if="true" type="submit" class="cancel-btn modal-btn" @click="handleClose">Cancel</el-button>-->
<!--            </div>-->
<!--            <div class="delete-task" @click="onDeleteHotfix">-->
<!--              Delete-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="default__modal-content" v-else>-->
<!--            <div class="default__form-group" style="position:relative;">-->
<!--              <div class="default__form-group-title">-->
<!--                Title-->
<!--              </div>-->
<!--              <div class="default__form-group-content">-->
<!--              {{data.title}}-->
<!--              </div>-->
<!--              <div class="switch-edit"-->
<!--                   @click="editable=true">-->
<!--                <el-image-->
<!--                  src="/img/edit.svg"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="hotfix-meta">-->
<!--              <div class="default__form-group">-->
<!--                <div class="default__form-group-title">-->
<!--                  Version-->
<!--                </div>-->
<!--                <div class="default__form-group-content">-->

<!--                </div>-->
<!--              </div>-->
<!--              <div class="default__form-group">-->
<!--                <div class="default__form-group-title">-->
<!--                  Branch-->
<!--                </div>-->
<!--                <div class="default__form-group-content">-->
<!--                  {{data.branch}}-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="default__form-group">-->
<!--                <div class="default__form-group-title">-->
<!--                  Priority-->
<!--                </div>-->
<!--                <div class="default__form-group-content">-->
<!--                  {{data.priority}}-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="default__form-group">-->
<!--              <div class="default__form-group&#45;&#45;flex flex-column">-->
<!--                <div class="default__form-group-title">-->
<!--                  Members-->
<!--                </div>-->
<!--                <div class="default__form-group-content">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="default__form-group">-->
<!--                <div class="default__form-group-title">-->
<!--                  Description-->
<!--                </div>-->
<!--                <div class="default__form-group-content">-->
<!--                  {{data.description}}-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <FileUpload v-model="data.files" :upload="false" :hotfix="data"/>-->
<!--        </div>-->
<!--      </div>-->
    </el-dialog>
  </div>
</template>

<script>
import FileUpload from '../FileUpload'
import HotfixView from './components/HotfixView'

export default {
  name: 'HotfixModal',
  components: { FileUpload, HotfixView },
  props: {
    visible: {
      type: Boolean
    },
    // hotfix: {
    //   type: Object,
    //   default: function () {
    //     return {
    //       __v: '',
    //       files: [],
    //       title: '',
    //       hotfixCode: '',
    //       state: ''
    //     }
    //   }
    // },
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
  // watch:{
  //   hotfix(){
  //     this.data = { ...this.hotfix }
  //   }
  // },
  computed: {
    hotfix () {
      return this.$store.state.project.hotfixes.find(item => item._id === this.$route.query.id)
    },
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
//.hotfix-modal{
//  .default__modal{
//    &-footer{
//      display: flex;
//      justify-content: space-between;
//      align-items: center;
//      .delete-task {
//        font-family: 'Open Sans', sans-serif;
//        font-weight: bold;
//        font-size: 16px;
//        line-height: 22px;
//        color: #606060;
//        margin-right: 10px;
//        margin-bottom: 10px;
//        cursor: pointer;
//
//        &:hover {
//          color: #FF7262;
//        }
//      }
//    }
//  }
//}
//.save-btn {
//  background: #0ACF83;
//  margin-right: 22px;
//}
//
//.cancel-btn {
//  background: #FF7262;
//}
//
//.default__modal {
//  &-separator {
//    height: 2px;
//    background: linear-gradient(90deg, #3AAACA 2.19%, #43BEB1 50%);
//    border-radius: 2px;
//    margin-top: 18px;
//    margin-bottom: 24px;
//  }
//
//  &-title {
//    font-family: "Open Sans", sans-serif;
//    font-weight: 600;
//    font-size: 20px;
//    line-height: 27px;
//    text-transform: capitalize;
//    color: #2A2A2A;
//  }
//
//  label {
//    font-family: "Open Sans", sans-serif;
//    font-style: normal;
//    font-weight: 600;
//    font-size: 16px;
//    line-height: 22px;
//    color: #3E3E3E;
//    margin-bottom: 10px;
//  }
//
//}
//
//.default__form-group {
//  .input, .el-textarea, .select {
//    margin-top: 10px;
//  }
//
//  &--flex {
//    display: flex;
//    margin: 24px 0;
//  }
//}
//.default__modal-content{
//  .default__form-group{
//    margin-bottom: 24px;
//    &-title{
//      margin-bottom: 6px;
//      font-family: 'Open Sans',sans-serif;
//      font-weight: 600;
//      font-size: 16px;
//      line-height: 22px;
//      text-transform: capitalize;
//      color: #3E3E3E;
//    }
//    .switch-edit{
//      background-color: #FFB84B;
//      width: 28px;
//      height: 28px;
//      display: flex;
//      justify-content: center;
//      border-radius: 4px;
//      position: absolute;
//      top: 0;
//      right: 10px;
//      cursor: pointer;
//    }
//  }
//  .hotfix-meta{
//    display: flex;
//    .default__form-group{
//      margin-right: 100px;
//    }
//  }
//}


</style>
