<template>
  <div class="default__form-group attachment-group" v-loading="loading">
    <div class="drag-and-drop-zone" @drop.prevent="handleDragAndDrop" @dragover="dragStart" @drop="dragStart"
         @dragleave="dragStart" @dragover.prevent v-if="upload"></div>
    <div class="uploaded-files" v-if="files.length">
      <div class="attachment"
           v-for="file in noPreview"
           :key="file._id">
        <a :href="file.src" :download="file.filename">
          <el-image
              class="attachment__img"
              :src="`/img/filesTypes/${file.filename.split('.')[1]}.svg`"
              alt="img" />
        </a>
        <div class="delete-attachment" @click="attachRemove(file)" v-if="upload">
          <el-image src="/img/attachment-delete.svg" />
        </div>
      </div>
      <div class="attachment"
           v-for="file in preview"
           :key="file._id">
        <el-image class="attachment__img"
                  :src="`/img/filesTypes/${file.filename.split('.')[1]}.svg`"
                  :preview-src-list="filesSrc"
                  alt="img"/>
        <div class="delete-attachment" @click="attachRemove(file)" v-if="upload">
          <el-image src="/img/attachment-delete.svg"/>
        </div>
      </div>
    </div>
    <div class="upload-wrapper" @mouseenter="isBlackPlus=false" @mouseleave="isBlackPlus=true" v-if="upload">
      <div v-if="files.length" class="attachments-count">
        {{ files.length }}
      </div>
      <el-upload
          :class="!files.length?'upload-demo':'upload-demo__not-empty'"
          :action="action"
          :headers="{authorization: `Bearer ${token}`, 'Content-Type': `${fileType}`}"
          :before-upload="handleBeforeUpload"
          :on-success="handleUpload"
          :on-error="handleError"
          multiple
          drag
          :limit="10"
          :on-exceed="handleExceed">
        <el-button :class="!files.length ? 'upload-file upload-file__empty':'upload-file upload-file__contain'">
          <el-image v-if="isBlackPlus || !files.length"
                    src="/img/plus-modal-add-file.svg"
                    class="upload-file__img"/>
          <el-image v-else
                    src="/img/plus-modal-add-file-white.svg"
                    class="upload-file__img"/>
          {{ !files.length ? 'Select a file' : '' }}
        </el-button>
        <div slot="tip" class="el-upload__tip">
          {{ !files.length ? 'Or drag and drop the file here' : '' }}
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>

