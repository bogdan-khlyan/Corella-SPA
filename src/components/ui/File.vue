<template>
  <div class="file">
    <div v-if="loading" v-loading="true" style="height: 80px;width: 80px;"></div>
    <el-image
        v-else-if="type === 'image'"
        style="width: 80px;height: 80px"
        fit="contain"
        ref="previewImage"
        :src="src"
        :preview-src-list="[src]" />
  </div>
</template>

<script>
export default {
  name: 'file',
  props: {
    file: {
      type: Object
    }
  },
  data () {
    return {
      loading: false,
      type: 'image',
      src: null
    }
  },
  computed: {
    issueId () {
      return this.$store.state.project.issues
          .find(item => item.issueCode.toString() === this.$route.query.issue)._id
    }
  },
  mounted() { this.init() },
  methods: {
    init: function () {
      if (this.file.filename.indexOf('.png') !== -1 ||
          this.file.filename.indexOf('.jpg') !== -1 ||
          this.file.filename.indexOf('.png') !== -1 ) {
        this.loadImage()
      }
    },
    loadImage: function () {
      this.loading = true
      this.$http.get(`/project/${this.$route.params.id}/issue/${this.issueId}/file/${this.file._id}`,
          { responseType: 'blob' }).then(response => {
        this.src = window.URL.createObjectURL(response.data)
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.file {
  width: max-content;

  padding: 10px;

  box-shadow: 0 0 1px #000000;
  border-radius: 8px;

  background: #FFFFFF;
}
</style>