export default {
  name: 'fileUpload',
  data() {
    return {
      formData: new FormData(),
      fileType: '',
      filesSrc: [],
      loading: true,
      isBlackPlus: true
    }
  },
  model: {
    prop: 'files',
    event: 'input'
  },
  props: {
    files: {
      type: Array,
      default: function () {
        return []
      }
    },
    upload: {
      type: Boolean,
      required: false,
      default: function () {
        return true
      }
    },
  },
  computed: {
    host() {
      return this.$store.state.host
    },
    token() {
      return this.$store.state.user.jwt
    },
    projectId() {
      return this.$route.params.id
    },
    issueId() {
      return this.$route.query.issueId
    },
    hotfixId() {
      return this.$route.query.id
    },
    type() {
      if (this.$route.path.match('hotfixes')) return 'hotfixes'
      else return 'issue'
    },
    hotfix() {
      return this.$store.state.project.currentHotfix
    },
    action() {
      if (this.$route.path.match('hotfixes'))
        return `${this.host}/projects/${this.projectId}/hotfixes/${this.hotfixId}/attach`
      else
        return `${this.host}/projects/${this.projectId}/issues/${this.issueId}/attach`

    },
    preview() {
      return this.files.filter(file => file.filename.match('jpg') || file.filename.match('png'))
    },
    noPreview() {
      return this.files.filter(file => !file.filename.match('jpg') && !file.filename.match('png'))
    }
  },
  methods: {
    async attachRemove(e) {
      await this.$confirm('This will permanently delete the attachment. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: "warning"
      })
      console.log(this.hotfix)
      const isHotfix = this.type === 'hotfixes'
      const url = isHotfix ? `/projects/${this.$route.params.id}/hotfixes/${this.$route.query.id}/detach/${e._id}` : `/projects/${this.$route.params.id}/issues/${this.$route.query.issueId}/detach/${e._id}`
      this.loading = true
      try {
        await this.$http.delete(url)
        if (isHotfix) {
          this.hotfix.files = this.hotfix.files.filter(file => file._id !== e._id)
          this.$store.commit('setCurrentHotfix', this.hotfix)
          this.files = this.hotfix.files
          this.$emit('input')
          //this.$router.push(`${this.$route.path}?id=${this.hotfix._id}`).catch(() => {})
        } else {
          await this.$api.project.issue.setCurrentIssue(this.$route.params.id, this.$route.query.issueId)
        }
      } catch (e) {
        throw e
      }
      this.loading = false
    },
    dragStart(e) {
      console.log(e.type)
    },
    handleError() {
    },
    handleExceed() {
    },
    handleDragAndDrop(e) {
      this.handleBeforeUpload(e.dataTransfer.files[0])
      this.handleUpload()
    },
    async handleBeforeUpload(e) {
      await this.formData.append('files', e)
      this.fileType = this.formData.get('files').type
    },
    async handleUpload() {
      const uploadedFile = this.formData.get('files')
      const typeId = this.type === 'hotfixes' ? this.hotfixId : this.issueId
      this.loading = true
      await this.$api.project.uploadFile(this.projectId, typeId, this.type, this.formData, this.fileType).then((res) => {
        const files = this.files
        files.push({
          filename: uploadedFile.name,
          length: uploadedFile['length'],
          _id: res.data[0]
        })
        this.files = files
        this.$emit('input')
        if (this.type === 'hotfixes')
          this.$store.commit('setCurrentHotfix', this.hotfix)
        else
          this.$api.project.issue.setCurrentIssue(this.projectId, this.issueId)
      }).catch(e => {
        console.log(e)
        this.loading = false
      })
      this.formData = new FormData()
      this.loading = false
    },
    getFilesUrl() {
      this.preview.forEach(file => {
        this.$http.get(
            this.type === 'hotfixes' ? `/projects/${this.projectId}/hotfixes/${this.hotfixId}/attached/${file._id}` : `/projects/${this.projectId}/issues/${this.issueId}/attachment/${file._id}`,
            {responseType: 'blob'})
            .then(res => {
              this.filesSrc.push(window.URL.createObjectURL(res.data))
            })
            .catch(e => console.log(e))
      })
      this.loading = false
      this.noPreview.forEach(file => {
        this.$http.get(
            this.type === 'hotfixes' ? `/projects/${this.projectId}/hotfixes/${this.hotfixId}/attached/${file._id}` : `/projects/${this.projectId}/issues/${this.issueId}/attachment/${file._id}`,
            {responseType: 'blob'})
            .then(res => {
              file.src = window.URL.createObjectURL(res.data)
            })
            .catch(e => console.log(e))
      })
    }
  },
  mounted() {
    this.getFilesUrl()
    // console.log(this.hotfix)
  }
}
</script>

<style scoped lang="scss">
.upload-file {
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid #0ACF83;
  color: #1B1A18;
}

.upload-file__contain {
  width: 63px;
  height: 63px;
  position: relative;
  transition: all ease-in 0.2s;

  &:hover {
    background: #0ACF83;
    color: white;
  }
}

.upload-wrapper {
  position: relative;
  height: 63px;

  &:hover .attachments-count {
    border: 1px solid white;
    //width: 23px;
    //height: 23px;
  }
}

.attachments-count {
  position: absolute;
  z-index: 999;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  top: -7px;
  right: -7px;
  background: #0ACF83;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover + .upload-demo__not-empty .upload-file {
    background: #0ACF83;
    color: white;
  }
}

.upload-file__empty {
  padding: 15px 73px 15px 53px;
  margin-top: 22px;
}

.uploaded-files {
  display: flex;
  align-items: center;
}

.attachment-group {
  align-items: center;
  display: flex;
  padding: 22px 0 38px 0;
  position: relative;

  .attachment {
    margin-right: 44px;
    position: relative;

    .attachment__img {
      padding: 17px;
      background: #FFFFFF;
      box-shadow: 0 0 1px #000000;
      border-radius: 8px;
      width: 28px;
    }
  }
}

.drag-and-drop-zone {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: unset;
}

.delete-attachment {
  top: -10px;
  width: 24px;
  height: 24px;
  background-color: #FF7262;
  position: absolute;
  z-index: 999;
  right: -10px;
  display: none;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}

.attachment:hover .delete-attachment {
  display: flex;
}
</style>
